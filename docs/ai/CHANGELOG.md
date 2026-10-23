# Changelog

All changes to this project, newest first. Every AI tool and human must add an entry here after each change.

## 2026-10-24 — Committed and pushed the local-business site to `main`

**Type:** deploy
**Tool:** Claude Code (Opus 5.5)
**What changed:**
- Committed all of the 2026-10-24 work below (rebuild, AI-first copy, About/Terms/Privacy, legal edits, email) in one commit on `main` and pushed it to `origin/main`
**Why:** Owner asked to commit and push.
**Notes / gotchas:** The push makes Vercel replace the live GTM site at `run-the-reach.vercel.app` with this one. The GTM site remains on branch `GTM`. Placeholders went live as known: `site.booking` (`[BOOKING LINK]`), `site.linkedin`, `about.name`.

## 2026-10-24 — Contact email set; "Run the Reach" in legal pages; two privacy sections removed

**Type:** content
**Tool:** Claude Code (Opus 5.5)
**What changed:**
- `site.email` is now `contact@runthereach.com` (`content/site.ts`), replacing `[hello@domain.com]` in the footer `mailto:` and every legal contact line
- Legal pages name the business as **Run the Reach** (from `site.name`) instead of "RUNTHEREACH": "This website is run by Run the Reach." The `company` constant in `content/legal.ts` is gone
- Removed the Privacy policy's **"Your rights"** and **"International transfers"** sections (`content/legal.ts`); the contents list updates automatically
**Why:** Owner's instruction: use the real contact address, don't use the all-caps name, and drop those two sections.
**Notes / gotchas:** Not committed. Verified: `npm run lint` clean; `npm run build` → `✓ Compiled successfully`; the built HTML of all four pages contains no "RUNTHEREACH", no placeholder email and neither removed heading; text read back in the browser. UK GDPR normally expects a privacy notice to tell people their rights and how data leaving the UK is protected. Removing both was the owner's decision; STATUS flags it for whoever reviews the policy.

## 2026-10-24 — Legal pages: company named as RUNTHEREACH, identifiers removed

**Type:** content
**Tool:** Claude Code (Opus 5.5)
**What changed:**
- `content/legal.ts`: the business is named as **RUNTHEREACH** ("This website is run by RUNTHEREACH (“Run the Reach”)") in both Privacy and Terms › Who we are
- Removed every line that needed a company identifier: legal name, company number, registered address, country of registration, the ICO registration sentence, and the Terms "Governing law" section
- Replaced the `[BOOKING PROVIDER]` placeholder with "a third-party booking tool"
**Why:** Owner's instruction: the company name is RUNTHEREACH, and they don't want to show a legal name, company number, address, ICO number or similar for now.
**Notes / gotchas:** Not committed. Verified: `npm run lint` clean, `npm run build` → `✓ Compiled successfully`, built `/privacy` and `/terms` contain no company placeholders, and both pages were read in the browser. The ICO is still named under Privacy › Complaints: that's the regulator's contact details, which people have a right to, not the company's registration. The only brackets left on those pages come from site-wide config: the email in the contact lines, plus the booking link and LinkedIn in the nav and footer.

## 2026-10-24 — AI-first messaging, About/Terms/Privacy pages, tyre fitters removed

