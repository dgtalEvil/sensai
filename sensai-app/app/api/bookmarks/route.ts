import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getInternalUserId } from "@/lib/auth";
import { getBookmarks } from "@/lib/queries/getBookmarks";
import { toggleBookmark } from "@/lib/commands/toggleBookmark";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const data = await getBookmarks();
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    if (!body.problem_id) {
      return NextResponse.json(
        { error: "problem_id is required" },
        { status: 400 }
      );
    }

    const internalUserId = await getInternalUserId(userId);
    const result = await toggleBookmark({
      userId: internalUserId,
      problemId: body.problem_id,
    });
    return NextResponse.json({ data: result });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
