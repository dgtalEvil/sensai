import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium",
        difficulty === "Easy" && "border-green-500 text-green-600 dark:text-green-400",
        difficulty === "Medium" && "border-yellow-500 text-yellow-600 dark:text-yellow-400",
        difficulty === "Hard" && "border-red-500 text-red-600 dark:text-red-400",
        className,
      )}
    >
      {difficulty}
    </Badge>
  );
}
