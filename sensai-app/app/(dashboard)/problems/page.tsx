import { Suspense } from "react";
import { serverFetch } from "@/lib/fetch";
import { ProblemFilters } from "@/components/problems/problem-filters";
import { ProblemTable } from "@/components/problems/problem-table";
import type { PaginatedResponse, Problem, Bookmark } from "@/types";

interface PageProps {
  searchParams: Promise<{ difficulty?: string; topic?: string }>;
}

export default async function ProblemsPage({ searchParams }: PageProps) {
  const { difficulty, topic } = await searchParams;

  const params = new URLSearchParams();
  if (difficulty) params.set("difficulty", difficulty);
  if (topic) params.set("topic", topic);
  params.set("pageSize", "75");

  const [{ data: problems }, bookmarks] = await Promise.all([
    serverFetch<PaginatedResponse<Problem>>(`/api/problems?${params.toString()}`),
    serverFetch<Bookmark[]>("/api/bookmarks").catch(() => [] as Bookmark[]),
  ]);

  const bookmarkedIds = new Set(bookmarks.map((b) => b.problem_id));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Problems</h1>
        <Suspense>
          <ProblemFilters />
        </Suspense>
      </div>
      <ProblemTable problems={problems} bookmarkedIds={bookmarkedIds} />
    </div>
  );
}
