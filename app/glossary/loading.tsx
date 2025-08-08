export default function Loading() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      aria-busy="true"
      aria-live="polite"
    >
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="h-9 w-24 rounded-md bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="space-y-2">
              <div className="h-6 w-64 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-4 w-96 max-w-[70vw] rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Search input skeleton */}
        <div className="h-10 w-full rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />

        {/* Category chips skeleton */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-28 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse"
            />
          ))}
        </div>

        {/* Results count skeleton */}
        <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white dark:bg-slate-900 p-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="h-5 w-40 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="h-5 w-24 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
              </div>
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="h-4 w-3/5 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
