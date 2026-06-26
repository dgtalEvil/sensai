import { MOCK_BOOKMARKS } from "@/lib/mock/bookmarks";

interface ToggleBookmarkParams {
  userId: string;
  problemId: string;
}

export async function toggleBookmark({
  problemId,
}: ToggleBookmarkParams): Promise<{ bookmarked: boolean }> {
  // Phase 3 stub — checks mock bookmarks list; Phase 4 will INSERT or DELETE in bookmarks table
  const isBookmarked = MOCK_BOOKMARKS.some((b) => b.problem_id === problemId);
  return { bookmarked: !isBookmarked };
}
