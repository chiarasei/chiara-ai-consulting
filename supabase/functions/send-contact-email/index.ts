import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().max(255).trim(),
  phone: z.string().max(20).optional(),
  business: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
});

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.log("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate input
    const rawBody = await req.json();
    const validationResult = contactSchema.safeParse(rawBody);
    
    if (!validationResult.success) {
      console.log("Validation failed:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Invalid input data", details: validationResult.error.errors }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, business, message } = validationResult.data;

    // Sanitize all inputs for HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeBusiness = escapeHtml(business || "Not provided");
    const safeMessage = escapeHtml(message || "No message provided");

    console.log("Received validated contact form submission from:", email);

    const smtpUser = Deno.env.get("ZOHO_SMTP_USER");
    const smtpPassword = Deno.env.get("ZOHO_SMTP_PASSWORD");
    const fromEmail = Deno.env.get("ZOHO_FROM_EMAIL");

    if (!smtpUser || !smtpPassword || !fromEmail) {
      console.error("Missing SMTP credentials");
      throw new Error("SMTP credentials not configured");
    }

    const client = new SmtpClient();

    // Connect to Zoho SMTP
    await client.connectTLS({
      hostname: "smtp.zoho.eu",
      port: 465,
      username: smtpUser,
      password: smtpPassword,
    });

    console.log("Connected to Zoho SMTP");

    // 1. Send notification email to business owner
    const notificationHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Business/Industry:</strong> ${safeBusiness}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `;

    await client.send({
      from: fromEmail,
      to: fromEmail,
      subject: `New Contact: ${safeName} - ChiaraAI Consulting`,
      content: notificationHtml,
      html: notificationHtml,
    });

    console.log("Notification email sent to business owner");

    // 2. Send confirmation email to the visitor
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Thank you for reaching out, ${safeName}!</h1>
        <p>We've received your message and our team will get back to you within 24 hours.</p>
        <p>Here's a copy of your submission:</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
          ${business ? `<p><strong>Business/Industry:</strong> ${safeBusiness}</p>` : ""}
          ${message ? `<p><strong>Your message:</strong><br/>${safeMessage}</p>` : ""}
        </div>
        <p>Best regards,<br/>ChiaraAI Consulting Team</p>
        <p style="color: #666; font-size: 12px;">Gothenburg, Sweden | +46 73 531 69 50</p>
      </div>
    `;

    await client.send({
      from: fromEmail,
      to: email,
      subject: "We received your message - ChiaraAI Consulting",
      content: confirmationHtml,
      html: confirmationHtml,
    });

    console.log("Confirmation email sent to visitor:", email);

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
