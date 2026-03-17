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

    const systemPrompt = `You are a friendly customer service assistant for Göteborg Clean Services, a professional cleaning company based in Gothenburg, Sweden.

ABOUT THE COMPANY:
- Professional cleaning company serving Gothenburg and surrounding areas
- Services: home cleaning (hemstädning), deep cleaning (storstädning), office cleaning (kontorsstädning), move-out cleaning (flyttstädning)
- All services qualify for RUT-avdrag (Swedish tax deduction for household services), meaning customers pay only half price
- Working hours: Monday to Saturday, 08:00–17:00
- Contact: 031-123 45 67, info@goteborgclean.se
- Address: Göteborg, Sverige

PRICING GUIDELINES (approximate, before RUT deduction):
- Home cleaning: from 800 SEK (1-2 rooms), 1200 SEK (3-4 rooms), 1600 SEK (5+ rooms)
- Deep cleaning: from 2500 SEK depending on size
- Office cleaning: custom quote based on office size
- Move-out cleaning: from 2000 SEK for apartment, 3500 SEK for house
- With RUT-avdrag, customers pay approximately half

BOOKING FLOW:
When a customer wants to book, ask step by step (one question at a time):
1. What type of cleaning do they need?
2. What date works for them?
3. What time? (available slots: 09:00, 10:00, 11:00, 13:00, 14:00, 15:00, 16:00)
4. What is the address?
5. Their name and phone number or email

After collecting all details, confirm with: "Tack! Vi kontaktar dig inom kort för att bekräfta din bokning." (or English equivalent)

PRICE ESTIMATES:
When asked about pricing, ask:
1. Type of cleaning
2. Size (number of rooms or square meters)
Then give an approximate price and mention the RUT deduction.

CRITICAL RULES:
- Detect the language of the user and respond in the SAME language (Swedish or English)
- NEVER mention AI, automation, technology, or that you are a bot
- Sound like a real, friendly receptionist at a cleaning company
- Keep answers short (2-4 sentences max)
- Be warm, professional, and helpful
- If you don't know something specific, say you'll have a colleague follow up
- Always encourage booking through the website or calling the office
- Use simple everyday language, no technical jargon`;

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
      return new Response(JSON.stringify({ error: "Service temporarily unavailable" }), {
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
