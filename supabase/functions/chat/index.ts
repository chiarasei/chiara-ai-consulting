import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Chat request received:", { messageCount: messages.length, language });

    const systemPrompt = language === "sv" 
      ? `Du är en vänlig assistent för ChiaraAI Consulting. Vi hjälper små företag i Sverige att spara tid med smarta verktyg.
         Vi arbetar med hotell, restauranger, kaféer och salonger.
         
         VIKTIGT - Så här ska du svara:
         - Använd enkla, vardagliga ord. Undvik facktermer och tekniskt språk.
         - Förklara saker som om du pratar med någon som aldrig använt en dator förut.
         - Håll svaren korta och tydliga.
         - Ge konkreta exempel som är lätta att förstå.
         - Istället för "AI-chatbot" säg "en smart assistent som svarar på frågor åt dig"
         - Istället för "automatisering" säg "att saker sköter sig själva"
         
         Svara alltid på svenska. Var varm och hjälpsam.
         Om någon frågar om priser, säg att vi skräddarsyr lösningar och att de gärna får boka ett gratis samtal med oss.`
      : `You are a friendly assistant for ChiaraAI Consulting. We help small businesses in Sweden save time with smart tools.
         We work with hotels, restaurants, cafés, and salons.
         
         IMPORTANT - How to respond:
         - Use simple, everyday words. Avoid jargon and technical terms.
         - Explain things as if talking to someone who has never used a computer.
         - Keep answers short and clear.
         - Give real-life examples that are easy to understand.
         - Instead of "AI chatbot" say "a smart assistant that answers questions for you"
         - Instead of "automation" say "things that take care of themselves"
         
         Always respond in English. Be warm and helpful.
         If someone asks about pricing, say we create custom solutions and they can book a free call with us.`;

    console.log("Calling Lovable AI Gateway...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
