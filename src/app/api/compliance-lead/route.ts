import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Log for easy debugging / future CRM integration
    console.log("=== COMPLIANCE LEAD ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("=======================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
