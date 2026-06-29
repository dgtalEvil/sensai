import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getInternalUserId } from "@/lib/auth";
import { getProblems } from "@/lib/queries/getProblems";
import { getBookmarks } from "@/lib/queries/getBookmarks";
import { TopicTabs } from "@/components/problems/topic-tabs";
import { ProblemTable } from "@/components/problems/problem-table";

interface PageProps {
  searchParams: Promise<{ difficulty?: string; topic?: string }>;
}

export default async function ProblemsPage({ searchParams }: PageProps) {
  const { difficulty, topic } = await searchParams;
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const internalId = await getInternalUserId(userId);

  const [{ data: allProblems }, { data: filtered }, bookmarks] =
    await Promise.all([
      getProblems({ pageSize: 75 }),
      getProblems({ difficulty, topic, pageSize: 75 }),
      getBookmarks(internalId).catch(() => []),
    ]);

  const topics = Array.from(
    new Set(allProblems.map((p) => p.topic)),
  ).sort();

  const bookmarkedIds = new Set(bookmarks.map((b) => b.problem_id));
  const showTopic = !topic;

  return (
    <div className="space-y-0">
      <div className="pb-4">
        <h1 className="text-2xl font-bold">Problems</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {filtered.length} problem{filtered.length !== 1 ? "s" : ""}
          {topic ? ` · ${topic}` : ""}
          {difficulty ? ` · ${difficulty}` : ""}
        </p>
      </div>
      <Suspense>
        <TopicTabs topics={topics} />
      </Suspense>
      <ProblemTable
        problems={filtered}
        bookmarkedIds={bookmarkedIds}
        showTopic={showTopic}
      />
    </div>
  );
}
