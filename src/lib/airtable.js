import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

export async function createRsvp(email) {
  if (!apiKey || !baseId) {
    console.error("Missing Airtable env variables");
    return;
  }

  const base = new Airtable({ apiKey }).base(baseId);

 await base("RSVPs").create([
  {
    fields: {
      Email: email,
    },
  },
]);

}
