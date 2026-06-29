import { ProblemRow } from "./problem-row";
import type { Problem } from "@/types";

interface ProblemTableProps {
  problems: Problem[];
  bookmarkedIds: Set<string>;
  showTopic?: boolean;
}

export function ProblemTable({
  problems,
  bookmarkedIds,
  showTopic = true,
}: ProblemTableProps) {
  if (problems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-12 text-center">
        No problems match the selected filters.
      </p>
    );
  }

  return (
    <div className="space-y-0.5">
      {problems.map((problem, i) => (
        <ProblemRow
          key={problem.id}
          index={i + 1}
          problem={problem}
          bookmarked={bookmarkedIds.has(problem.id)}
          showTopic={showTopic}
        />
      ))}
    </div>
  );
}
