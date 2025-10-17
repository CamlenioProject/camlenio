import { NextResponse } from "next/server";

interface HFGeneratedText {
  generated_text: string;
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Message is required" },
        { status: 400 }
      );
    }

    console.log("📤 Sending to HF API:", message);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `Q: ${message}\nA:`,
          parameters: {
            max_new_tokens: 100,
            temperature: 0.7,
            return_full_text: false,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ HF API Error Response:", errorText);
      console.error("❌ Status:", response.status);

      if (response.status === 503) {
        return NextResponse.json(
          {
            reply:
              "⏳ Model is loading, please wait 20-30 seconds and try again.",
          },
          { status: 503 }
        );
      }

      if (response.status === 401) {
        return NextResponse.json(
          {
            reply: "❌ Invalid API key. Please check your HUGGINGFACE_API_KEY.",
          },
          { status: 401 }
        );
      }

      if (response.status === 404) {
        return NextResponse.json(
          { reply: "❌ Model not found. Please check the model name." },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { reply: `❌ API Error: ${response.status}` },
        { status: response.status }
      );
    }

    const data: HFGeneratedText[] = await response.json();
    console.log("✅ HF API Response:", data);

    const reply = data?.[0]?.generated_text || "⚠️ No reply from model.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("❌ Server Error:", err);
    return NextResponse.json(
      { reply: "❌ Error connecting to AI service. Please try again." },
      { status: 500 }
    );
  }
}
