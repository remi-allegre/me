import Link from "next/link";
import { getBooks } from "@/lib/db";

export const metadata = {
  title: "Books",
  description: "Books I've read and am reading.",
};

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Books</h1>

      {books.length === 0 ? (
        <p className="mt-8 text-zinc-500">Nothing here yet.</p>
      ) : (
        <ul className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
          {books.map((book) => (
            <li key={book.id} className="flex items-baseline justify-between gap-4 py-3">
              <div>
                <span className="font-medium">{book.title}</span>
                {book.author && (
                  <span className="text-zinc-500"> — {book.author}</span>
                )}
              </div>
              <div className="shrink-0 text-sm text-zinc-500">
                {book.language && <span>{book.language}</span>}
                {book.language && " · "}
                {book.status}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
