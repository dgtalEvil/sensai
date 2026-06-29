"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

interface TopicTabsProps {
  topics: string[];
}

export function TopicTabs({ topics }: TopicTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const activeTopic = params.get("topic") ?? "all";
  const activeDifficulty = params.get("difficulty") ?? "all";

  function setTopic(value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === "all") next.delete("topic");
    else next.set("topic", value);
    router.push(`${pathname}?${next.toString()}`);
  }

  function toggleDifficulty(value: string) {
    const next = new URLSearchParams(params.toString());
    if (activeDifficulty === value) next.delete("difficulty");
    else next.set("difficulty", value);
    router.push(`${pathname}?${next.toString()}`);
  }

  return (
    <div>
      {/* Difficulty chips */}
      <div className="flex items-center gap-2 py-4 border-b border-border flex-wrap">
        {DIFFICULTIES.map((d) => (
          <button
            key={d}
            onClick={() => toggleDifficulty(d)}
            className={[
              "px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors",
              activeDifficulty === d
                ? d === "Easy"
                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                  : d === "Medium"
                    ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                    : "bg-rose-500/20 border-rose-500/50 text-rose-400"
                : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
            ].join(" ")}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Topic tabs — horizontal scrollable, only real topics */}
      <div className="flex gap-0 overflow-x-auto scrollbar-none border-b border-border mb-6">
        <button
          onClick={() => setTopic("all")}
          className={[
            "px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors",
            activeTopic === "all"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground",
          ].join(" ")}
        >
          All
        </button>
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={[
              "px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors",
              activeTopic === t
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
