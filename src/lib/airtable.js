import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  throw new Error("Missing Airtable env variables");
}

const base = new Airtable({ apiKey }).base(baseId);

export async function createRsvp(email) {
  await base("RSVPs").create({
    Email: email,
  });
}
