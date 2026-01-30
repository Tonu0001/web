import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL =
  "https://tonukova.app.n8n.cloud/webhook/make-reservation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, partySize, dateTime } = body;

    // Validate required fields
    if (!name || !partySize || !dateTime) {
      return NextResponse.json(
        { error: "Missing required fields: name, partySize, and dateTime" },
        { status: 400 }
      );
    }

    // Call the n8n webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        partySize: Number(partySize),
        dateTime,
      }),
    });

    if (!response.ok) {
      console.error("n8n webhook error:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Failed to create reservation" },
        { status: 500 }
      );
    }

    const data = await response.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: "Reservation created successfully",
      data,
    });
  } catch (error) {
    console.error("Reservation API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
