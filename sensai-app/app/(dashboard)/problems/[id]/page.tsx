import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getInternalUserId } from "@/lib/auth";
import { getProblemById } from "@/lib/queries/getProblemById";
import { getPremiumStatus } from "@/lib/queries/getPremiumStatus";
import { getBookmarks } from "@/lib/queries/getBookmarks";
import { ProblemHeader } from "@/components/problem/problem-header";
import { ProblemDescription } from "@/components/problem/problem-description";
import { StarterCodeTabs } from "@/components/problem/starter-code-tabs";
import { SolveButton } from "@/components/problem/solve-button";
import { PremiumGate } from "@/components/problem/premium-gate";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProblemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const internalId = await getInternalUserId(userId);

  const [problem, premiumStatus, bookmarks] = await Promise.all([
    getProblemById(id),
    getPremiumStatus(internalId).catch(() => null),
    getBookmarks(internalId).catch(() => []),
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
