import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Rémi Allègre</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Personal site. Keeping track of what I read and where I run.
      </p>

      <nav className="mt-10 flex gap-4">
        <Link
          href="/books"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Books
        </Link>
        <Link
          href="/races"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Races
        </Link>
      </nav>
    </main>
  );
}
