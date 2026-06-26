import { createServiceClient } from "@/lib/supabase/client";
import type { Bookmark } from "@/types";

export async function getBookmarks(userId: string): Promise<Bookmark[]> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  type Row = {
    id: string;
    user_id: string;
    problem_id: string;
    created_at: string;
    problems: import("@/types").Problem | null;
  };

  const { data, error } = await supabase
    .from("bookmarks")
    .select("*, problems(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .returns<Row[]>();

  if (error) throw new Error(error.message);

  return (data ?? []).map(({ problems, ...rest }) => ({
    ...rest,
    problem: problems ?? undefined,
  })) as Bookmark[];
}
