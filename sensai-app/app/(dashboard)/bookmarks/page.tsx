import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getInternalUserId } from "@/lib/auth";
import { getBookmarks } from "@/lib/queries/getBookmarks";
import { BookmarkList } from "@/components/bookmarks/bookmark-list";

export default async function BookmarksPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const internalId = await getInternalUserId(userId);

  const bookmarks = await getBookmarks(internalId).catch(() => []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bookmarks</h1>
      <BookmarkList initialBookmarks={bookmarks} />
    </div>
  );
}
