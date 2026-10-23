# Changelog

All changes to this project, newest first. Every AI tool and human must add an entry here after each change.

## 2026-10-24 — Dummy file to test the GitHub → Vercel deploy hook

**Type:** config
**Tool:** Claude Code (Opus 5)
**What changed:**
- Added `public/deploy-test.txt`, a throwaway static file served at `/deploy-test.txt`
- Committed the previously uncommitted `docs/` folder and the `AGENTS.md` / `CLAUDE.md` edits from 2026-09-28 (user asked for the commit in that message)
**Why:** The owner wanted to confirm this checkout is the right one and that pushes reach Vercel. A static file in `public/` is the cheapest visible proof: if it loads on the deployed domain, the hook works.
**Notes / gotchas:** `public/deploy-test.txt` is disposable — delete it once the deploy is confirmed. The repo has no `.vercel/` directory, so this project is not linked via the Vercel CLI in this checkout; any deploy would have to come from the Vercel dashboard's GitHub integration on `azizul-orvee/run-the-reach`. Nothing was pushed.

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
