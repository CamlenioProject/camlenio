import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const Gmail = "camleniosoftware@gmail.com";

// -------------------------
//  API ROUTE
// -------------------------
export async function POST(req: Request) {
  try {
    const { type, name, email, phone, project, message, source } =
      await req.json();

    if (!name || !email || !phone || !project || !message || !source) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // -------------------------
    //  EMAIL SETUP
    // -------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions;

    switch (type) {
      case "contact":
        mailOptions = {
          from: `"contact-us Enquiry" <${process.env.SMTP_USER}>`,
          to: Gmail,
          subject: "New contact-us Enquiry",
          html: `
            <h2>New contact-us Enquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>phone:</b> ${phone}</p>
            <p><b>Project:</b> ${project || "N/A"}</p>
            <p><b>Message:</b> ${message || "N/A"}</p>
          `,
        };
        break;

      case "popup":
        mailOptions = {
          from: `"Pop-up query" <${process.env.SMTP_USER}>`,
          to: Gmail,
          subject: "New Pop-up query",
          html: `
            <h2>New Pop-up Chat Enquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Message:</b> ${message || "N/A"}</p>
          `,
        };
        break;

      case "chatbot":
        mailOptions = {
          from: `"ChatBot Enquiry" <${process.env.SMTP_USER}>`,
          to: Gmail,
          subject: "New ChatBot Enquiry",
          html: `
            <h2>New Chat Enquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>phone:</b> ${phone}</p>
            <p><b>Project:</b> ${project || "N/A"}</p>
            <p><b>Message:</b> ${message || "N/A"}</p>
          `,
        };
        break;

      case "demo":
        mailOptions = {
          from: `"Get Free Demo Enquiry" <${process.env.SMTP_USER}>`,
          to: Gmail,
          subject: "Get a Demo Enquiry",
          html: `
            <h2>Get a Demo Enquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>phone:</b> ${phone}</p>
            <p><b>Message:</b> ${message || "N/A"}</p>
          `,
        };
        break;

      default:
        return NextResponse.json(
          { success: false, message: "Invalid enquiry type" },
          { status: 400 }
        );
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
