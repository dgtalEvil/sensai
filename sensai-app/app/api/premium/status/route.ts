import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getInternalUserId } from "@/lib/auth";
import { getPremiumStatus } from "@/lib/queries/getPremiumStatus";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const internalUserId = await getInternalUserId(userId);
    const data = await getPremiumStatus(internalUserId);
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
