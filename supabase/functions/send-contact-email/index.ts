import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_TO = "info@chiaraaiconsulting.se";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().default(""),
  need: z.string().trim().min(1).max(120),
  budget: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(1).max(2000),
  language: z.enum(["en", "sv"]).optional().default("en"),
});

// 10 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const r = rateLimitMap.get(ip);
  if (!r || now > r.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60_000 });
    return true;
  }
  if (r.count >= 10) return false;
  r.count++;
  return true;
}

const escapeHtml = (t: string) =>
  t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...corsHeaders } });

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(ip)) return json({ error: "Too many requests. Please try again later." }, 429);

    const parsed = contactSchema.safeParse(await req.json());
    if (!parsed.success) return json({ error: "Invalid input data" }, 400);
    const d = parsed.data;

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: row, error: dbError } = await supabase
      .from("contact_enquiries")
      .insert({
        name: d.name, email: d.email, company: d.company || null, need: d.need,
        budget: d.budget || null, message: d.message, language: d.language,
      })
      .select("id")
      .single();
    if (dbError) {
      console.error("DB insert failed:", dbError);
      return json({ error: "Could not save your message." }, 500);
    }

    // Email is best effort: the enquiry is already saved.
    try {
      const user = Deno.env.get("ZOHO_SMTP_USER");
      const pass = Deno.env.get("ZOHO_SMTP_PASSWORD");
      const from = Deno.env.get("ZOHO_FROM_EMAIL");
      if (!user || !pass || !from) throw new Error("SMTP credentials not configured");
      const client = new SMTPClient({
        connection: { hostname: "smtppro.zoho.eu", port: 465, tls: true, auth: { username: user, password: pass } },
      });
      const rows: [string, string][] = [
        ["Name", d.name], ["Email", d.email], ["Company", d.company || "Not provided"],
        ["Needs", d.need], ["Budget", d.budget || "Not provided"], ["Site language", d.language.toUpperCase()],
      ];
      const html = `<h2>New enquiry from chiaraaiconsulting.se</h2>
        ${rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("")}
        <p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(d.message)}</p>`;
      await client.send({ from, to: NOTIFY_TO, replyTo: d.email, subject: `New enquiry: ${d.name} (${d.need})`, html });
      await client.close();
      await supabase.from("contact_enquiries").update({ email_sent: true }).eq("id", row.id);
    } catch (mailError) {
      console.error("Notification email failed:", mailError);
    }

    return json({ success: true });
  } catch (error) {
    console.error("send-contact-email error:", error);
    return json({ error: "Failed to send message. Please try again later." }, 500);
  }
});
