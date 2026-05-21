import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  console.log("🎯 API Route Hit: /api/geminichat");

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ GEMINI_API_KEY environment variable is not defined!");
      return NextResponse.json(
        { reply: "Our chatbot service is currently configured without an API key. Please check your environment configuration." },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.log("⚠️ No chat messages provided in request");
      return NextResponse.json(
        { reply: "Conversation history is required." },
        { status: 400 }
      );
    }

    // 1. Initialize the Google Gen AI client with the secure API key
    const ai = new GoogleGenAI({ apiKey });

    // 2. Map the message history into Gemini content format:
    // User sender -> "user" role, Bot sender -> "model" role.
    const contents = messages.map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    // 3. Clean the history: Gemini expects the conversation to start with a "user" role message.
    while (contents.length > 0 && contents[0].role !== "user") {
      contents.shift();
    }

    if (contents.length === 0) {
      return NextResponse.json({
        reply: "Hello! I am your Camlenio Assistant. How can I help you today?",
      });
    }

    // 4. Set rich, detailed system instructions about Camlenio Software
    const systemInstruction = `
You are the official conversational AI assistant for **Camlenio Software** (visit: https://camlenio.com). 
Your role is to help visitors understand Camlenio's services, portfolio, culture, and achievements.

### Communication Guidelines:
- **Tone & Style:** Be professional, friendly, helpful, warm, and concise. Keep replies under 3-4 sentences unless detailed explanation is specifically asked.
- **Language Adaptability:** Always respond in the language in which the user chats with you (e.g. Hindi, English, Hinglish, etc.). Maintain high clarity and a natural conversational flow.
- **Goal-oriented:** If the user wants to start a project, hire us, apply for a job, or leave their details, politely guide them to click the **"Leave Contact Info"** button in the chat box so our team can follow up directly.

### About Camlenio Software:
- **Overview:** Leading Custom Software and Mobile App Development Company in India. Estd since 2022. We design and build secure, fast, and scalable digital systems.
- **Core Services:**
  1. **Mobile App Development:** Hybrid/Cross-platform (Flutter, React Native) and Native (Android/iOS) apps designed for high-performance and scalability.
  2. **Web Development:** Modern, fast, and secure websites and custom web applications (using Node.js, Next.js, Express.js, Laravel, React, and WordPress).
  3. **Ecommerce Development:** High-converting and secure online shops utilizing Shopify, WooCommerce, Magento, and Wix.
  4. **UI/UX Design:** Intuitive, research-backed, and beautiful UI/UX designs built using Figma.
  5. **Digital Marketing:** High-impact SEO, Social Media Marketing (SMM), Social Media Optimization (SMO), and PPC (Pay-Per-Click) campaigns.
- **Domain Specialization:** We have deep expertise in fintech and B2B digital financial platforms (wallets, encrypted payment gateways, automated transactions, recharge portals) and customized AI automation solutions.
- **Company Achievements:**
  - Active since 2022.
  - 115+ Clients across the globe.
  - 150+ Successfully completed projects.
  - 20+ Business Partners.
- **Pricing:** Customized and flexible based on project scope, timelines, and technical requirements. Invite them to discuss or schedule a call.
- **Hiring & Careers:** We are always looking for passionate talent (developers, designers, marketing experts) to join our team. Instruct candidates that they can leave their contact details here or visit our Careers page.
- **Contact Details:**
  - Email: contact@camlenio.com
  - Turnaround: We contact all prospects within 24 hours.

If the user asks questions unrelated to Camlenio, software development, web development, digital marketing, or business inquiries, politely redirect them: "I am the Camlenio Assistant, specialized in software development and our services. I'd be happy to tell you more about how we build websites, mobile apps, or digital products!"
`;

    // 5. Generate content using gemini-2.5-flash with proper configuration
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 400,
      },
    });

    if (!response || !response.text) {
      console.error("❌ Empty or invalid response from Gemini API");
      return NextResponse.json({
        reply: "I'm having trouble retrieving a response right now. Please try again or leave your contact details so we can get in touch!",
      });
    }

    console.log("✅ Gemini Response:", response.text);
    return NextResponse.json({ reply: response.text });

  } catch (err: any) {
    console.error("❌ Server Error in /api/geminichat:", err);
    return NextResponse.json(
      {
        reply: "I apologize, but I encountered an error connecting to our AI service. Please try again in a moment, or reach out to us at contact@camlenio.com.",
      },
      { status: 500 }
    );
  }
}
