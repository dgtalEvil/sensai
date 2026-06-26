import { serverFetch } from "@/lib/fetch";
import { BookmarkList } from "@/components/bookmarks/bookmark-list";
import type { Bookmark } from "@/types";

export default async function BookmarksPage() {
  const bookmarks = await serverFetch<Bookmark[]>("/api/bookmarks").catch(
    () => [] as Bookmark[],
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bookmarks</h1>
      <BookmarkList initialBookmarks={bookmarks} />
    </div>
  );
}