**Type:** feature
**Tool:** Claude Code (Opus 5.5)
**What changed:**
- Removed "Tyre fitters" everywhere: the trades list, the About lines and the FAQ answer (`content/site.ts`)
- The trailing "and other local services" is now plain text under the trade tags, not a dashed chip. A dashed outline read as an "add more" button (`components/sections.tsx` › `TradeList`)
- AI-first is now visible across the homepage: positioning changed to "AI-first customer acquisition for local businesses" (`site.title`, `site.description`, `site.tagline`, `hero.eyebrow`), AI in the hero sub-line and first trust tick, the hero phone now reads "AI reply sent" / "Job booked by AI", AI wording in Services, How it works, Promises and a new FAQ "What does AI-first actually mean?"
- New homepage section `Ai` (`#ai`, content `ai` in `content/site.ts`): six AI capabilities (AI receptionist, instant replies, missed-call text-back, quote follow-up, smart booking, AI-tuned Google Ads) plus a custom-software note. Section order: Hero, Problem, Ai, Services, How, Trades, Promises, About, Faq, FinalCta (`app/page.tsx`)
- New pages: `/about` (`app/about/page.tsx`, copy in new `content/pages.ts`), `/privacy` and `/terms` (`app/privacy/page.tsx`, `app/terms/page.tsx`, copy in new `content/legal.ts`, rendered by new `components/legal-page.tsx` with a sticky contents list on lg+)
- `Nav` and `Footer` moved from `app/page.tsx` into `app/layout.tsx` so every page has them. Nav links now point at `/#…` so they work from inner pages, and there's an "About" link. Footer gained About / Terms / Privacy links
- New `lib/metadata.ts` › `pageMetadata()`: per-page title, description, canonical, OpenGraph and Twitter, including the share image. Root layout title is now a template (`%s — Run the Reach`)
- New primitives: `PageHeader` (inner-page `<h1>`, deliberately not faded in) in `components/section.tsx`; `TradeList` in `components/sections.tsx`; icons `phone`, `sparkles` in `components/icons.tsx`
- `<html lang="en-GB">`
**Why:** Owner asked to drop tyre fitters, make the AI-first angle obvious to every visitor, and add About, Terms and Privacy pages with drafted content.
**Notes / gotchas:** Not committed or pushed. Verified: `npm run lint` clean; `npm run build` → `✓ Compiled successfully`, 8 static routes; built HTML checked for each page's `<title>`, canonical, `og:url`, `og:image` and a single `<h1>`; all four pages checked in the browser with no horizontal overflow at 375px. **The legal pages are drafts, not legal advice**, and contain `[BRACKET]` company placeholders. Several privacy statements are commitments the owner must make true (see STATUS). Found and fixed during the work: setting `openGraph` per page silently dropped the share image (Next replaces the whole block), and `PageHeader` was first wrapped in the scroll fade, so the `<h1>` started invisible.

## 2026-10-24 — Rebuilt `main` as a local-business customer acquisition site

**Type:** feature
**Tool:** Claude Code (Opus 5.5)
**What changed:**
- Repositioned the whole site from signal-based outbound for SaaS to **customer acquisition systems for local businesses** (Google Ads leads, plus AI follow-up and custom software). The old site is untouched on branch `GTM`
- Rewrote all copy in `content/site.ts`. New exports: `problem`, `services`, `how`, `trades`, `promises`. Removed: `signals`, `loop`, `trace`, `pricing`. CTA is now "Book a call" → `site.booking` (`[BOOKING LINK]`). No prices, no results figures
- New sections in `components/sections.tsx`: Hero, Problem, Services, How, Trades, Promises, About, Faq, FinalCta. Order updated in `app/page.tsx`
- New `components/phone.tsx`: the hero phone, where enquiry → instant reply → job booked notifications land in order via CSS, once
- New `components/icons.tsx`: inline Lucide-style line icons, typed by name
- Removed `components/radar.tsx` and `components/loop-diagram.tsx`
- New warm theme in `app/globals.css`: cream/ink/burnt-orange tokens plus `--highlight` and `--good`, paper grain, `.mark` highlighter for piped headline words, `.notif`/`.ping` animations, button press feedback, focus ring, reduced-motion opt-outs for all of it
- `components/section.tsx`: highlighter accents, accent-rule section tags, chunkier 48px buttons with a `light` variant; dropped the section top borders in favour of alternating backgrounds
- `components/logo.tsx`, `nav.tsx`, `footer.tsx` restyled: rounded logo strokes, display-font wordmark, footer shows the logo and tagline
- Fonts: added `@fontsource-variable/bricolage-grotesque`; removed `@fontsource-variable/syne`, `@fontsource-variable/martian-mono`, `@fontsource/chakra-petch` (`package.json`, `app/layout.tsx`)
- `app/layout.tsx` viewport is now `themeColor: #F7F1E6`, `colorScheme: light`
- `app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx` moved to the new palette
- Docs: rewrote `docs/ai/STATUS.md` and `docs/ai/ARCHITECTURE.md`; updated `PROJECT.md`, `DECISIONS.md` (six new entries, two marked superseded) and `AGENTS.md`
**Why:** The owner paused the GTM offer and wants `main` to sell what the business actually does today: lead gen and software for local businesses, UK now and US later. They asked for a warmer, straightforward feel and a meeting-first site.
**Notes / gotchas:** Not committed or pushed. **Pushing this to `main` replaces the live site at `run-the-reach.vercel.app`.** Verified: `npm run lint` clean; `npm run build` → `✓ Compiled successfully`, 5 static routes; checked in the browser at desktop and 375px with `scrollWidth === clientWidth` (375). Commitment lines drafted from the owner's answers need confirming; STATUS › Watch out lists them, chiefly "one business per trade, per area". To use the browser pane, the owner's other project's dev server (`techtron-auto`, launched by the Claude app on port 3000) was stopped with their permission; it has to be restarted from that project. No test data or external records were created.

