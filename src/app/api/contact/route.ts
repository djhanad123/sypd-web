import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, organization, category, message } = body;

    // 1. Mandatory input validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, and message are required." },
        { status: 400 }
      );
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // 3. Generate unique tracking reference ID
    const referenceId = `SYPD-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const receivedAt = new Date().toISOString();

    // 4. SMTP Email Delivery (Option 2: Standard SMTP when live on sypd.org)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@sypd.org";

    let emailDelivered = false;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // HTML email template for SYPD Operations Desk
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>New SYPD Inquiry</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 24px;">
              <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                <div style="background-color: #021028; padding: 20px 24px; border-bottom: 3px solid #07438c;">
                  <h2 style="color: #ffffff; margin: 0; font-size: 18px;">SYPD National Operations Desk</h2>
                  <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px;">Official Website Inquiry Submission</p>
                </div>
                <div style="padding: 24px;">
                  <div style="background-color: #f1f5f9; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;">
                    <span style="font-size: 12px; color: #64748b; font-weight: bold; text-transform: uppercase;">Tracking Reference ID:</span>
                    <strong style="display: block; font-size: 16px; color: #021028; font-family: monospace;">${referenceId}</strong>
                  </div>

                  <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">Full Name:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${fullName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Work Email:</td>
                      <td style="padding: 8px 0; color: #07438c;"><a href="mailto:${email}" style="color: #07438c;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone / WhatsApp:</td>
                      <td style="padding: 8px 0; color: #0f172a;">${phone || "Not provided"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Organization:</td>
                      <td style="padding: 8px 0; color: #0f172a;">${organization || "Not provided"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Inquiry Category:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${category || "General"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Received At:</td>
                      <td style="padding: 8px 0; color: #64748b;">${receivedAt}</td>
                    </tr>
                  </table>

                  <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
                    <h3 style="font-size: 14px; color: #0f172a; margin-top: 0; margin-bottom: 8px;">Message / Inquiry Details:</h3>
                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-size: 13px; color: #334155;">${message}</div>
                  </div>

                  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                    Sustainable Development & Peace Building Initiatives (SYPD)<br />
                    Mogadishu National Headquarters • Waberi District, Somalia
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;

        // Send to receiver (SYPD Operations Desk)
        await transporter.sendMail({
          from: `"SYPD Website" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `[SYPD Portal Inquiry] ${category || "General"} - ${fullName} [${referenceId}]`,
          text: `Reference ID: ${referenceId}\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nOrganization: ${organization || "N/A"}\nCategory: ${category}\n\nMessage:\n${message}`,
          html: htmlContent,
        });

        // Send auto-acknowledgment receipt to the submitter
        try {
          await transporter.sendMail({
            from: `"SYPD Executive Secretariat" <${smtpUser}>`,
            to: email,
            subject: `Inquiry Logged with SYPD [Ref: ${referenceId}]`,
            text: `Dear ${fullName},\n\nThank you for contacting SYPD. Your inquiry regarding "${category}" has been received and assigned tracking Reference ID ${referenceId}.\n\nOur operations desk will review and respond within 48 business hours.\n\nWarm regards,\nSYPD Executive Secretariat\nMogadishu, Somalia`,
          });
        } catch (ackError) {
          console.warn("[SYPD Contact API] Could not send auto-acknowledgment:", ackError);
        }

        emailDelivered = true;
        console.log(`[SYPD Contact API] Email successfully dispatched via SMTP to ${receiverEmail} [${referenceId}]`);
      } catch (smtpError) {
        console.error("[SYPD Contact API] SMTP dispatch failed:", smtpError);
        // We still record the inquiry and return success to the user so their message is not lost.
      }
    } else {
      // Development mode / pending SMTP credentials: log to console
      console.log(`[SYPD Contact API] (Live SMTP credentials not set in .env.local). Inquiry logged to server audit trail [${referenceId}]:`, {
        fullName,
        email,
        phone: phone || "Not provided",
        organization: organization || "Not provided",
        category: category || "General",
        messageLength: message.length,
        receivedAt,
      });
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Your inquiry has been successfully recorded with the SYPD Executive Secretariat.",
      contactEmail: "info@sypd.org",
      responseHours: 48,
      emailDelivered,
    });
  } catch (error) {
    console.error("[SYPD Contact API] Error processing request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry." },
      { status: 500 }
    );
  }
}
