'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Fire and forget; ignore errors
    const controller = new AbortController()
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname || '/' }),
      keepalive: true,
      signal: controller.signal,
    }).catch(() => {})
    return () => controller.abort()
  }, [pathname])

  return null
}
