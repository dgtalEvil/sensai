import type { Problem } from "@/types";
import { MOCK_PROBLEMS } from "@/lib/mock/problems";

export async function getProblemById(id: string): Promise<Problem | null> {
  return MOCK_PROBLEMS.find((p) => p.id === id) ?? null;
}