## 2026-10-24 — Created the `GTM` branch

**Type:** config
**Tool:** Claude Code (Opus 5.5)
**What changed:**
- Created branch `GTM` from `main` at `d1957e6` and pushed it to `origin/GTM`, tracking set up
- No file changes; `GTM` and `main` are identical
**Why:** Owner asked for a separate `GTM` branch as a copy of `main`
**Notes / gotchas:** The local checkout was left on `main`. Setting the upstream needed a write to `.git/config`, which the Claude Code sandbox blocks; `git push -u` pushes the branch but fails that step. Vercel will likely build a preview deployment for the new branch.

## 2026-10-24 — Dummy file to test the GitHub → Vercel deploy hook

**Type:** config
**Tool:** Claude Code (Opus 5)
**What changed:**
- Added `public/deploy-test.txt`, a throwaway static file served at `/deploy-test.txt`
- Committed the previously uncommitted `docs/` folder and the `AGENTS.md` / `CLAUDE.md` edits from 2026-09-28 (user asked for the commit in that message)
**Why:** The owner wanted to confirm this checkout is the right one and that pushes reach Vercel. A static file in `public/` is the cheapest visible proof: if it loads on the deployed domain, the hook works.
**Notes / gotchas:** Pushed to `origin/main` at the owner's request in the same session. **Result of the test: Vercel is connected and auto-deployed the push** — `https://run-the-reach.vercel.app/deploy-test.txt` serves the file. `public/deploy-test.txt` is disposable and can be deleted now.

This session first reported the opposite, wrongly, from two non-signals: the absent `.vercel/` directory (only means the CLI was never run here) and a 404 on the repo's GitHub `/deployments` page (Vercel's integration creates no GitHub Deployment records for this repo). **To check deploy status from a terminal, fetch the deployed URL** — do not infer it from local files or from GitHub's deployments page.

## 2026-09-28 — Added Hard rules to AGENTS.md

**Type:** docs
**Tool:** Claude Code (Opus 5)
**What changed:**
- Added a `🚫 Hard rules` section to `AGENTS.md`: no `git commit`/`git push` without an explicit request in that message, and production database is read-only
- Mirrored the rule in `CLAUDE.md`
- Changelog format in `AGENTS.md` now asks for any test-data cleanup under Notes / gotchas
**Why:** The `project-memory` skill template was updated to include these guardrails
**Notes / gotchas:** The database rule is kept verbatim even though this project has no database, so it already applies if one is ever added — annotated as such. No test data was created; nothing to clean up.

## 2026-09-28 — Project documentation initialized

**Type:** docs
**Tool:** Claude Code (Opus 5)
**What changed:**
- Created the `docs/ai/` documentation system: `PROJECT.md`, `ARCHITECTURE.md`, `STATUS.md`, `CHANGELOG.md`, `DECISIONS.md`
- Merged project-memory content into the existing `AGENTS.md`, preserving the `<!-- BEGIN:nextjs-agent-rules -->` block that `next dev` generates
- Extended `CLAUDE.md` with Claude-Code-specific sandbox and verification notes
**Why:** So any future session or AI tool can pick the project up without re-explaining it
**Notes / gotchas:** Project state at this point: a complete but unlaunched single-page marketing site for a signal-based outbound agency. All code is committed; last commit is `b5dbdd1 changes`. All `[BRACKET]` placeholders in `content/site.ts` are unfilled, so the CTA currently points nowhere. `AGENTS.md`/`CLAUDE.md` were originally created by `next dev` rather than by a human, and were committed as-is in `b5dbdd1`; this entry adds project content below the generated block.

## 2026-09-27 — Repositioned the site around the Radar / signal-scanning concept

