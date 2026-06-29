"use client";

import { useState, useTransition } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolveButtonProps {
  problemId: string;
  initialSolved?: boolean;
}

export function SolveButton({
  problemId,
  initialSolved = false,
}: SolveButtonProps) {
  const [solved, setSolved] = useState(initialSolved);
  const [isPending, startTransition] = useTransition();

  function markSolved() {
    startTransition(async () => {
      try {
        await fetch(`/api/problems/${problemId}/solve`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "solved" }),
        });
        setSolved(true);
      } catch {
        // silently fail — user can retry
      }
    });
  }

  if (solved) {
    return (
      <Button
        variant="outline"
        disabled
        className="gap-2 text-green-600 border-green-500"
      >
        <CheckCircle className="h-4 w-4" />
        Solved
      </Button>
    );
  }

  return (
    <Button onClick={markSolved} disabled={isPending} className="gap-2">
      <CheckCircle className="h-4 w-4" />
      {isPending ? "Marking..." : "Mark as Solved"}
    </Button>
  );
}
