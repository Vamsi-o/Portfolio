import { NextRequest, NextResponse } from 'next/server'
import { getPool, ensureVisitsTable } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const pool = getPool()
    const { path } = await req.json()
    const ua = req.headers.get('user-agent') || null
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || null

    if (!path || typeof path !== 'string') {
      return NextResponse.json({ error: 'path is required' }, { status: 400 })
    }

    await ensureVisitsTable()

    await pool.query(
      'INSERT INTO visits (path, user_agent, ip) VALUES ($1, $2, $3)',
      [path, ua, ip]
    )

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'failed to track' }, { status: 500 })
  }
}
