import type { ProgressStats } from "@/types";
import { MOCK_PROGRESS_STATS } from "@/lib/mock/stats";

export async function getProgressStats(): Promise<ProgressStats> {
  return MOCK_PROGRESS_STATS;
}
