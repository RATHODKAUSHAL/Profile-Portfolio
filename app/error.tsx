"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col items-start justify-center gap-4 px-6">
      <h2 className="display-font text-4xl">Something went wrong</h2>
      <p className="text-black/70">
        We could not load this page right now. Please try again.
      </p>
      <button type="button" className="soft-btn soft-btn-accent" onClick={reset}>
        Try Again
      </button>
      {error.digest ? (
        <p className="text-xs text-black/60">Error reference: {error.digest}</p>
      ) : null}
    </div>
  );
}
