import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DailyStats } from "@/types";

interface DailyStatsCardProps {
  stats: DailyStats;
}

export function DailyStatsCard({ stats }: DailyStatsCardProps) {
  const items = [
    { label: "Solved Today", value: stats.solved_today },
    { label: "Day Streak", value: `${stats.streak_days} 🔥` },
    { label: "Total Solved", value: `${stats.total_solved}/${stats.total_problems}` },
    { label: "Problems", value: stats.total_problems },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(({ label, value }) => (
        <Card key={label}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
