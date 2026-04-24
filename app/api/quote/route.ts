import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, service, budget, timeline, details } = body;

    if (!name || !email || !service || !budget || !timeline || !details) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL || "enquiry.munzeer@gmail.com";

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const ownerEmailHtml = `
      <h2 style="color:#7c3aed">New Quote Request — ${service}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555;width:140px">Name</td><td style="padding:10px">${name}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#555">Email</td><td style="padding:10px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555">WhatsApp</td><td style="padding:10px">${whatsapp || "Not provided"}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#555">Service</td><td style="padding:10px"><strong>${service}</strong></td></tr>
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555">Budget</td><td style="padding:10px">${budget}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#555">Timeline</td><td style="padding:10px">${timeline}</td></tr>
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555;vertical-align:top">Details</td><td style="padding:10px">${details.replace(/\n/g, "<br>")}</td></tr>
      </table>
      <p style="margin-top:20px;color:#888;font-size:12px">Reply to this email or contact on WhatsApp: ${whatsapp || "not provided"}</p>
    `;

    const confirmationHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#7c3aed">Thanks for your quote request, ${name}!</h2>
        <p>We've received your request for <strong>${service}</strong> and will review it within 2 hours.</p>
        <div style="background:#f4f4f5;border-radius:12px;padding:20px;margin:20px 0">
          <p style="margin:0 0 8px;font-weight:bold">Your request summary:</p>
          <p style="margin:4px 0;color:#555">Service: ${service}</p>
          <p style="margin:4px 0;color:#555">Budget: ${budget}</p>
          <p style="margin:4px 0;color:#555">Timeline: ${timeline}</p>
        </div>
        <p>If it's urgent, WhatsApp us directly at <a href="https://wa.me/971569793494">+971 56 979 3494</a>.</p>
        <p style="color:#888;font-size:13px">— The Munzeer.com Team</p>
      </div>
    `;

    const [ownerRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Munzeer.com <noreply@munzeer.com>",
          to: OWNER_EMAIL,
          subject: `[Quote] ${service} — ${name} (${budget})`,
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
          subject: `Quote request received — ${service} | Munzeer.com`,
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
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
