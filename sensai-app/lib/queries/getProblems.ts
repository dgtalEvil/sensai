import { createServiceClient } from "@/lib/supabase/client";
import type { PaginatedResponse, Problem } from "@/types";

interface GetProblemsParams {
  topic?: string;
  difficulty?: string;
  page?: number;
  pageSize?: number;
}

export async function getProblems({
  topic,
  difficulty,
  page = 1,
  pageSize = 20,
}: GetProblemsParams = {}): Promise<PaginatedResponse<Problem>> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  let query = supabase.from("problems").select("*", { count: "exact" });
  if (topic) query = query.eq("topic", topic);
  if (difficulty) query = query.eq("difficulty", difficulty);

  const start = (page - 1) * pageSize;
  const { data, count, error } = await query.range(start, start + pageSize - 1);
  if (error) throw new Error(error.message);

  return { data: (data ?? []) as Problem[], total: count ?? 0, page, pageSize };
}
