import { serverFetch } from "@/lib/fetch";
import { DailyStatsCard } from "@/components/stats/daily-stats-card";
import { ProgressBars } from "@/components/stats/progress-bars";
import { ActivityHeatmap } from "@/components/stats/activity-heatmap";
import { RecentActivity } from "@/components/stats/recent-activity";
import type { DailyStats, ProgressStats, HeatmapEntry, ActivityEntry } from "@/types";

export default async function DashboardPage() {
  const [daily, progress, heatmap, activity] = await Promise.all([
    serverFetch<DailyStats>("/api/stats/daily"),
    serverFetch<ProgressStats>("/api/stats/progress"),
    serverFetch<HeatmapEntry[]>("/api/stats/heatmap"),
    serverFetch<ActivityEntry[]>("/api/stats/activity"),
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <DailyStatsCard stats={daily} />
      <div className="grid md:grid-cols-2 gap-6">
        <ProgressBars stats={progress} />
        <RecentActivity activity={activity} />
      </div>
      <ActivityHeatmap data={heatmap} />
    </div>
  );
}
