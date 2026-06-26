// Phase 3 stub — returns fixed mock UUID.
// Phase 4 replaces body with: SELECT id FROM users WHERE clerk_id = clerkId
export async function getInternalUserId(_clerkId: string): Promise<string> {
  return "u0000001-0000-0000-0000-000000000001";
}
