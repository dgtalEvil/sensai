import { createServiceClient } from "@/lib/supabase/client";
import type { ActivityEntry } from "@/types";

export async function getActivity(userId: string): Promise<ActivityEntry[]> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  type Row = {
    problem_id: string;
    status: string;
    solved_at: string | null;
    problems: { title: string; difficulty: string } | null;
  };

  const { data, error } = await supabase
    .from("user_problem_attempts")
    .select("problem_id, status, solved_at, problems(title, difficulty)")
    .eq("user_id", userId)
    .in("status", ["solved", "attempted"])
    .order("solved_at", { ascending: false })
    .limit(50)
    .returns<Row[]>();

  if (error) throw new Error(error.message);

  return (data ?? [])
    .filter((r) => r.solved_at)
    .map((r) => ({
      problem_id: r.problem_id,
      problem_title: r.problems?.title ?? "",
      difficulty: (r.problems?.difficulty ??
        "Easy") as ActivityEntry["difficulty"],
      status: r.status as ActivityEntry["status"],
      solved_at: r.solved_at!,
    }));
}
