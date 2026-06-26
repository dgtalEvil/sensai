import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "clerk webhook route" });
}
