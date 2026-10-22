import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    console.log(`[SYPD Newsletter API] New subscriber recorded:`, {
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Subscribed to SYPD quarterly field bulletins.",
    });
  } catch (error) {
    console.error("[SYPD Newsletter API] Error processing subscription:", error);
    return NextResponse.json(
      { error: "Subscription request could not be processed." },
      { status: 500 }
    );
  }
}
