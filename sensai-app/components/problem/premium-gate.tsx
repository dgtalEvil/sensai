import { Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PremiumGate() {
  return (
    <Card className="border-yellow-500/50 bg-yellow-50/10 dark:bg-yellow-900/10">
      <CardContent className="pt-8 pb-8 text-center space-y-3">
        <Lock className="h-10 w-10 mx-auto text-yellow-600 dark:text-yellow-400" />
        <h3 className="font-semibold text-lg">Premium Problem</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          This problem is only available to premium members. Upgrade to unlock
          all 75 problems and track your progress.
        </p>
      </CardContent>
    </Card>
  );
}
