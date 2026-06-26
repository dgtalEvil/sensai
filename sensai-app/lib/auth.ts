import { createServiceClient } from "@/lib/supabase/client";

export async function getInternalUserId(clerkId: string): Promise<string> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", clerkId)
    .single<{ id: string }>();

  if (existing) return existing.id;

  const { data: created, error } = await supabase
    .from("users")
    .insert([
      { clerk_id: clerkId, email: "", name: null, avatar_url: null },
    ] as unknown as never[])
    .select("id")
    .single<{ id: string }>();

  if (error || !created) throw new Error("Failed to create user record");
  return created.id;
}
