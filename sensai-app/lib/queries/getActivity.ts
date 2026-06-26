import type { ActivityEntry } from "@/types";
import { MOCK_ACTIVITY } from "@/lib/mock/activity";

export async function getActivity(): Promise<ActivityEntry[]> {
  return MOCK_ACTIVITY;
}
