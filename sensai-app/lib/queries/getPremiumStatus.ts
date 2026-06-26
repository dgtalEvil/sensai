import type { PremiumStatus } from "@/types";
import { MOCK_PROFILE } from "@/lib/mock/profile";

export async function getPremiumStatus(): Promise<PremiumStatus> {
  return {
    is_premium: MOCK_PROFILE.is_premium,
    plan: "free",
    expires_at: MOCK_PROFILE.premium_expires_at,
  };
}
