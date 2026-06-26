import { notFound } from "next/navigation";
import { serverFetch } from "@/lib/fetch";
import { ProblemHeader } from "@/components/problem/problem-header";
import { ProblemDescription } from "@/components/problem/problem-description";
import { StarterCodeTabs } from "@/components/problem/starter-code-tabs";
import { SolveButton } from "@/components/problem/solve-button";
import { PremiumGate } from "@/components/problem/premium-gate";
import { Separator } from "@/components/ui/separator";
import type { Problem, PremiumStatus, Bookmark } from "@/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProblemDetailPage({ params }: PageProps) {
  const { id } = await params;

  const [problem, premiumStatus, bookmarks] = await Promise.all([
    serverFetch<Problem>(`/api/problems/${id}`).catch(() => null),
    serverFetch<PremiumStatus>("/api/premium/status").catch(() => null),
    serverFetch<Bookmark[]>("/api/bookmarks").catch(() => [] as Bookmark[]),
  ]);

  if (!problem) notFound();

  const isBookmarked = bookmarks.some((b) => b.problem_id === problem.id);
  const isPremiumLocked = problem.is_premium && !premiumStatus?.is_premium;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <ProblemHeader problem={problem} bookmarked={isBookmarked} />
      <Separator />

      {isPremiumLocked ? (
        <PremiumGate />
      ) : (
        <>
          <ProblemDescription problem={problem} />
          <Separator />
          <div>
            <h3 className="font-semibold text-sm mb-3">Starter Code</h3>
            <StarterCodeTabs starterCode={problem.starter_code} />
          </div>
          <div className="flex justify-end pt-2">
            <SolveButton problemId={problem.id} />
          </div>
        </>
      )}
    </div>
  );
}
