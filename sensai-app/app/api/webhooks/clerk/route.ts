import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { createServiceClient } from "@/lib/supabase/client";

interface ClerkUserPayload {
  id: string;
  email_addresses: { email_address: string; primary: boolean }[];
  first_name: string | null;
  last_name: string | null;
  image_url: string | null;
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 },
      );
    }

    const svixId = req.headers.get("svix-id");
    const svixTimestamp = req.headers.get("svix-timestamp");
    const svixSignature = req.headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 },
      );
    }

    const payload = await req.text();
    const wh = new Webhook(secret);

    wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });

    const event = JSON.parse(payload) as {
      type: string;
      data: ClerkUserPayload;
    };

    if (event.type === "user.created" || event.type === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;
      const primary =
        email_addresses.find((e) => e.primary) ?? email_addresses[0];
      const email = primary?.email_address ?? "";
      const name = [first_name, last_name].filter(Boolean).join(" ") || null;

      const supabase = createServiceClient();
      if (supabase) {
        await supabase
          .from("users")
          .upsert(
            [
              { clerk_id: id, email, name, avatar_url: image_url },
            ] as unknown as never[],
            { onConflict: "clerk_id" },
          );
      }
    }

    return NextResponse.json({ data: { received: true } });
  } catch {
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 },
    );
  }
}
