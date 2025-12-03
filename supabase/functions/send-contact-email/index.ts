import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, business, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission from:", email);

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
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Business/Industry:</strong> ${business || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided"}</p>
    `;

    await client.send({
      from: fromEmail,
      to: fromEmail, // Send to your own email
      subject: `New Contact: ${name} - ChiaraAI Consulting`,
      content: notificationHtml,
      html: notificationHtml,
    });

    console.log("Notification email sent to business owner");

    // 2. Send confirmation email to the visitor
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Thank you for reaching out, ${name}!</h1>
        <p>We've received your message and our team will get back to you within 24 hours.</p>
        <p>Here's a copy of your submission:</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${business ? `<p><strong>Business/Industry:</strong> ${business}</p>` : ""}
          ${message ? `<p><strong>Your message:</strong><br/>${message}</p>` : ""}
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
