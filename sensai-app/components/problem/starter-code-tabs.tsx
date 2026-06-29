"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { StarterCode } from "@/types";

interface StarterCodeTabsProps {
  starterCode: StarterCode[];
}

export function StarterCodeTabs({ starterCode }: StarterCodeTabsProps) {
  if (starterCode.length === 0) return null;

  return (
    <Tabs defaultValue={starterCode[0].language}>
      <TabsList>
        {starterCode.map((sc) => (
          <TabsTrigger key={sc.language} value={sc.language}>
            {sc.language}
          </TabsTrigger>
        ))}
      </TabsList>
      {starterCode.map((sc) => (
        <TabsContent key={sc.language} value={sc.language}>
          <pre className="bg-muted rounded-md p-4 overflow-x-auto text-sm font-mono leading-relaxed">
            <code>{sc.code}</code>
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  );
}
