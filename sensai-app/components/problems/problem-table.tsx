import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProblemRow } from "./problem-row";
import type { Problem } from "@/types";

interface ProblemTableProps {
  problems: Problem[];
  bookmarkedIds: Set<string>;
}

export function ProblemTable({ problems, bookmarkedIds }: ProblemTableProps) {
  if (problems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-8 text-center">
        No problems match the selected filters.
      </p>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="w-28">Difficulty</TableHead>
          <TableHead className="w-40 hidden md:table-cell">Topic</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems.map((problem, i) => (
          <ProblemRow
            key={problem.id}
            index={i + 1}
            problem={problem}
            bookmarked={bookmarkedIds.has(problem.id)}
          />
        ))}
      </TableBody>
    </Table>
  );
}
