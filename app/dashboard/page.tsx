import { getPool, ensureVisitsTable } from '@/lib/db'

type VisitByDay = { day: string; count: number }

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const pool = getPool()
  await ensureVisitsTable()

  const totalRes = await pool.query<{ count: string }>('SELECT COUNT(*)::text as count FROM visits')
  const total = Number(totalRes.rows[0]?.count || 0)

  const daysRes = await pool.query<VisitByDay>(
    `SELECT to_char(date_trunc('day', created_at), 'YYYY-MM-DD') as day, COUNT(*)::int as count
     FROM visits
     WHERE created_at >= now() - interval '7 days'
     GROUP BY 1
     ORDER BY 1`
  )
  const byDay = daysRes.rows

  // Create a 7-day series including days with 0
  const today = new Date()
  const series: VisitByDay[] = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() - (6 - i))
    const key = d.toISOString().slice(0, 10)
    const found = byDay.find((r) => r.day === key)
    return { day: key, count: found?.count ?? 0 }
  })

  const max = Math.max(1, ...series.map((s) => s.count))

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-2">Site visits overview</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6 border border-white/10 md:col-span-1">
            <p className="text-sm text-gray-400">Total Visits</p>
            <p className="mt-2 text-4xl font-bold gradient-text">{total.toLocaleString()}</p>
          </div>

          <div className="glass rounded-2xl p-6 border border-white/10 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Last 7 Days</h2>
            </div>
            <div className="grid grid-cols-7 gap-3 items-end">
              {series.map((s) => (
                <div key={s.day} className="flex flex-col items-center">
                  <div
                    className="w-full rounded-md bg-linear-to-t from-[#6366f1] to-[#06b6d4]"
                    style={{ height: `${Math.max(8, (s.count / max) * 120)}px` }}
                    title={`${s.day}: ${s.count} visits`}
                  />
                  <span className="mt-2 text-[10px] text-gray-400">{s.day.slice(5)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
