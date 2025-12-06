import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

interface GeminiCandidate {
  content: {
    parts: Array<{
      text: string;
    }>;
  };
}

interface GeminiResponse {
  candidates?: GeminiCandidate[];
  error?: {
    message: string;
    code: number;
  };
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "provide me the list of 10 colors",
  });
  console.log(response.text);
}

export async function POST(req: NextRequest) {
  console.log("🎯 API Route Hit: /api/gemini-chat", "pppppppp");
  main();
  try {
    const { message } = await req.json();

    if (!message) {
      console.log("⚠️ No message provided");
      return NextResponse.json(
        { reply: "Message is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful and professional customer service assistant for a web development company. Your role is to:
  - Answer questions about web development, mobile app development, game development, UI/UX design, e-commerce, and related services
  - Be friendly, concise, and professional
  - If someone wants to start a project or make an inquiry, encourage them to type "start project" or "contact us"
  - Keep responses brief (2-3 sentences) unless more detail is needed

  User question: ${message}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 200,
          topP: 0.8,
          topK: 40,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    });
    if (!response.text) {
      return NextResponse.json({
        reply:
          "Sorry, I am on maintenance today, so I will not be able to help you.",
      });
    }
    console.log(response.text);
    return NextResponse.json({ reply: response.text });
  } catch (err) {
    console.error("❌ Server Error:", err);
    return NextResponse.json(
      {
        reply:
          "❌ Error connecting to AI service. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
