import { Pool } from 'pg'

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined
}

export function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
  }
  if (!global.pgPool) {
    global.pgPool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
  }
  return global.pgPool
}

export async function ensureVisitsTable() {
  const pool = getPool()
  await pool.query(`
    CREATE TABLE IF NOT EXISTS visits (
      id BIGSERIAL PRIMARY KEY,
      path TEXT NOT NULL,
      user_agent TEXT,
      ip TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS idx_visits_created_at ON visits (created_at);
    CREATE INDEX IF NOT EXISTS idx_visits_path ON visits (path);
  `)
}
