import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { systemInstruction } from "@/config/chatbotInstruction";

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
