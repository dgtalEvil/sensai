import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
  className?: string;
}

export function DifficultyBadge({
  difficulty,
  className,
}: DifficultyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold shrink-0",
        difficulty === "Easy" &&
          "bg-emerald-500/15 text-emerald-400 dark:text-emerald-400",
        difficulty === "Medium" &&
          "bg-amber-500/15 text-amber-400 dark:text-amber-400",
        difficulty === "Hard" &&
          "bg-rose-500/15 text-rose-400 dark:text-rose-400",
        className,
      )}
    >
      {difficulty}
    </span>
  );
}
