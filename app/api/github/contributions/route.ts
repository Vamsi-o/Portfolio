import { NextRequest, NextResponse } from 'next/server'

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql'

type ContributionDay = {
  date: string
  contributionCount: number
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('user') || process.env.GITHUB_USERNAME
  const token = process.env.GITHUB_TOKEN

  if (!username) {
    return NextResponse.json(
      { error: 'Missing username. Provide ?user=USERNAME or set GITHUB_USERNAME.' },
      { status: 400 }
    )
  }

  if (!token) {
    return NextResponse.json(
      { error: 'Missing GITHUB_TOKEN on server. Set it in your environment.' },
      { status: 500 }
    )
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays { date contributionCount }
            }
          }
        }
      }
    }
  `

  try {
    const res = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { login: username } }),
      // Avoid any caching to keep data fresh
      cache: 'no-store',
    })

    if (!res.ok) {
      const txt = await res.text()
      return NextResponse.json(
        { error: 'GitHub API error', details: txt },
        { status: res.status }
      )
    }

    const json = await res.json()
    if (json.errors) {
      return NextResponse.json({ error: 'GitHub GraphQL errors', details: json.errors }, { status: 502 })
    }

    const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks as {
      contributionDays: ContributionDay[]
    }[]

    // Flatten to array of { date, count }
    const days = weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
    )

    return new NextResponse(JSON.stringify({ user: username, days }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Prevent caching at the edge/browser
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Expires: '0',
        Pragma: 'no-cache',
      },
    })
  } catch (err: any) {
    return NextResponse.json({ error: 'Unexpected server error', details: String(err) }, { status: 500 })
  }
}
