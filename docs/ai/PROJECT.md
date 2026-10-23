# Project Overview — Run the Reach

## Purpose

Marketing site for **Run the Reach**, a solo GTM-engineering agency. It sells *signal-based outbound* to seed-stage B2B SaaS founders: instead of blasting a static list, the service watches a defined market for buying signals (funding rounds, sales-role postings, new sales leaders, tech-stack changes, site visits, competitor churn) and emails those accounts the week the signal appears.

**Positioning line:** "We scan for buyers. You take the meetings."
**System name:** The Radar Loop (Scan → Lock on → Reach out → Learn).

**Primary user action:** click "Get 25 free leads", which points at a single booking/form link (`site.booking` in `content/site.ts`). There is no other conversion path — no signup, no checkout, no account.

## Owner / client

Self-owned, one person. The founder is a JavaScript engineer turned GTM engineer; the site's voice is deliberately first-person and direct. The founder's name, email and LinkedIn are `[BRACKET]` placeholders in `content/site.ts` pending real values.

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16.3.6, App Router, Turbopack |
| Language | TypeScript 7 |
| UI | React 19.3 |
| Styling | Tailwind CSS v4 (CSS-first `@theme inline` config, no `tailwind.config.js`) |
| Fonts | Self-hosted via `@fontsource` — Syne (display), Instrument Sans (body), Martian Mono (mono), Chakra Petch (nav) |
| Database / ORM | None |
| Auth | None |
| Hosting | Vercel (intended; project not yet linked) |
| Analytics / tracking | None yet |
| Payments | None |

The site is fully static — every route prerenders at build time. There is no server-side data fetching, no API route, and no client-side state beyond one IntersectionObserver.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

No `.env` file is required to run locally; `site.url` falls back to `https://runthereach.com`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next dev server (Turbopack) on port 3000 |
| `npm run build` | Production build; prerenders all routes |
| `npm run start` | Serve the production build |
| `npm run lint` | **`tsc --noEmit`** — typecheck only. This is not ESLint; there is no ESLint config in the project. |

## Environment variables (names only — never values)

| Name | Purpose | Where set |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Overrides the canonical/OG base URL. Optional — falls back to `https://runthereach.com` in `content/site.ts`. | Vercel project settings |

That is the only environment variable the codebase reads.

## Deployment

Intended target is Vercel with auto-deploy from `main`. **Not yet linked** — there is no `.vercel/` directory and the Vercel CLI is not installed on the dev machine. To set up: `npm i -g vercel`, then `vercel link` and `vercel deploy`.

Build output is entirely static (5 prerendered routes), so any static host would also work.

## External accounts / dashboards

None configured yet. The domain `runthereach.com` is referenced in `content/site.ts` but registration/DNS status is unconfirmed.

`TODO: confirm with user` — domain registrar, Vercel project, and whether an analytics tool should be added before launch.
