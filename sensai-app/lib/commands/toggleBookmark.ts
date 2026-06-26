import { createServiceClient } from "@/lib/supabase/client";

interface ToggleBookmarkParams {
  userId: string;
  problemId: string;
}

export async function toggleBookmark({
  userId,
  problemId,
}: ToggleBookmarkParams): Promise<{ bookmarked: boolean }> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { data: existing } = await supabase
    .from("bookmarks")
    .select("id")
    .eq("user_id", userId)
    .eq("problem_id", problemId)
    .single<{ id: string }>();

  if (existing) {
    await supabase.from("bookmarks").delete().eq("id", existing.id);
    return { bookmarked: false };
  }

  await supabase
    .from("bookmarks")
    .insert([{ user_id: userId, problem_id: problemId }] as unknown as never[]);
  return { bookmarked: true };
}
