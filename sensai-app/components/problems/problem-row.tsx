import Link from "next/link";
import { TableCell, TableRow } from "@/components/ui/table";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { BookmarkButton } from "@/components/bookmark-button";
import type { Problem } from "@/types";

interface ProblemRowProps {
  index: number;
  problem: Problem;
  bookmarked: boolean;
}

export function ProblemRow({ index, problem, bookmarked }: ProblemRowProps) {
  return (
    <TableRow>
      <TableCell className="text-muted-foreground text-sm">{index}</TableCell>
      <TableCell>
        <Link
          href={`/problems/${problem.id}`}
          className="font-medium hover:underline"
        >
          {problem.title}
          {problem.is_premium && (
            <span className="ml-2 text-xs text-yellow-600 dark:text-yellow-400">★ Premium</span>
          )}
        </Link>
      </TableCell>
      <TableCell>
        <DifficultyBadge difficulty={problem.difficulty} />
      </TableCell>
      <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
        {problem.topic}
      </TableCell>
      <TableCell>
        <BookmarkButton problemId={problem.id} initialBookmarked={bookmarked} />
      </TableCell>
    </TableRow>
  );
}
