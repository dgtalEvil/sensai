import { createServiceClient } from "@/lib/supabase/client";
import type { ProgressStats } from "@/types";

export async function getProgressStats(userId: string): Promise<ProgressStats> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { data: allProblems, error: pErr } = await supabase
    .from("problems")
    .select("id, difficulty, topic")
    .returns<{ id: string; difficulty: string; topic: string }[]>();
  if (pErr) throw new Error(pErr.message);

  const { data: attempts, error: aErr } = await supabase
    .from("user_problem_attempts")
    .select("problem_id, status")
    .eq("user_id", userId)
    .eq("status", "solved")
    .returns<{ problem_id: string; status: string }[]>();
  if (aErr) throw new Error(aErr.message);

  const solvedIds = new Set((attempts ?? []).map((a) => a.problem_id));
  const problems = allProblems ?? [];

  const easy = problems.filter((p) => p.difficulty === "Easy");
  const medium = problems.filter((p) => p.difficulty === "Medium");
  const hard = problems.filter((p) => p.difficulty === "Hard");

  const topics: Record<string, number> = {};
  for (const p of problems) {
    if (solvedIds.has(p.id)) {
      topics[p.topic] = (topics[p.topic] ?? 0) + 1;
    }
  }

  return {
    easy_solved: easy.filter((p) => solvedIds.has(p.id)).length,
    easy_total: easy.length,
    medium_solved: medium.filter((p) => solvedIds.has(p.id)).length,
    medium_total: medium.length,
    hard_solved: hard.filter((p) => solvedIds.has(p.id)).length,
    hard_total: hard.length,
    topics,
  };
}
