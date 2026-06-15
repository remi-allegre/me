import Link from "next/link";
import { getRaces } from "@/lib/db";

export const metadata = {
  title: "Races",
  description: "Races I've run.",
};

export default async function RacesPage() {
  const races = await getRaces();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Races</h1>

      {races.length === 0 ? (
        <p className="mt-8 text-zinc-500">Nothing here yet.</p>
      ) : (
        <ul className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
          {races.map((race) => (
            <li key={race.id} className="flex items-baseline justify-between gap-4 py-3">
              <div>
                <span className="font-medium">{race.name}</span>
                {race.distance && (
                  <span className="text-zinc-500"> — {race.distance}</span>
                )}
                {race.location && (
                  <span className="text-zinc-500"> · {race.location}</span>
                )}
              </div>
              <div className="shrink-0 text-sm text-zinc-500">
                {race.time}
                {race.race_date && (
                  <span className="ml-2 text-zinc-400">{race.race_date}</span>
                )}
                {race.strava_link && (
                  <a
                    href={race.strava_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 font-medium text-[#fc4c02] hover:underline"
                  >
                    Strava
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
