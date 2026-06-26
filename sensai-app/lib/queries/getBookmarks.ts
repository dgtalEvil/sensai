import type { Bookmark } from "@/types";
import { MOCK_BOOKMARKS } from "@/lib/mock/bookmarks";

export async function getBookmarks(): Promise<Bookmark[]> {
  return MOCK_BOOKMARKS;
}
