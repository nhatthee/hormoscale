import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim();
    const medication = String(body.medication || "");
    const currentWeight = String(body.currentWeight || "");
    const goalWeight = String(body.goalWeight || "");
    const pdfBase64 = String(body.pdfBase64 || "");

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    const emailResult = await resend.emails.send({
      from: "Hormoscale <report@hormoscale.com>",
      to: email,
      subject: "Your Hormoscale GLP-1 Report",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #2A1A4A; line-height: 1.6;">
          <div style="background:#6B3FA0; color:#ffffff; padding:24px; border-radius:20px;">
            <p style="margin:0 0 8px; color:#F5A623; font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase;">
              Hormoscale Report
            </p>
            <h1 style="margin:0; font-size:28px; line-height:1.2;">
              Your GLP-1 Weight Management Report
            </h1>
          </div>

          <p style="margin-top:24px;">
            Thanks for using Hormoscale. Your personalized GLP-1 weight-management report is attached to this email.
          </p>

          <h2 style="margin-top:28px; color:#4A2A75;">Your Summary</h2>

          <table style="width:100%; border-collapse:collapse; margin-top:12px;">
            <tr>
              <td style="padding:10px; border-bottom:1px solid #eee;"><strong>Medication</strong></td>
              <td style="padding:10px; border-bottom:1px solid #eee;">${medication || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:10px; border-bottom:1px solid #eee;"><strong>Current Weight</strong></td>
              <td style="padding:10px; border-bottom:1px solid #eee;">${currentWeight || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:10px; border-bottom:1px solid #eee;"><strong>Goal Weight</strong></td>
              <td style="padding:10px; border-bottom:1px solid #eee;">${goalWeight || "N/A"}</td>
            </tr>
          </table>

          <p style="margin-top:24px; color:#6B3FA0;">
            Keep this email for your records. Your PDF report is attached below.
          </p>

          <div style="margin-top:28px; padding:16px; background:#FFF7E6; border-left:4px solid #F5A623; border-radius:12px;">
            <strong>Medical Disclaimer:</strong>
            This report is for informational purposes only and is not medical advice.
            Individual results vary. Please consult a licensed healthcare provider before starting or adjusting any weight-management treatment.
          </div>

          <p style="margin-top:28px;">Hormoscale Labs</p>
        </div>
      `,
      attachments: pdfBase64
        ? [
            {
              filename: "hormoscale-glp1-results.pdf",
              content: pdfBase64,
            },
          ]
        : [],
    });

    return NextResponse.json({
      success: true,
      data: emailResult,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Email send failed" },
      { status: 500 }
    );
  }
}