**Type:** feature
**Tool:** Claude Code (Opus 5)
**Commit:** `b5dbdd1 changes`
**What changed:**
- Rewrote `content/site.ts` end to end: new positioning ("We scan for buyers. You take the meetings."), new system name "The Radar Loop", one site-wide CTA "Get 25 free leads" pointing at `site.booking`
- Added `components/radar.tsx` — `RadarField` (four concentric rings, crosshairs, 12s conic sweep) and `RadarBlips` (fading signal blips, absolute on `lg+`, 2×2 chip grid below)
- Added `components/loop-diagram.tsx` — Scan → Lock on → Reach out → Learn, as a ring with clockwise arrowheads on `md+` and a stack with a `↻` return pill on mobile
- Rewrote `components/sections.tsx` with the new section set: Hero, Signals, Loop, Trace, About, Pricing, Faq, FinalCta
- Replaced `LastWord` with `Accented` in `components/section.tsx` (pipe-delimited accent markers); added `SectionTag` and `PrimaryCta`; `SectionHeader` now takes `tag` instead of `num`/`label`
- Added radar animations to `app/globals.css` (`radar-spin`, `blip-fade`, `blip-ping`) and removed the terminal/marquee/cursor keyframes
- Rewrote `components/nav.tsx` (new links, new CTA), `components/footer.tsx` (simplified), `app/page.tsx` (new section order)
- Added `plain()` to `content/site.ts` and used it in `app/opengraph-image.tsx`
- Deleted `components/pipeline-run.tsx` and `components/problem-art.tsx`
- `components/logo.tsx`: wordmark set to `whitespace-nowrap`
**Why:** The previous structure and copy were too close to another agency's site; the owner wanted a distinct identity built on a radar / signal-scanning metaphor
**Notes / gotchas:** Removed by request: terminal run-log card, numbered section labels, L1–L4 framework, tool marquee, "The math" section, 3-tier pricing, "Book a free outbound audit" wording, "Built on the stack we sell", and the "Who is this NOT for" FAQ. The dark + amber theme and font stack were explicitly preserved. FAQ and About copy make operational claims that the owner has not yet confirmed.

## 2026-09-27 — Design fixes: hero layout, type scale, mobile overflow

**Type:** style
**Tool:** Claude Code (Opus 5)
**Commit:** none of its own — squashed into `b5dbdd1` along with the entry above
**What changed:**
- Hero became a two-column grid (text left, terminal right) stacking on mobile; headline reduced ~30%
- Removed the `Radar` component (concentric circles, sweep, stray dots) from the hero and final CTA, and the top-left motto eyebrow
- Reduced all section `<h2>` sizes ~30% (`clamp(2.25rem,6vw,5rem)` → `clamp(1.6rem,4.2vw,3.5rem)`); tightened section padding to `py-16 sm:py-24`
- Rebuilt the Problem section as an even 2-column grid with mini UI mockups in a new `components/problem-art.tsx` (busy calendar, stale SDR job post, funding alert, spam folder)
- Framework badges L1–L4 changed to outlined amber; tool tags moved to a single left-aligned wrapping row
- Pricing feature list switched to a single column with a wider track
- Added tool tags to two terminal rows in `content/site.ts` (enrich → leadmagic, meetings → cal.com)
- **Fixed a real 375px horizontal overflow**: added `min-w-0` to both hero grid children
**Why:** Owner-supplied list of design corrections
**Notes / gotchas:** Most of this was superseded hours later by the radar repositioning — the Problem section, the terminal and the removed radar all came back or went away again. The `min-w-0` fix and the type scale survived. The radar removal here was reverted by the next session's request to bring the circles back.

## 2026-09-27 — Initial build (reconstructed from git history)

**Type:** feature
**Tool:** unknown (pre-dates documentation)
**Commits:** `035463a first commit` (00:35), `ffddbcd done` (00:51)
**What changed:**
- Initial Next.js 16 + Tailwind v4 project
- Dark/amber design system in `app/globals.css`, self-hosted fonts, generated icons and OG image
- Content/presentation split established: all copy in `content/site.ts`
- Original landing page: hero with animated terminal run-log, tool marquee, problem cards, L1–L4 framework, 3-tier pricing, how-it-works, "the math", FAQ
**Why:** Build a marketing site for the agency
**Notes / gotchas:** Reconstructed from the two commits and the code as it stood at the start of the 2026-09-27 session. Exact authorship and intent before that point are not recorded.
