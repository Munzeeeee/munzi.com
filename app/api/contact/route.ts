import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL || "enquiry.munzeer@gmail.com";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const ownerEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;color:#555">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555">Email</td><td style="padding:8px">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555">WhatsApp</td><td style="padding:8px">${whatsapp || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555">Subject</td><td style="padding:8px">${subject}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#555;vertical-align:top">Message</td><td style="padding:8px">${message.replace(/\n/g, "<br>")}</td></tr>
      </table>
    `;

    const confirmationHtml = `
      <h2>Thanks for getting in touch, ${name}!</h2>
      <p>We've received your message and will get back to you within 2 hours.</p>
      <p><strong>Your message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      <p>If it's urgent, WhatsApp us directly at +971 56 979 3494.</p>
      <p>— The Munzeer.com Team</p>
    `;

    const [ownerRes, confirmationRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Munzeer.com <noreply@munzeer.com>",
          to: OWNER_EMAIL,
          subject: `[Contact] ${subject} — from ${name}`,
          html: ownerEmailHtml,
          reply_to: email,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Munzeer.com <noreply@munzeer.com>",
          to: email,
          subject: "We received your message — Munzeer.com",
          html: confirmationHtml,
        }),
      }),
    ]);

    if (!ownerRes.ok) {
      const err = await ownerRes.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
