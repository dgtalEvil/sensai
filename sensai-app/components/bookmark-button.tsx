"use client";

import { useState, useTransition } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookmarkButtonProps {
  problemId: string;
  initialBookmarked?: boolean;
  className?: string;
}

export function BookmarkButton({
  problemId,
  initialBookmarked = false,
  className,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [isPending, startTransition] = useTransition();

  function toggle() {
    startTransition(async () => {
      const prev = bookmarked;
      setBookmarked(!prev);
      try {
        const res = await fetch("/api/bookmarks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ problem_id: problemId }),
        });
        if (!res.ok) setBookmarked(prev);
      } catch {
        setBookmarked(prev);
      }
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-8 w-8", className)}
      onClick={toggle}
      disabled={isPending}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <Bookmark
        className={cn(
          "h-4 w-4",
          bookmarked && "fill-current text-primary",
        )}
      />
    </Button>
  );
}
