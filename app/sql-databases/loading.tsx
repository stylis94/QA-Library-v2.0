import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
        <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" />
        <span className="text-sm">Загрузка раздела «SQL и базы данных»…</span>
      </div>
      <span className="sr-only">{'Loading SQL & Databases section'}</span>
    </div>
  )
}
