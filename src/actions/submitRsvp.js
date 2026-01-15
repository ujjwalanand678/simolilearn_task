"use server";

import { createRsvp } from "@/lib/airtable";

export async function submitRsvp(formData) {
  const email = formData.get("email");

  // NEVER throw inside a Server Action
  if (!email || typeof email !== "string") {
    return { success: false };
  }

  try {
    await createRsvp(email);
    return { success: true };
  } catch (err) {
    console.error("Airtable error:", err);
    return { success: false };
  }
}
