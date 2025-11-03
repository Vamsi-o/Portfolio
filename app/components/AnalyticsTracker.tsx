// 'use client'
// import { useEffect } from 'react'
// import { analytics } from '../lib/analytics'
// import { usePathname } from 'next/navigation'

// export default function AnalyticsTracker() {
//   const pathname = usePathname()

//   useEffect(() => {
//     // Track visitor on mount
//     analytics.trackVisitor()
//   }, [])

//   useEffect(() => {
//     // Track page view when route changes
//     if (pathname) {
//       analytics.trackPageView(pathname)
//     }
//   }, [pathname])

//   return null
// }
