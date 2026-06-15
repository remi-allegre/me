import { neon } from "@neondatabase/serverless";

// These queries run during `next build` (Server Components) — never in the
// browser. The connection string therefore never ships to the client.
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is not set. Add it to .env.local for local builds and as a " +
      "GitHub Actions secret for the deploy workflow.",
  );
}

const sql = neon(databaseUrl);

export type Book = {
  id: number;
  title: string;
  author: string | null;
  language: string | null;
  status: string;
  finished_at: string | null;
};

export type Race = {
  id: number;
  name: string;
  race_date: string | null;
  distance: string | null;
  time: string | null;
  location: string | null;
  strava_link: string | null;
};

export async function getBooks(): Promise<Book[]> {
  const rows = await sql`
    SELECT id, title, author, language, status, finished_at::text
    FROM books
    ORDER BY finished_at DESC NULLS LAST, created_at DESC
  `;
  return rows as Book[];
}

export async function getRaces(): Promise<Race[]> {
  const rows = await sql`
    SELECT id, name, race_date::text, distance, time, location, strava_link
    FROM races
    ORDER BY race_date DESC NULLS LAST, created_at DESC
  `;
  return rows as Race[];
}
