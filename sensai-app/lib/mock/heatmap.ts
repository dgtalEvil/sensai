import type { HeatmapEntry } from "@/types";

function generateHeatmap(): HeatmapEntry[] {
  const entries: HeatmapEntry[] = [];
  const today = new Date("2026-06-26");

  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const date = d.toISOString().split("T")[0];

    // Simulate realistic activity: ~60% active days, weekend peaks, occasional streaks
    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const rand = Math.abs(Math.sin(i * 7 + 13) * 1000) % 1;
    const activeThreshold = isWeekend ? 0.45 : 0.6;

    let count = 0;
    if (rand < activeThreshold) {
      // Active day: count between 1 and 8, weighted toward lower values
      const intensity = Math.abs(Math.sin(i * 3 + 7) * 1000) % 1;
      count = Math.max(1, Math.floor(intensity * 8));
    }

    entries.push({ date, count });
  }

  return entries;
}

export const MOCK_HEATMAP: HeatmapEntry[] = generateHeatmap();
