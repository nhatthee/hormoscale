import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || "").trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, message: "Invalid email" },
      { status: 400 }
    );
  }

  console.log("New Hormoscale lead:", email);

  return NextResponse.json({
    success: true,
  });
}