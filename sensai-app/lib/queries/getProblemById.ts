import { createServiceClient } from "@/lib/supabase/client";
import type { Problem } from "@/types";

export async function getProblemById(id: string): Promise<Problem | null> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { data, error } = await supabase
    .from("problems")
    .select("*")
    .eq("id", id)
    .single();

  if (error?.code === "PGRST116") return null;
  if (error) throw new Error(error.message);
  return data as Problem;
}
