import { createServiceClient } from "@/lib/supabase/client";
import type { HeatmapEntry } from "@/types";

export async function getHeatmap(userId: string): Promise<HeatmapEntry[]> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const since = new Date();
  since.setDate(since.getDate() - 364);

  const { data, error } = await supabase
    .from("user_problem_attempts")
    .select("solved_at")
    .eq("user_id", userId)
    .eq("status", "solved")
    .gte("solved_at", since.toISOString())
    .returns<{ solved_at: string | null }[]>();

  if (error) throw new Error(error.message);

  const counts: Record<string, number> = {};
  for (const row of data ?? []) {
    if (row.solved_at) {
      const day = row.solved_at.slice(0, 10);
      counts[day] = (counts[day] ?? 0) + 1;
    }
  }

  const entries: HeatmapEntry[] = [];
  const cursor = new Date(since);
  const today = new Date();
  while (cursor <= today) {
    const d = cursor.toISOString().slice(0, 10);
    entries.push({ date: d, count: counts[d] ?? 0 });
    cursor.setDate(cursor.getDate() + 1);
  }

  return entries;
}
