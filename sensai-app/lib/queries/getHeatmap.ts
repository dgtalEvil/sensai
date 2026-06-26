import type { HeatmapEntry } from "@/types";
import { MOCK_HEATMAP } from "@/lib/mock/heatmap";

export async function getHeatmap(): Promise<HeatmapEntry[]> {
  return MOCK_HEATMAP;
}
