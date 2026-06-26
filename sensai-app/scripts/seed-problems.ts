import { createClient } from "@supabase/supabase-js";
import { MOCK_PROBLEMS } from "../lib/mock/problems";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error(
    "Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set",
  );
  process.exit(1);
}

const supabase = createClient(url, key);

async function seed() {
  console.log(`Seeding ${MOCK_PROBLEMS.length} problems...`);

  const { error } = await supabase
    .from("problems")
    .upsert(MOCK_PROBLEMS, { onConflict: "id" });

  if (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }

  console.log(`Done — ${MOCK_PROBLEMS.length} problems upserted.`);
}

seed();
