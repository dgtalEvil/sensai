import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getInternalUserId } from "@/lib/auth";
import { getDailyStats } from "@/lib/queries/getDailyStats";
import { getProgressStats } from "@/lib/queries/getProgressStats";
import { getProblems } from "@/lib/queries/getProblems";
import { getBookmarks } from "@/lib/queries/getBookmarks";
import { DashboardClient } from "@/components/dashboard/dashboard-client";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const internalId = await getInternalUserId(userId);

  const [daily, progress, { data: allProblems }, bookmarks] = await Promise.all(
    [
      getDailyStats(internalId),
      getProgressStats(internalId),
      getProblems({ pageSize: 75 }),
      getBookmarks(internalId).catch(() => []),
    ],
  );

  const topics = Array.from(new Set(allProblems.map((p) => p.topic))).sort();
  const bookmarkedIds = new Set(bookmarks.map((b) => b.problem_id));

  return (
    <Suspense>
      <DashboardClient
        daily={daily}
        progress={progress}
        problems={allProblems}
        topics={topics}
        bookmarkedIds={bookmarkedIds}
      />
    </Suspense>
  );
}
