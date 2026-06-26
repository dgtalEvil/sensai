"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { BookmarkButton } from "@/components/bookmark-button";
import type { Bookmark } from "@/types";

interface BookmarkListProps {
  initialBookmarks: Bookmark[];
}

export function BookmarkList({ initialBookmarks }: BookmarkListProps) {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  function handleRemove(problemId: string) {
    setBookmarks((prev) => prev.filter((b) => b.problem_id !== problemId));
  }

  if (bookmarks.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-12 text-center">
        No bookmarks yet — save problems from the{" "}
        <Link href="/problems" className="underline">
          problems list
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {bookmarks.map((bookmark) => (
        <Card key={bookmark.id}>
          <CardContent className="py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Link
                href={`/problems/${bookmark.problem_id}`}
                className="font-medium hover:underline truncate"
              >
                {bookmark.problem?.title ?? bookmark.problem_id}
              </Link>
              {bookmark.problem && (
                <DifficultyBadge difficulty={bookmark.problem.difficulty} />
              )}
              {bookmark.problem?.topic && (
                <span className="text-xs text-muted-foreground hidden md:inline">
                  {bookmark.problem.topic}
                </span>
              )}
            </div>
            <BookmarkButton
              problemId={bookmark.problem_id}
              initialBookmarked={true}
              className="shrink-0"
              onRemove={() => handleRemove(bookmark.problem_id)}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
