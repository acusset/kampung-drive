"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">DB</h1>
      <p>There was an error connecting to the database.</p>
      <p>Check your DATABASE_URL in .env.local (see .env.example).</p>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
