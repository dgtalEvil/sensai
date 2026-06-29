"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import type { DailyStats, ProgressStats, Problem } from "@/types";

interface DashboardClientProps {
  daily: DailyStats;
  progress: ProgressStats;
  problems: Problem[];
  topics: string[];
  bookmarkedIds: Set<string>;
}

export function DashboardClient({
  daily,
  progress,
  problems,
  topics,
  bookmarkedIds: initialBookmarkedIds,
}: DashboardClientProps) {
  const [activeTopic, setActiveTopic] = useState("all");
  const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [bookmarkedIds, setBookmarkedIds] = useState(initialBookmarkedIds);
  const [pendingBookmarks, setPendingBookmarks] = useState<Set<string>>(
    new Set(),
  );

  const totalSolved = daily.total_solved;
  const totalProblems = daily.total_problems;
  const pct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const filtered = useMemo(() => {
    let list = problems;
    if (activeTopic !== "all") list = list.filter((p) => p.topic === activeTopic);
    if (activeDifficulty) list = list.filter((p) => p.difficulty === activeDifficulty);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    return list;
  }, [problems, activeTopic, activeDifficulty, search]);

  async function toggleBookmark(problemId: string, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (pendingBookmarks.has(problemId)) return;
    const wasBookmarked = bookmarkedIds.has(problemId);
    setPendingBookmarks((prev) => { const s = new Set(prev); s.add(problemId); return s; });
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (wasBookmarked) next.delete(problemId);
      else next.add(problemId);
      return next;
    });
    try {
      await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem_id: problemId }),
      });
    } catch {
      setBookmarkedIds((prev) => {
        const next = new Set(prev);
        if (wasBookmarked) next.add(problemId);
        else next.delete(problemId);
        return next;
      });
    } finally {
      setPendingBookmarks((prev) => {
        const next = new Set(prev);
        next.delete(problemId);
        return next;
      });
    }
  }

  return (
    <div>
      {/* Page header */}
      <div className="py-8 border-b border-border mb-0">
        <div className="flex items-start justify-between gap-6 flex-wrap mb-5">
          <div>
            <div className="text-2xl font-black tracking-tight text-foreground">
              Hey, <span className="text-primary">there</span> 👋
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {today} · Keep that streak going!
            </div>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-black text-emerald-400">
                🔥 {daily.streak_days}
              </div>
              <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">
                Day Streak
              </div>
            </div>
            <div className="w-px h-9 bg-border" />
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-black">{totalSolved}</div>
              <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">
                Solved
              </div>
            </div>
            <div className="w-px h-9 bg-border" />
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-black text-emerald-400">
                {progress.easy_solved}
              </div>
              <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">
                Easy
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-black text-amber-400">
                {progress.medium_solved}
              </div>
              <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">
                Medium
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-black text-rose-400">
                {progress.hard_solved}
              </div>
              <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">
                Hard
              </div>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 max-w-[280px] h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[13px] text-muted-foreground font-semibold whitespace-nowrap">
            {totalSolved} / {totalProblems} Blind 75 · {pct}%
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 py-5 border-b border-border flex-wrap">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search problems..."
          className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary min-w-[200px] max-w-[260px]"
        />
        <div className="flex gap-1.5 flex-wrap">
          {(["Easy", "Medium", "Hard"] as const).map((d) => (
            <button
              key={d}
              onClick={() =>
                setActiveDifficulty(activeDifficulty === d ? null : d)
              }
              className={[
                "px-3.5 py-1 rounded-full border text-[13px] font-semibold transition-all",
                activeDifficulty === d
                  ? "bg-primary border-primary text-white shadow-[0_2px_10px_rgba(124,92,255,0.4)]"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              ].join(" ")}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Topic tabs */}
      <div className="flex gap-0 overflow-x-auto scrollbar-none border-b border-border mb-6 [&::-webkit-scrollbar]:hidden">
        {["all", ...topics].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTopic(t)}
            className={[
              "px-4 py-3 text-[13px] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors",
              activeTopic === t
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {t === "all" ? "All" : t}
          </button>
        ))}
      </div>

      {/* Problem list */}
      <div className="flex flex-col gap-1.5 pb-10">
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground py-12 text-center">
            No problems match the selected filters.
          </p>
        )}
        {filtered.map((problem, i) => (
          <Link
            key={problem.id}
            href={`/problems/${problem.id}`}
            className={[
              "flex items-center gap-3.5 px-4 py-3.5 border border-border rounded-xl bg-card/60 backdrop-blur-sm transition-all group relative overflow-hidden",
              "hover:border-primary hover:shadow-[0_4px_24px_rgba(124,92,255,0.15)] hover:translate-x-0.5",
            ].join(" ")}
          >
            {/* left accent bar on hover */}
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 rounded-r transition-opacity" />

            <span className="text-xs text-muted-foreground w-7 text-center font-mono shrink-0">
              {i + 1}
            </span>

            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {problem.title}
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <DiffBadge difficulty={problem.difficulty} />
                {activeTopic === "all" && (
                  <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                    {problem.topic}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {problem.is_premium && (
                <span className="text-purple-400 text-sm">🔒</span>
              )}
              <button
                onClick={(e) => toggleBookmark(problem.id, e)}
                disabled={pendingBookmarks.has(problem.id)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Bookmark"
              >
                <Bookmark
                  className={[
                    "h-4 w-4",
                    bookmarkedIds.has(problem.id)
                      ? "fill-current text-primary"
                      : "",
                  ].join(" ")}
                />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DiffBadge({ difficulty }: { difficulty: string }) {
  if (difficulty === "Easy")
    return (
      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-semibold">
        Easy
      </span>
    );
  if (difficulty === "Medium")
    return (
      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20 font-semibold">
        Medium
      </span>
    );
  return (
    <span className="text-xs px-2 py-0.5 rounded bg-rose-500/15 text-rose-400 border border-rose-500/20 font-semibold">
      Hard
    </span>
  );
}
