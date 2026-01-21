const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const subjectLabels: Record<string, string> = {
  microcement: "Mikrocement",
  decorative: "Dekorativne tehnike",
  consultation: "Besplatna konzultacija",
  quote: "Ponuda za projekt",
  other: "Ostalo",
};

async function sendEmail(to: string[], subject: string, html: string, replyTo?: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Tactura Web <onboarding@resend.dev>",
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  });
  
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to send email: ${error}`);
  }
  
  return await res.json();
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { firstName, lastName, email, subject });

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Sva obavezna polja moraju biti ispunjena" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const subjectLabel = subjectLabels[subject] || subject;

    // Send email to company
    const emailResponse = await sendEmail(
      ["tactura.hr@gmail.com"],
      `Nova poruka s web stranice: ${subjectLabel}`,
      `
        <h2>Nova poruka s kontakt forme</h2>
        <p><strong>Ime i prezime:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
        <p><strong>Tema upita:</strong> ${subjectLabel}</p>
        <hr />
        <h3>Poruka:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Ova poruka je poslana putem kontakt forme na web stranici Tactura.</p>
      `,
      email
    );

    console.log("Email sent successfully to company:", emailResponse);

    // Send confirmation email to user
    const confirmationResponse = await sendEmail(
      [email],
      "Primili smo vašu poruku - Tactura",
      `
        <h2>Hvala vam na poruci, ${firstName}!</h2>
        <p>Primili smo vašu poruku i javit ćemo vam se u najkraćem mogućem roku.</p>
        <p><strong>Tema upita:</strong> ${subjectLabel}</p>
        <h3>Vaša poruka:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>S poštovanjem,<br><strong>Tactura tim</strong></p>
        <p style="color: #666; font-size: 12px;">
          Tactura j.d.o.o.<br>
          Ivana Gundulića 78, 31000 Osijek<br>
          Tel: 095 123 9870<br>
          Email: tactura.hr@gmail.com
        </p>
      `
    );

    console.log("Confirmation email sent to user:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Email uspješno poslan" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Greška pri slanju emaila" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
