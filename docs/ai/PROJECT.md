# Project Overview — Run the Reach

## Purpose

Marketing site for **Run the Reach**, an agency selling **AI-first customer acquisition for local businesses**. Two halves, one story:

1. **Leads:** Google Ads lead generation, either *pay per lead* (the agency funds the ads and sells exclusive leads) or *managed Google Ads* (the client's account and budget).
2. **The tech that converts them:** AI follow-up (instant replies, missed-call text-backs, quote chasing, booking) and custom software when off-the-shelf tools don't fit.

**Headline:** "More booked jobs. Not just more clicks."
**Pages:** `/` (homepage), `/about`, `/terms`, `/privacy`.
**Promises:** every lead exclusive to one client; one business per trade, per area; seven figures of Google Ads spend managed.
**Market:** UK now, US planned. Copy is deliberately location-neutral, in UK English.

**Primary user action:** "Book a call", which points at a single booking link (`site.booking` in `content/site.ts`). Pricing is discussed on the call and never shown on the site. There is no other conversion path: no form, no signup, no checkout.

> Until 2026-10-24 this repo's `main` was a site for *signal-based outbound for seed-stage B2B SaaS*. That site is preserved on the `GTM` branch.

## Owner / client

Self-owned. The owner runs Google Ads and builds AI-first and custom software, and has worked with local trades for three years (tyre fitters, roofers, auto locksmiths, car key replacement, recovery/towing, boiler and HVAC engineers). The About section is written in the first person. The owner's name, email, LinkedIn and booking link are `[BRACKET]` placeholders in `content/site.ts`.

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16.3.6, App Router, Turbopack |
| Language | TypeScript 7 |
| UI | React 19.3 |
| Styling | Tailwind CSS v4 (CSS-first `@theme inline` config, no `tailwind.config.js`) |
| Fonts | Self-hosted via `@fontsource-variable` — Bricolage Grotesque (headings), Instrument Sans (body) |
| Database / ORM | None |
| Auth | None |
| Hosting | Vercel, auto-deploys `main` to `run-the-reach.vercel.app` |
| Analytics / tracking | None yet |
| Payments | None |

The site is fully static — every route (8, including generated icons and the OG image) prerenders at build time. There is no server-side data fetching, no API route, and no client-side state beyond one IntersectionObserver.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Inside the Claude Code sandbox, `npm install` needs a writable cache: `npm install --cache "$TMPDIR/npm-cache"`.

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

**Vercel, auto-deploying from `main`** to `https://run-the-reach.vercel.app`. The integration lives on the Vercel side (dashboard GitHub app on `azizul-orvee/run-the-reach`); the repo needs no config file for it and there is deliberately no `vercel.json`.

Note for any tool checking deploy status: this checkout has **no `.vercel/` directory** (the CLI has never been run here) and the repo's GitHub `/deployments` page **404s** (Vercel creates no GitHub Deployment records here). Neither means deploys are broken — verified 2026-10-24. Check by fetching the deployed URL:

    curl -sI https://run-the-reach.vercel.app/ | head -1

**Pushing to `main` changes the live site.** Other branches, such as `GTM`, don't touch production. Whether they get Vercel preview URLs hasn't been checked.

Build output is entirely static (8 prerendered routes), so any static host would also work.

## External accounts / dashboards

- **Vercel** — project deploying this repo, serving `run-the-reach.vercel.app`. No custom domain attached yet.
- The domain `runthereach.com` is referenced in `content/site.ts` but registration/DNS status is unconfirmed.

`TODO: confirm with user` — domain registrar, and whether an analytics tool should be added before launch.
