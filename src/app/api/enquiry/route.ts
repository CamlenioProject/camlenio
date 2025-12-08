import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// const Gmail = "dev.rahul.kumar.sharma@gmail.com";
const Gmail = "camleniosoftware@gmail.com";

interface EnquiryBody {
  type: "contact" | "popup" | "chatbot" | "demo";
  name: string;
  email: string;
  phone: string;
  project?: string;
  message?: string;
  source?: string;
}

export async function POST(req: Request) {
  try {
    const body: EnquiryBody = await req.json();
    body.source = body.source || body.type;

    const { type, name, email, phone, project, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions: Record<string, unknown> = {};

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
          from: `"Demo Enquiry" <${process.env.SMTP_USER}>`,
          to: Gmail,
          subject: "New Demo Enquiry",
          html: `
            <h2>New Demo Chat Enquiry</h2>
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
    const BACKEND_URL = process.env.BACKEND_URL;
    console.log(BACKEND_URL, "alhdkjadlkj");
    const saveResponse = await fetch(
      `${BACKEND_URL}/api/user/enquiry/add-enquiry`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!saveResponse.ok) {
      console.log(saveResponse);
      // throw new Error("Failed to save enquiry to backend");
    }

    const saveResult = await saveResponse.json();

    return NextResponse.json({
      success: true,
      message: "Email sent + Data saved",
      db: saveResult,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email or save data" },
      { status: 500 }
    );
  }
}
