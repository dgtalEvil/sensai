export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface StarterCode {
  language: string;
  code: string;
}

export interface Problem {
  id: string;
  slug: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  description: string;
  examples: ProblemExample[];
  constraints: string[];
  starter_code: StarterCode[];
  solution_explanation: string | null;
  is_premium: boolean;
  created_at: string;
}

export interface UserProblemAttempt {
  id: string;
  user_id: string;
  problem_id: string;
  status: "solved" | "attempted" | "bookmarked";
  language: string | null;
  code: string | null;
  solved_at: string | null;
  created_at: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  problem_id: string;
  created_at: string;
  problem?: Problem;
}

export interface UserProfile {
  id: string;
  clerk_id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
  is_premium: boolean;
  premium_expires_at: string | null;
  created_at: string;
}

export interface DailyStats {
  solved_today: number;
  streak_days: number;
  total_solved: number;
  total_problems: number;
}

export interface ProgressStats {
  easy_solved: number;
  easy_total: number;
  medium_solved: number;
  medium_total: number;
  hard_solved: number;
  hard_total: number;
  topics: Record<string, number>;
}

export interface HeatmapEntry {
  date: string;
  count: number;
}

export interface ActivityEntry {
  problem_id: string;
  problem_title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "solved" | "attempted";
  solved_at: string;
}

export interface PremiumStatus {
  is_premium: boolean;
  plan: "free" | "monthly" | "yearly";
  expires_at: string | null;
}

export type ApiResponse<T> = { data: T } | { error: string };

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
