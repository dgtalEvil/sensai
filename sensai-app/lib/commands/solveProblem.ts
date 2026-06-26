import { createServiceClient } from "@/lib/supabase/client";

interface SolveProblemParams {
  userId: string;
  problemId: string;
  status: "solved" | "attempted";
  language?: string;
  code?: string;
}

export async function solveProblem(
  params: SolveProblemParams,
): Promise<{ success: true }> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { userId, problemId, status, language, code } = params;
  const row = {
    user_id: userId,
    problem_id: problemId,
    status,
    language: language ?? null,
    code: code ?? null,
    solved_at: status === "solved" ? new Date().toISOString() : null,
  };

  const { error } = await supabase
    .from("user_problem_attempts")
    .upsert([row] as unknown as never[], { onConflict: "user_id,problem_id" });

  if (error) throw new Error(error.message);
  return { success: true };
}
