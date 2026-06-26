import type { DailyStats, ProgressStats } from "@/types";

export const MOCK_DAILY_STATS: DailyStats = {
  solved_today: 3,
  streak_days: 7,
  total_solved: 42,
  total_problems: 75,
};

export const MOCK_PROGRESS_STATS: ProgressStats = {
  easy_solved: 18,
  easy_total: 19,
  medium_solved: 20,
  medium_total: 43,
  hard_solved: 4,
  hard_total: 13,
  topics: {
    Arrays: 4,
    Strings: 3,
    "Linked Lists": 3,
    Trees: 4,
    Graphs: 2,
    "Dynamic Programming": 5,
    Sorting: 4,
    "Binary Search": 4,
    Stack: 4,
    Queue: 2,
    "Hash Map": 3,
    "Two Pointers": 3,
    "Sliding Window": 2,
    Recursion: 2,
    Backtracking: 1,
  },
};
