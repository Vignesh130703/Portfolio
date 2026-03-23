import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer with environment variables or fallback to ethereal/dummy structure for portfolio
    // For local dev/portfolio purposes where real SMTP isn't provided yet, we'll log it and succeed.
    // In production, user will populate SMTP_HOST, SMTP_USER, SMTP_PASS.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // We only attempt to send if environment variables are set. 
    // Otherwise we simulate a successful request to showcase the frontend flow.
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_EMAIL || "vignesh@example.com",
        subject: `New Lead: ${name} via Portfolio`,
        text: message,
        html: `<div>
                <h1>New Lead from Portfolio</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
              </div>`,
      });
    } else {
      console.log(`[DEV MODE] Simulated email sent from ${name} (${email}): ${message}`);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send message", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
