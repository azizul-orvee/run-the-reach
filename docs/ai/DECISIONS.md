# Decisions

Why things are the way they are. Newest first.

## 2026-10-24 — Legal pages drafted in plain English, structured as data

**Context:** The owner asked for Terms and Privacy pages "from your brain". The business serves the UK now and the US later, sells exclusive leads (it passes consumer enquiries to one paying business), and runs AI on customer conversations. All of that has data-protection consequences.
**Decision:** UK-oriented drafts (UK GDPR, the ICO) in `content/legal.ts`, as `{ heading, body: (string | { list })[] }` sections rendered by `components/legal-page.tsx`. The Privacy policy says plainly that a business may pay for an introduction (it does **not** claim "we never sell your data", which would be false for pay-per-lead), commits to one business per enquiry to match the exclusivity promise, and has an AI section covering automated decisions and model training. The Terms are *website* terms of use; service terms are deferred to a separate written agreement, because the commercial terms (fees, lead credits, notice periods) are unknown. **Revised the same day:** the owner chose to name the business only as **Run the Reach** and show no legal name, company number, address, ICO registration number or governing law for now. Every line that needed them was removed (including the Terms' governing-law section), and the booking provider is described generically. The owner also had the Privacy policy's "Your rights" and "International transfers" sections removed.
**Alternatives considered:** Full service T&Cs, which would mean inventing commercial terms. A generic template, which would contradict the actual lead-selling model.
**Consequences:** These are drafts, not legal advice. Several lines are commitments the owner must make true: AI providers that don't train on the data, the retention periods (24 months for enquiries and prospects, 6 years for client records), and "not sold to list brokers". Without the rights and transfers sections the policy is thinner than UK GDPR Art. 13 normally expects. If the business is not established in the UK, UK GDPR may also require a UK representative. Bump `updated` on every change.

## 2026-10-24 — Shared shell in the root layout; per-page metadata helper

**Context:** With more than one page, `Nav`/`Footer` in `app/page.tsx` would need copying, and Next merges metadata shallowly: a page that sets only `title` inherits the homepage's canonical and OpenGraph, and a page that sets `openGraph` loses the layout's share image (it replaces the whole block, see `generate-metadata.md` › Overwriting fields).
**Decision:** `Nav`, `<main>` and `Footer` live in `app/layout.tsx`. `lib/metadata.ts` › `pageMetadata({ title, description, path })` returns title, description, canonical, OpenGraph and Twitter with the `/opengraph-image` card passed back in explicitly. The root title is a template, `%s — Run the Reach`. Nav links are `/#section` so they work from inner pages.
**Consequences:** New pages render bare content: no `<main>`, no nav. Inner pages share the homepage's OG card rather than having their own.

## 2026-10-24 — Inner-page headers are not scroll-revealed

**Context:** `PageHeader` was first wrapped in `<Reveal>`, which starts at `opacity: 0` until the IntersectionObserver fires, so the page's `<h1>` loaded invisible.
**Decision:** `PageHeader` renders a plain `<div>`, matching the homepage hero, which never used `Reveal`. Only content below the first screen fades in.
**Consequences:** The largest text on each page paints immediately, which helps LCP.

## 2026-10-24 — Repositioned `main` for local businesses; old site kept on the `GTM` branch

**Context:** The owner paused the outbound-for-SaaS offer. Their actual business is Google Ads lead generation for local businesses (pay-per-lead with their own ad budget, or managing the client's account), plus AI-first and custom software, and all of their clients are local businesses.
**Decision:** One story for one buyer: *customer acquisition systems for local businesses*. "We bring in the leads, then build the tech that turns them into booked jobs." The software is framed as the differentiator from ordinary ad agencies, not as a separate dev-shop offer. The name Run the Reach stays (owner's call). The GTM site is preserved untouched on branch `GTM`.
**Alternatives considered:** A software studio with a lead-gen package, which would put off local owners who don't buy "software". Two brands, which is cleaner but twice the upkeep, and unnecessary when every client is local.
**Consequences:** Every section was rewritten. The radar, Radar Loop, signal cards and pricing are gone from `main`; see the `GTM` branch for them.

## 2026-10-24 — Meeting-first: no prices, no results figures, one CTA

**Context:** The owner wants the site to push towards a call where fit and pricing get discussed, and doesn't want to show numbers.
**Decision:** Every CTA is "Book a call" via `PrimaryCta` → `site.booking`. Services are described without prices. No leads-delivered, cost-per-lead or case-study figures. The one number is "Seven figures of Google Ads spend managed", which the owner offered as proof. It's written in words with no currency so it reads the same in the UK and the US.
**Alternatives considered:** A "first leads free" hook. The owner declined: offers are for the call.
**Consequences:** The site leans on promises (exclusive leads, one business per trade per area) and on the hero phone demo instead of numbers. The final CTA and FAQ say what happens on the call, to lower the barrier to booking.

## 2026-10-24 — Show example trades, but no niche positioning

**Context:** The owner works with specific niches but is open to any local business, didn't want niches on the site, then left the decision to the AI. (Tyre fitters was removed at the owner's request on 2026-10-24.)
**Decision:** A "Who we help" section lists the trades they've grown (roofers, boiler/HVAC engineers, locksmiths, auto locksmiths, car key replacement, tyre fitters, recovery/towing) as chips, ending in an open "and other local services" chip, with the line "if your customers search Google when they need you, we can probably help."
**Alternatives considered:** No trades at all, which makes the copy generic and gives an owner no "is this for me?" moment. Niche-led positioning, which the owner ruled out.
**Consequences:** Specific without being exclusive. If the owner wants the trades gone, delete the `Trades` section and the `trades` export. FAQ and About also mention a few trades in passing.

## 2026-10-24 — Location-neutral copy in UK English

**Context:** The owner operates in the UK now and plans to enter the US soon.
**Decision:** No country, city or currency appears anywhere in the copy, so the site doesn't need restructuring for the US. Spelling is UK English for the current market.
**Consequences:** A US launch needs only a spelling pass (tyre → tire, centre → center, enquiry → inquiry) in `content/site.ts`.

## 2026-10-24 — Warm, straightforward visual theme replacing dark + amber

**Context:** The owner asked for a warmer, more straightforward feel. The old dark/amber radar look was built for tech-savvy SaaS founders; the new audience is trades owners, often reading on a phone between jobs.
**Decision:** Warm cream paper with a faint grain, near-black warm ink, a single burnt-orange accent (`#c2410c`) used for the CTA button, and a highlighter stroke (`--highlight`) for marked headline words. Bricolage Grotesque for headings (sturdy and friendly), Instrument Sans kept for body. Syne, Martian Mono and Chakra Petch were removed. No dark mode: the cream look is the brand.
**Alternatives considered:** Keeping the dark theme with a warmer accent, which still read as a tech product. A soft serif display face, which read as boutique or editorial rather than straight-talking.
**Consequences:** The accent was darkened from a brighter orange so white button text passes WCAG AA (5.2:1) and accent-on-cream passes too. The favicon and apple icon use a lighter orange (`#E2611F`) on the ink tile, because `#c2410c` on near-black is too dim to read at 16px. Those two files plus the OG image hardcode hex values, since `ImageResponse` can't read CSS variables.

## 2026-10-24 — The hero phone is the one signature moment, pure CSS, plays once

**Context:** The memorable element has to show the whole pitch in one glance: enquiry → instant reply → booked job.
**Decision:** `components/phone.tsx` renders three lock-screen notifications that slide in at 400 / 1400 / 2400ms using a CSS keyframe with `animation-fill-mode: both`, then hold still. Only the "new enquiry" icon keeps a soft pulse. Server Component, no JS. Under `prefers-reduced-motion` all three are simply visible.
**Alternatives considered:** Looping the sequence, which turns a story into a distraction. A JS timeline, which adds a client component for decoration.
**Consequences:** The notification copy is illustrative (an invented customer, "Sarah"). Keep it obviously generic, never a real client.

## 2026-09-27 — Two renderings of the loop diagram instead of one responsive layout

> **Superseded 2026-10-24:** the loop diagram was removed from `main` in the local-business rebuild. It still exists on the `GTM` branch.

**Context:** The Radar Loop needed to read as a *loop* (the whole point of the positioning), but a ring with four cards around it is unusable at 375px — the cards would overlap the centre label.
**Decision:** `components/loop-diagram.tsx` renders the same `loop.steps` data twice: an absolutely-positioned ring with clockwise arrowheads (`hidden md:block`) and a vertical stack with a `↻` return pill (`md:hidden`). The `Step` card component is shared.
**Alternatives considered:** A single ring that shrinks — illegible on mobile. A CSS-only reflow — the ring depends on absolute positioning that has no sensible stacked equivalent.
**Consequences:** The four steps exist twice in the DOM. That is a few hundred bytes of duplicated static HTML, and the copy is still single-sourced from config, so it was judged an acceptable trade for legibility. If you edit one rendering, edit the other.

## 2026-09-27 — Pipe-delimited accent markers in headlines

**Context:** Headlines highlight some words (amber on the GTM site; a highlighter stroke since 2026-10-24). The original helper, `LastWord`, always highlighted the final word. The new headlines needed arbitrary spans — `"Your next customers are sending signals. |We catch them.|"` highlights a whole sentence, not one word.
**Decision:** Store accent spans in the config string with `|pipes|`. `<Accented>` in `components/section.tsx` splits on `|` and wraps odd-indexed segments in `text-accent`. `plain()` in `content/site.ts` strips markers for plain-text contexts.
**Alternatives considered:** Storing headlines as arrays of parts — more verbose and harder to read in a config file meant for a non-engineer to edit. Storing JSX in config — would couple content to React and break the OG image, which needs a plain string.
**Consequences:** A literal `|` can never appear in a headline. Anywhere a headline is used as plain text (OG image, `alt`, `<title>`) **must** call `plain()` or the pipes will be visible.

## 2026-09-27 — Founder photo as a CSS background-image over a placeholder frame

**Context:** The About section needs a photo, but `public/founder.jpg` does not exist yet and an `<img>` pointing at a missing file shows a broken-image icon.
**Decision:** A framed `<div>` containing the text "PHOTO", with `style={{ backgroundImage: url(about.photo) }}`. If the file is missing the background simply does not paint and the placeholder shows through; when the owner drops the file in, it appears with no code change.
**Alternatives considered:** `next/image` — would need the file to exist at build time and adds an optimisation pipeline for one static portrait. An `onError` handler — requires making the component a client component for a purely cosmetic fallback.
**Consequences:** No `next/image` optimisation for this one image. Whatever is dropped at `public/founder.jpg` should be pre-sized (roughly 320×320 covers the 160px frame at 2×).

## 2026-09-27 — `min-w-0` on grid children that contain nowrap text

**Context:** At a 375px viewport the page had `document.scrollWidth === 447` — a 72px horizontal overflow of the entire document. The cause was not obvious: CSS Grid's `auto` track sizing floors a track at its content's **min-content** width, and a `truncate` (i.e. `white-space: nowrap`) element inside the hero's terminal card set that floor to 427px. The whole page inherited it.
**Decision:** Put `min-w-0` on grid children whose subtree contains nowrap or truncating text, which removes the automatic minimum and lets the track shrink so `text-overflow: ellipsis` can do its job.
**Alternatives considered:** Removing `truncate` — then the command line wraps and the card grows unpredictably. `overflow-x: hidden` on `body` — hides the symptom, leaves the layout genuinely too wide.
**Consequences:** This is a recurring trap, not a one-off. Any new grid or flex child wrapping nowrap content needs the same treatment. **Verify with `document.documentElement.scrollWidth` vs `clientWidth` at 375px rather than by eye** — the overflow was invisible in a screenshot until measured.

## 2026-09-27 — Radar is pure CSS/SVG with no JavaScript

> **Superseded 2026-10-24:** the radar was removed from `main` in the local-business rebuild; it lives on the `GTM` branch. The principle (decorative motion in CSS, Server Components only) carries over to the hero phone.

**Context:** The radar is the centrepiece of the positioning and appears twice on the page (hero and final CTA), each with a rotating sweep and four independently fading blips.
**Decision:** SVG for the rings and crosshairs, a CSS `conic-gradient` with a `rotate` keyframe for the sweep, and `opacity` keyframes with staggered inline `animationDelay` for the blips. `components/radar.tsx` stays a Server Component. Everything is switched off in the `prefers-reduced-motion` block at the bottom of `app/globals.css`.
**Alternatives considered:** A canvas or requestAnimationFrame sweep — would force a client component, ship JS, and run on the main thread for a purely decorative effect.
**Consequences:** Animation timing is fixed at authoring time and the blips cannot react to anything. That is fine for decoration. The only client component in the project remains `components/reveal.tsx`.

## 2026-09-26 — All copy, prices and links live in `content/site.ts`

**Context:** The site is a marketing page whose text will change far more often than its layout, and the owner is the person who will change it.
**Decision:** One config module exporting a plain object per section. Components contain no user-facing strings. `[BRACKET]` values mark deliberate placeholders.
**Alternatives considered:** A CMS (Sanity/Contentful) — real infrastructure and cost for a one-page site with one editor. MDX — better for long-form prose than for structured section data like pricing tables and card grids.
**Consequences:** Copy changes need a redeploy, which is acceptable for a static marketing page. Every new component must take its text from config rather than inlining it — this is the convention most easily broken by an AI tool working quickly.
