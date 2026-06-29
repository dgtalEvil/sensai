import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import type { ActivityEntry } from "@/types";

interface RecentActivityProps {
  activity: ActivityEntry[];
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}

export function RecentActivity({ activity }: RecentActivityProps) {
  if (activity.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No activity yet. Start solving problems!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activity.slice(0, 10).map((entry) => (
          <div
            key={`${entry.problem_id}-${entry.solved_at}`}
            className="flex items-center justify-between gap-2"
          >
            <Link
              href={`/problems/${entry.problem_id}`}
              className="text-sm font-medium hover:underline truncate"
            >
              {entry.problem_title}
            </Link>
            <div className="flex items-center gap-2 shrink-0">
              <DifficultyBadge difficulty={entry.difficulty} />
              <span className="text-xs text-muted-foreground">
                {timeAgo(entry.solved_at)}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
