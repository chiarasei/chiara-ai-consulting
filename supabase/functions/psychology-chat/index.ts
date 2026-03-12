import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }
  if (record.count >= 10) return false;
  record.count++;
  return true;
}

const chatSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().max(2000),
  })).max(50),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(clientIp)) {
      return new Response(JSON.stringify({ error: "Too many requests." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rawBody = await req.json();
    const validation = chatSchema.safeParse(rawBody);
    if (!validation.success) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages } = validation.data;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("Configuration error");

    const systemPrompt = `You are a friendly and professional AI assistant for Psykolog Praktiken, a private psychology practice based in Gothenburg, Sweden.

About the practice:
- Led by Dr. Anna Lindqvist, a licensed psychologist with over 10 years of experience
- Located in Gothenburg, Sweden
- Offers both in-person and online (video) sessions
- Contact: kontakt@psykologpraktiken.se, +46 70 123 4567

Services offered:
- Individual therapy (50 min, 1,000 SEK) – for anxiety, depression, stress, life transitions
- Couples therapy (75 min, 1,400 SEK) – communication, conflict resolution, trust
- Stress & anxiety support – evidence-based strategies
- Trauma & emotional support – gentle, structured approach

How booking works:
1. Book an initial consultation (free 15-min call or fill out the contact form)
2. First session to understand needs
3. Ongoing therapy tailored to the client

CRITICAL LANGUAGE RULES:
- You MUST detect the language of the user's message and respond ENTIRELY in that same language.
- If the user writes in English, respond ONLY in English. Do NOT mix in any Swedish words.
- If the user writes in Swedish, respond ONLY in Swedish. Do NOT mix in any English words.
- NEVER start a response in one language and switch to another mid-sentence.
- When someone wants to book, direct them to the Contact page booking calendar or call +46 70 123 4567.
- Keep answers concise (2-4 sentences).
- Be warm, empathetic, and professional. Use simple language.
- If asked about something outside therapy/the practice, gently redirect.
- Never diagnose or give medical advice. Encourage seeking professional help.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong." }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
