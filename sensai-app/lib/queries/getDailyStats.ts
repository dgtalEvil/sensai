import type { DailyStats } from "@/types";
import { MOCK_DAILY_STATS } from "@/lib/mock/stats";

export async function getDailyStats(): Promise<DailyStats> {
  return MOCK_DAILY_STATS;
}
