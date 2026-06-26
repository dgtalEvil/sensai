import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getHeatmap } from "@/lib/queries/getHeatmap";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const data = await getHeatmap();
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
