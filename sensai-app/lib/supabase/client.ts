import { createClient } from "@supabase/supabase-js";

// Phase 3 stub — returns null until Phase 4 wires real credentials
export function createServiceClient(): ReturnType<typeof createClient> | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
