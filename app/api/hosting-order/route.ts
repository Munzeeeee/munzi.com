import { NextRequest, NextResponse } from "next/server";
import { hostingPlans } from "@/content/hosting-plans";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, plan, domain, notes } = body;

    if (!name || !email || !plan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL || "info@munzeer.com";

    const planDetails = hostingPlans.find((p) => p.id === plan);

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const ownerEmailHtml = `
      <h2 style="color:#7c3aed">New Hosting Order</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555;width:140px">Name</td><td style="padding:10px">${name}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#555">Email</td><td style="padding:10px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555">WhatsApp</td><td style="padding:10px">${whatsapp || "Not provided"}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#555">Plan</td><td style="padding:10px"><strong>${planDetails?.name || plan} — $${planDetails?.price}/month</strong></td></tr>
        <tr style="background:#f4f4f5"><td style="padding:10px;font-weight:bold;color:#555">Domain</td><td style="padding:10px">${domain || "Needs new domain"}</td></tr>
        <tr><td style="padding:10px;font-weight:bold;color:#555;vertical-align:top">Notes</td><td style="padding:10px">${notes || "None"}</td></tr>
      </table>
      <p style="margin-top:16px;background:#fff3cd;border-radius:8px;padding:12px;color:#856404">
        <strong>Action required:</strong> Set up hosting on Hostinger Agency account and send login details to ${email}
      </p>
    `;

    const confirmationHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#7c3aed">Hosting order received, ${name}!</h2>
        <p>We'll set up your <strong>${planDetails?.name || plan}</strong> hosting within <strong>24 hours</strong> and send you all login details.</p>
        <div style="background:#f4f4f5;border-radius:12px;padding:20px;margin:20px 0">
          <p style="margin:0 0 8px;font-weight:bold">Your order:</p>
          <p style="margin:4px 0;color:#555">Plan: ${planDetails?.name || plan} — $${planDetails?.price}/month</p>
          <p style="margin:4px 0;color:#555">Domain: ${domain || "New domain needed"}</p>
        </div>
        <p>Questions? WhatsApp us at <a href="https://wa.me/971569793494">+971 56 979 3494</a>.</p>
        <p style="color:#888;font-size:13px">— The Munzeer.com Team</p>
      </div>
    `;

    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Munzeer.com <noreply@munzeer.com>",
          to: OWNER_EMAIL,
          subject: `[Hosting Order] ${planDetails?.name || plan} — ${name}`,
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
          subject: `Hosting order confirmed — Munzeer.com`,
          html: confirmationHtml,
        }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Hosting order API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
