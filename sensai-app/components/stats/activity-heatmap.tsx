import type { HeatmapEntry } from "@/types";

interface ActivityHeatmapProps {
  data: HeatmapEntry[];
}

function getIntensity(count: number): string {
  if (count === 0) return "bg-muted";
  if (count <= 2) return "bg-primary/30";
  if (count <= 4) return "bg-primary/60";
  return "bg-primary";
}

export function ActivityHeatmap({ data }: ActivityHeatmapProps) {
  const weeks: HeatmapEntry[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Activity (last 365 days)</h3>
      <div className="flex gap-1 overflow-x-auto pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((entry) => (
              <div
                key={entry.date}
                className={`w-3 h-3 rounded-sm ${getIntensity(entry.count)}`}
                title={`${entry.date}: ${entry.count} solve${entry.count !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
