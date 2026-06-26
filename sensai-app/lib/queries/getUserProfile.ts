import type { UserProfile } from "@/types";
import { MOCK_PROFILE } from "@/lib/mock/profile";

export async function getUserProfile(): Promise<UserProfile> {
  return MOCK_PROFILE;
}
