import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";

export async function serverFetch<T>(path: string): Promise<T> {
  const { getToken } = await auth();
  const token = await getToken();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Fetch failed: ${path} (${res.status})`);
  const json = (await res.json()) as { data: T } | { error: string };
  if ("error" in json) throw new Error(json.error);
  return json.data;
}
