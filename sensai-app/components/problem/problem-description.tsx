import { Card, CardContent } from "@/components/ui/card";
import type { Problem } from "@/types";

interface ProblemDescriptionProps {
  problem: Problem;
}

export function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <div className="space-y-4">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {problem.description}
        </p>
      </div>

      {problem.examples.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Examples</h3>
          {problem.examples.map((ex, i) => (
            <Card key={i} className="bg-muted/50">
              <CardContent className="pt-4 space-y-1 text-sm font-mono">
                <p>
                  <span className="text-muted-foreground">Input:</span>{" "}
                  {ex.input}
                </p>
                <p>
                  <span className="text-muted-foreground">Output:</span>{" "}
                  {ex.output}
                </p>
                {ex.explanation && (
                  <p className="font-sans text-muted-foreground text-xs">
                    Explanation: {ex.explanation}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {problem.constraints.length > 0 && (
        <div>
          <h3 className="font-semibold text-sm mb-2">Constraints</h3>
          <ul className="space-y-1">
            {problem.constraints.map((c, i) => (
              <li key={i} className="text-sm font-mono text-muted-foreground">
                • {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
