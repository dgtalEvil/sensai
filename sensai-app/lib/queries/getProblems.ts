import type { PaginatedResponse, Problem } from "@/types";
import { MOCK_PROBLEMS } from "@/lib/mock/problems";

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
  let filtered = MOCK_PROBLEMS;

  if (topic) {
    filtered = filtered.filter((p) => p.topic === topic);
  }
  if (difficulty) {
    filtered = filtered.filter((p) => p.difficulty === difficulty);
  }

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const data = filtered.slice(start, start + pageSize);

  return { data, total, page, pageSize };
}
