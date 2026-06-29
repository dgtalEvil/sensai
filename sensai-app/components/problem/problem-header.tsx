import { DifficultyBadge } from "@/components/difficulty-badge";
import { BookmarkButton } from "@/components/bookmark-button";
import { Badge } from "@/components/ui/badge";
import type { Problem } from "@/types";

interface ProblemHeaderProps {
  problem: Problem;
  bookmarked: boolean;
}

export function ProblemHeader({ problem, bookmarked }: ProblemHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <DifficultyBadge difficulty={problem.difficulty} />
          <Badge variant="secondary">{problem.topic}</Badge>
          {problem.is_premium && (
            <Badge
              variant="outline"
              className="border-yellow-500 text-yellow-600 dark:text-yellow-400"
            >
              ★ Premium
            </Badge>
          )}
        </div>
      </div>
      <BookmarkButton problemId={problem.id} initialBookmarked={bookmarked} />
    </div>
  );
}
