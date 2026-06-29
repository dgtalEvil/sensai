import Link from "next/link";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { BookmarkButton } from "@/components/bookmark-button";
import type { Problem } from "@/types";

interface ProblemRowProps {
  index: number;
  problem: Problem;
  bookmarked: boolean;
  showTopic?: boolean;
}

export function ProblemRow({
  index,
  problem,
  bookmarked,
  showTopic = true,
}: ProblemRowProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors group border border-transparent hover:border-border">
      <span className="text-xs text-muted-foreground w-6 shrink-0 text-right">
        {index}
      </span>
      <Link
        href={`/problems/${problem.id}`}
        className="flex-1 min-w-0 font-medium text-sm hover:text-primary transition-colors truncate"
      >
        {problem.title}
        {problem.is_premium && (
          <span className="ml-2 text-xs text-amber-500">★</span>
        )}
      </Link>
      {showTopic && (
        <span className="hidden md:block text-xs text-muted-foreground shrink-0 w-36 truncate">
          {problem.topic}
        </span>
      )}
      <DifficultyBadge difficulty={problem.difficulty} />
      <BookmarkButton problemId={problem.id} initialBookmarked={bookmarked} />
    </div>
  );
}
