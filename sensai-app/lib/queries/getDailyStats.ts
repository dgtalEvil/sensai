import { createServiceClient } from "@/lib/supabase/client";
import type { DailyStats } from "@/types";

export async function getDailyStats(userId: string): Promise<DailyStats> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const today = new Date().toISOString().slice(0, 10);

  const { data: attempts, error } = await supabase
    .from("user_problem_attempts")
    .select("status, solved_at")
    .eq("user_id", userId)
    .returns<{ status: string; solved_at: string | null }[]>();

  if (error) throw new Error(error.message);

  const rows = attempts ?? [];
  const solved_today = rows.filter(
    (r) => r.status === "solved" && r.solved_at?.slice(0, 10) === today,
  ).length;
  const total_solved = rows.filter((r) => r.status === "solved").length;

  const { count: total_problems } = await supabase
    .from("problems")
    .select("*", { count: "exact", head: true });

  const solvedDates = Array.from(
    new Set(
      rows
        .filter((r) => r.status === "solved" && r.solved_at)
        .map((r) => r.solved_at!.slice(0, 10)),
    ),
  ).sort((a, b) => b.localeCompare(a));

  let streak_days = 0;
  const cursor = new Date(today);
  for (const d of solvedDates) {
    const cursorStr = cursor.toISOString().slice(0, 10);
    if (d === cursorStr) {
      streak_days++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    solved_today,
    streak_days,
    total_solved,
    total_problems: total_problems ?? 0,
  };
}
