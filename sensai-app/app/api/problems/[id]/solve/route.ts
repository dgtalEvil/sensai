import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getInternalUserId } from "@/lib/auth";
import { solveProblem } from "@/lib/commands/solveProblem";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    if (!body.status) {
      return NextResponse.json(
        { error: "status is required" },
        { status: 400 },
      );
    }

    const internalUserId = await getInternalUserId(userId);
    const result = await solveProblem({
      userId: internalUserId,
      problemId: params.id,
      status: body.status,
      language: body.language,
      code: body.code,
    });
    return NextResponse.json({ data: result });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
