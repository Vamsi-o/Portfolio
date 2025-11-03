'use client'

import { useEffect, useMemo, useState } from 'react'
import ActivityCalendar, { type Activity } from 'react-activity-calendar'

type ApiResponse = {
  user: string
  days: { date: string; count: number }[]
}

type Props = {
  username: string
  refreshMs?: number
}

export default function ContributionGraph({ username, refreshMs = 60_000 }: Props) {
  const [data, setData] = useState<Activity[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async (signal?: AbortSignal) => {
    try {
      setError(null)
      const res = await fetch(`/api/github/contributions?user=${encodeURIComponent(username)}`, {
        cache: 'no-store',
        signal,
      })
      if (!res.ok) throw new Error(await res.text())
      const json: ApiResponse = await res.json()
      // Compute levels 0-4 from counts
      const max = Math.max(0, ...json.days.map((d) => d.count))
      const toLevel = (count: number) => {
        if (count <= 0) return 0
        if (max <= 4) return Math.min(count, 4) // tiny ranges
        const r = count / max
        if (r > 0.8) return 4
        if (r > 0.6) return 3
        if (r > 0.3) return 2
        return 1
      }
      const activities: Activity[] = json.days.map((d) => ({ date: d.date, count: d.count, level: toLevel(d.count) as 0|1|2|3|4 }))
      setData(activities)
    } catch (e: any) {
      setError(e?.message || 'Failed to load contributions')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchData(controller.signal)
    const id = setInterval(() => fetchData(), refreshMs)
    return () => {
      controller.abort()
      clearInterval(id)
    }
  }, [username, refreshMs])

  const theme = useMemo(
    () => ({
      light: ['#f1f5f9', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa'],
      dark: ['rgba(255,255,255,0.06)', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5'],
    }),
    []
  )

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white font-display">GitHub Activity</h3>
        <span className="text-xs text-gray-400">@{username}</span>
      </div>

      {loading && (
        <div className="text-gray-400 text-sm">Loading contributions…</div>
      )}

      {error && (
        <div className="text-red-400 text-sm">{error}</div>
      )}

      {!!data && (
        <div className="overflow-x-auto">
          <ActivityCalendar
            data={data}
            theme={theme}
            colorScheme="dark"
            blockSize={12}
            blockRadius={3}
            blockMargin={4}
            hideMonthLabels={false}
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
          />
        </div>
      )}

      <p className="mt-3 text-xs text-gray-400">Auto-refreshes every {Math.round(refreshMs / 1000)}s.</p>
    </div>
  )
}
