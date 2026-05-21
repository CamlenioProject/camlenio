import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_RECIPIENT = process.env.Gmail;

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

// Create transporter OUTSIDE the handler to reuse the connection pool
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}); 

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

    const handleDatabaseSave = async (data: EnquiryBody) => {
      const BACKEND_URL = process.env.BACKEND_URL;
      console.log(BACKEND_URL,"backend url")
      try {
        const saveResponse = await fetch(
          `${BACKEND_URL}/user/enquiry/add-enquiry`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );

        const contentType = saveResponse.headers.get("content-type");
        let saveResult: any = null;
        let responseText: string = "";

        if (contentType && contentType.includes("application/json")) {
          saveResult = await saveResponse.json();
          console.log("Database Save Result:", saveResult);
        } else {
          responseText = await saveResponse.text();
          console.log("Database Save Raw Response:", responseText);
        }

        // If the backend returned an error status OR explicitly returned success: false
        if (!saveResponse.ok || (saveResult && saveResult.success === false)) {
          console.error("Database Save Failed:", {
            status: saveResponse.status,
            statusText: saveResponse.statusText,
            result: saveResult,
            raw: responseText
          });
          
          return NextResponse.json({
            success: false,
            message: saveResult?.message || "Email sent, but database save failed.",
            dbResponse: saveResult,
            dbStatus: saveResponse.status,
            dbRaw: responseText.substring(0, 200), // Include first 200 chars of raw response
            BACKEND_URL: BACKEND_URL,
          }, { status: saveResponse.status === 200 ? 400 : saveResponse.status });
        }

        return NextResponse.json({
          success: true,
          message: data.type === "tracking" ? "Tracking saved" : "Email sent + Data saved",
          db: saveResult,
        });
      } catch (dbError: any) {
        console.error("Database connection failed:", dbError);
        return NextResponse.json({
          success: false,
          message: "Email sent, but could not connect to backend server.",
          error: dbError.message
        }, { status: 502 });
      }
    };

    let mailOptions: nodemailer.SendMailOptions = {};

    switch (type) {
      case "contact":
        mailOptions = {
          from: `"Camlenio Contact" <${process.env.SMTP_USER}>`,
          to: GMAIL_RECIPIENT,
          subject: "New Website Enquiry",
          html: `
            <h2>Contact Us Form Enquiry</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Project:</b> ${project || "N/A"}</p>
            <p><b>Message:</b> ${message || "N/A"}</p>
            ${trackingDataHtml}
          `,
        };
        break;

      case "popup":
        mailOptions = {
          from: `"Camlenio Pop-up" <${process.env.SMTP_USER}>`,
          to: GMAIL_RECIPIENT,
          subject: "New Pop-up Enquiry",
          html: `
            <h2>Pop-up Form Submission</h2>
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
          from: `"Camlenio ChatBot" <${process.env.SMTP_USER}>`,
          to: GMAIL_RECIPIENT,
          subject: "New ChatBot Lead",
          html: `
            <h2>ChatBot Conversation Lead</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Project:</b> ${project || "N/A"}</p>
            <p><b>Message:</b> ${message || "N/A"}</p>
            ${trackingDataHtml}
          `,
        };
        break;

      case "demo":
        mailOptions = {
          from: `"Camlenio Demo" <${process.env.SMTP_USER}>`,
          to: GMAIL_RECIPIENT,
          subject: "Demo Request",
          html: `
            <h2>Software Demo Request</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
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

  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to process request",
        error: error.message || "Unknown error" 
      },
      { status: 500 }
    );
  }
}
