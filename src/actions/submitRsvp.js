"use server";

import { createRsvp } from "@/lib/airtable";


export async function submitRsvp(formData) {
  const email = formData.get("email");

  if (typeof email !== "string") {
    throw new Error("Invalid email");
  }

  await createRsvp(email);
}
