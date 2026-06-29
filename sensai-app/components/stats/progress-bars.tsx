import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ProgressStats } from "@/types";

interface ProgressBarsProps {
  stats: ProgressStats;
}

export function ProgressBars({ stats }: ProgressBarsProps) {
  const levels = [
    {
      label: "Easy",
      solved: stats.easy_solved,
      total: stats.easy_total,
      color: "text-green-600 dark:text-green-400",
    },
    {
      label: "Medium",
      solved: stats.medium_solved,
      total: stats.medium_total,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      label: "Hard",
      solved: stats.hard_solved,
      total: stats.hard_total,
      color: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {levels.map(({ label, solved, total, color }) => (
          <div key={label}>
            <div className="flex justify-between mb-1">
              <span className={`text-sm font-medium ${color}`}>{label}</span>
              <span className="text-sm text-muted-foreground">
                {solved}/{total}
              </span>
            </div>
            <Progress
              value={total > 0 ? (solved / total) * 100 : 0}
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
