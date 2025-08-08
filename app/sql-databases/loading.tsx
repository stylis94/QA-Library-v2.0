export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <main className="container mx-auto px-4 py-10">
        <div className="space-y-6 animate-pulse">
          <div className="h-8 w-64 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </main>
    </div>
  )
}
