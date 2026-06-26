import { createServiceClient } from "@/lib/supabase/client";
import type { PremiumStatus } from "@/types";

export async function getPremiumStatus(userId: string): Promise<PremiumStatus> {
  const supabase = createServiceClient();
  if (!supabase) throw new Error("Supabase client not available");

  const { data, error } = await supabase
    .from("users")
    .select("is_premium, premium_expires_at")
    .eq("id", userId)
    .single<{ is_premium: boolean; premium_expires_at: string | null }>();

  if (error) throw new Error(error.message);

  const plan: PremiumStatus["plan"] = data.is_premium ? "monthly" : "free";
  return {
    is_premium: data.is_premium,
    plan,
    expires_at: data.premium_expires_at,
  };
}
