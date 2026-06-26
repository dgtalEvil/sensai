import { createServiceClient } from "@/lib/supabase/client";
import type { UserProfile } from "@/types";

export async function getUserProfile(
  userId: string,
): Promise<UserProfile | null> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error?.code === "PGRST116") return null;
  if (error) throw new Error(error.message);
  return data as UserProfile;
}
