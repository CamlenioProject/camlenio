import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const Gmail = process.env.Gmail;

interface EnquiryBody {
  type: "contact" | "popup" | "chatbot" | "demo" | "tracking";
  name: string;
  email: string;
  phone: string;
  project?: string;
  message?: string;
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

export async function POST(req: Request) {
  try {
    const body: EnquiryBody = await req.json();
    body.source = body.source || body.type;

    const {
      type,
      name,
      email,
      phone,
      project,
      message,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
    } = body;

    const trackingDataHtml = `
      <hr />
      <h3>Tracking Data:</h3>
      <p><b>UTM Source:</b> ${utm_source || "N/A"}</p>
      <p><b>UTM Medium:</b> ${utm_medium || "N/A"}</p>
      <p><b>UTM Campaign:</b> ${utm_campaign || "N/A"}</p>
      <p><b>UTM Term:</b> ${utm_term || "N/A"}</p>
      <p><b>UTM Content:</b> ${utm_content || "N/A"}</p>
      <p><b>GCLID:</b> ${gclid || "N/A"}</p>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const handleDatabaseSave = async (data: EnquiryBody) => {
      const BACKEND_URL = process.env.BACKEND_URL;
      const saveResponse = await fetch(
        `${BACKEND_URL}/api/user/enquiry/add-enquiry`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!saveResponse.ok) {
        console.log(saveResponse);
      }

      const saveResult = await saveResponse.json();
      return NextResponse.json({
        success: true,
        message: data.type === "tracking" ? "Tracking saved" : "Email sent + Data saved",
        db: saveResult,
      });
    };

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
            ${trackingDataHtml}
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
            ${trackingDataHtml}
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
            ${trackingDataHtml}
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
            ${trackingDataHtml}
          `,
        };
        break;

      case "tracking":
        return await handleDatabaseSave(body);

      default:
        return NextResponse.json(
          { success: false, message: "Invalid enquiry type" },
          { status: 400 }
        );
    }

    await transporter.sendMail(mailOptions);
    return await handleDatabaseSave(body);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email or save data" },
      { status: 500 }
    );
  }
}

