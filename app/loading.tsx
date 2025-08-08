export default function Loading() {
  return (
    <main className="min-h-[60vh] w-full p-8 flex items-center justify-center">
      <div className="flex items-center gap-3 text-neutral-600" role="status" aria-live="polite" aria-busy="true">
        <span
          className="inline-block h-5 w-5 rounded-full border-2 border-neutral-300 border-t-neutral-500 animate-spin"
          aria-hidden="true"
        />
        <span className="text-sm font-medium">Loading…</span>
      </div>
    </main>
  )
}
