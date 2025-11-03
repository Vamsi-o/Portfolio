This is a [Next.js](https://nextjs.org) portfolio.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## GitHub Contribution Graph

This portfolio embeds a live-updating GitHub contribution calendar in `About`.

### Setup

1) Create a GitHub Personal Access Token (classic) with the minimal `read:user` scope (no repo access required).

2) Add environment variables (create `.env.local` from the example):

```
cp .env.local.example .env.local
# Edit .env.local and set:
# GITHUB_TOKEN=ghp_...
# GITHUB_USERNAME=your-github-username (optional, component also accepts a prop)
```

3) Run the dev server:

```bash
npm run dev
```

### How it works

- Server route: `app/api/github/contributions/route.ts` queries the GitHub GraphQL API for the last year of contributions and returns compact day-by-day data. The token never reaches the client.
- Client component: `app/components/ContributionGraph.tsx` fetches from the API and renders with `react-activity-calendar`. It auto-refreshes every 60 seconds by default for “real-time” updates.
- Usage: The component is wired in `app/components/About.tsx`.

To change the refresh interval, adjust the `refreshMs` prop on `ContributionGraph`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
