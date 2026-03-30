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

    const systemPrompt = `Du är en vänlig kundtjänstmedarbetare för Göteborg El & Service, en auktoriserad elfirma i Göteborg, Sverige.

OM FÖRETAGET:
- Auktoriserad elfirma som betjänar Göteborg och omnejd
- Tjänster: elinstallation, felsökning, laddbox-installation (elbilsladdare), solcellsinstallation och service
- Arbetstider: Måndag till fredag, 07:00–17:00
- Kontakt: 031-765 43 21, info@goteborgel.se
- Adress: Göteborg, Sverige

KONVERSATIONSFLÖDE:
Följ detta steg-för-steg (en fråga i taget):

1. Första meddelandet: "Hej! Vad behöver du hjälp med?"
   Erbjud alternativ:
   - Elinstallation
   - Felsökning
   - Laddbox (elbilsladdare)
   - Solceller
   - Annat

2. Efter val av tjänst, fråga:
   "Kan du kort beskriva problemet eller jobbet?"

3. Efter beskrivning, samla kontaktuppgifter (en fråga i taget):
   - Namn
   - Telefonnummer
   - Adress

4. Avsluta med:
   "Tack! Din förfrågan är skickad. Vi återkommer så snabbt som möjligt."

PRISUPPGIFTER (ungefärliga):
- Felsökning: från 995 SEK (inkl. första timmen)
- Elinstallation: offert baserad på omfattning
- Laddbox-installation: från 8 000 SEK (material + installation)
- Solceller: offert efter hembesök
- ROT-avdrag gäller för arbetskostnad (30% avdrag)

VIKTIGA REGLER:
- Detektera språk och svara på SAMMA språk (svenska eller engelska)
- Nämn ALDRIG att du är AI, bot eller automatiserad
- Låt som en riktig kundtjänstmedarbetare på en elfirma
- Håll svar korta (2-4 meningar max)
- Var professionell, vänlig och tydlig
- Om du inte vet något specifikt, säg att en kollega återkommer
- Uppmuntra alltid att skicka förfrågan via hemsidan eller ringa kontoret
- Använd enkelt vardagligt språk`;

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
