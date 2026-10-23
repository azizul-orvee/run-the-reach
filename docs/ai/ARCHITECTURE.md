# Architecture

A small static marketing site: a long homepage plus About, Terms and Privacy pages. No database, no API routes, no auth, no server-side data fetching. The interesting design decision is the **content/presentation split**: every word and link lives in `content/`, and the components in `components/` are pure presentation driven by that config.

> The pre-2026-10-24 version of this site (signal-based outbound for SaaS, with the radar and Radar Loop) lives on the `GTM` branch. This document describes `main`.

## Folder map

```
app/
├── layout.tsx            ← root layout: metadata + title template, fonts, Nav/<main>/Footer shell,
│                            noscript reveal fallback
├── page.tsx              ← homepage: composes the 10 sections in order
├── about/page.tsx        ← /about
├── privacy/page.tsx      ← /privacy (renders content/legal.ts › privacy)
├── terms/page.tsx        ← /terms (renders content/legal.ts › terms)
├── globals.css           ← design tokens, paper grain, highlighter, animations, reduced-motion
├── icon.tsx              ← generated 64×64 favicon (next/og)
├── apple-icon.tsx        ← generated 180×180 touch icon (next/og)
└── opengraph-image.tsx   ← generated 1200×630 OG card (next/og)

components/
├── nav.tsx               ← sticky header: logo, anchor links (lg+), CTA
├── logo.tsx              ← LogoMark (SVG) + Logo (mark + wordmark)
├── sections.tsx          ← the 10 homepage sections, plus Points (tick list) and
│                            TradeList (also used on /about)
├── section.tsx           ← shared primitives: Section, SectionHeader, SectionTag, PageHeader,
│                            Accented, CtaButton, PrimaryCta
├── legal-page.tsx        ← renders a LegalDoc: contents list + prose
├── phone.tsx             ← the hero phone: three notifications that land in order
├── icons.tsx             ← inline line icons (Lucide-style), typed by name
├── reveal.tsx            ← the only "use client" file: fade-in on scroll
└── footer.tsx            ← logo, tagline, email, LinkedIn, copyright

content/
├── site.ts               ← homepage + shared copy, links, metadata
├── pages.ts              ← /about copy
└── legal.ts              ← /terms and /privacy text (drafts) + LegalDoc type

lib/
└── metadata.ts           ← pageMetadata(): per-page title, canonical, OpenGraph, share image

public/
├── deploy-test.txt       ← leftover deploy probe, safe to delete
├── logo-mark.svg
└── logo-tile.svg
```

## Pages / routes

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Homepage: anchor-linked sections |
| `/about` | `app/about/page.tsx` | About us: story, what AI-first means, principles, trades |
| `/terms` | `app/terms/page.tsx` | Website terms of use |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy |
| `/icon` | `app/icon.tsx` | Favicon, generated at build |
| `/apple-icon` | `app/apple-icon.tsx` | Apple touch icon, generated at build |
| `/opengraph-image` | `app/opengraph-image.tsx` | Social card, generated at build |
| `/_not-found` | (Next default) | 404 |

All eight prerender as static content. Each inner page sets its metadata with `pageMetadata()` (see DECISIONS).

## Page composition

`app/page.tsx` renders, in order. The order follows a problem → solution → proof → action story.

| # | Component | Anchor | Content source | Background | Notes |
|---|---|---|---|---|---|
| 1 | `Hero` | `#top` | `hero` | paper | Headline, CTA, trust ticks, and the `Phone` |
| 2 | `Problem` | `#problem` | `problem` | paper-2 | Four "leaks" between the ad and the invoice |
| 3 | `Ai` | `#ai` | `ai` | paper | Six AI capabilities in ink-chip cards + a custom-software note. The section that carries "AI-first" |
| 3b | `Services` | `#services` | `services` | paper-2 | Three ways to work; "The full AI system" is the dark featured card. No prices |
| 4 | `How` | `#how` | `how` | deep | Four numbered steps; dashed connector on lg+, stacked cards below |
| 5 | `Trades` | `#trades` | `trades` | paper-2 | Example trades as chips, plus an open-ended "and other local services" chip |
| 6 | `Promises` | `#why` | `promises` | paper | Header + CTA sticky on the left (lg+), four promise cards on the right |
| 7 | `About` | `#about` | `about` | paper-2 | Founder photo frame + first-person bio |
| 8 | `Faq` | `#faq` | `faq` | paper | Native `<details>` accordion |
| 9 | `FinalCta` | — | `finalCta` | deep card | Closing CTA in an inset dark card |

`Nav`, `<main>` and `Footer` come from `app/layout.tsx`, so pages render bare content. Nav links are `/#section` so they work from inner pages. Every CTA on the site is `PrimaryCta`, which reads `site.cta` and `site.booking`. Nothing else is clickable toward conversion.

## Data models

None. The only "schema" is the shape of the exports in `content/site.ts`, inferred by TypeScript rather than declared. Shapes worth knowing:

- **Accent markers.** Headline strings use `|pipes|` around the words drawn with the highlighter: `"More booked jobs. |Not just more clicks.|"` The `Accented` component in `components/section.tsx` splits on `|` and wraps odd-indexed segments in `.mark`. `plain()` strips markers for plain-text contexts (the OG image).
- **Legal documents.** `content/legal.ts` exports `LegalDoc`: `{ meta, tag, title, updated, intro: string[], sections: { heading, body: (string | { list: string[] })[] }[] }`. A string block is a paragraph, `{ list }` a bullet list. Section anchors are slugified headings.
- **Icon names.** `problem.leaks[].icon`, `ai.features[].icon`, `promises.items[].icon` and `aboutPage.aiFirst.items[].icon` are written as `"missed" as const` etc. so they type-check against `IconName` in `components/icons.tsx`. A typo is a compile error.
- **Phone notifications.** `hero.phone.notifications[]` has `kind: "lead" | "reply" | "booked"`, which `components/phone.tsx` maps to an icon and chip colour (accent / ink / green).

## Data flow

There isn't a request cycle to speak of. The flow is build-time only:

```
content/site.ts  →  components (server-rendered)  →  static HTML at build time
                 ↘  plain() → app/opengraph-image.tsx → PNG at build time
```

The only runtime behaviour in the browser:

1. `components/reveal.tsx` mounts an IntersectionObserver and adds `.is-visible` to fade sections in on scroll. It disconnects after firing once. A `<noscript>` block in `app/layout.tsx` forces everything visible when JS is off.
2. CSS animations in the hero phone. No JS is involved.

## Styling system

Tailwind v4, configured entirely in CSS. `app/globals.css` defines raw custom properties on `:root`, then re-exposes them to Tailwind through `@theme inline`:

| Token | Value | Tailwind class | Used for |
|---|---|---|---|
| `--paper` | `#f7f1e6` | `bg-paper` | Page background (warm cream) |
| `--paper-2` | `#efe5d3` | `bg-paper-2` | Alternating section background |
| `--slip` | `#fffbf4` | `bg-slip` | Cards |
| `--ink` | `#1f1a15` | `text-ink` | Text |
| `--muted` | `#675d53` | `text-muted` | Secondary text (5.1:1 on paper-2) |
| `--accent` | `#c2410c` | `bg-accent` | **The CTA button only**, plus small rules and dots |
| `--on-accent` | `#ffffff` | `text-on-accent` | Text on the accent (5.2:1) |
| `--highlight` | `#f4c8a2` | `bg-highlight` | Highlighter stroke, icon circles, step numbers |
| `--good` | `#2e6b4c` | `text-good` | Ticks and the "booked" state |
| `--deep` | `#221c17` | `bg-deep` | Dark sections, featured card, footer |
| `--on-deep` | `#f7f1e6` | `text-on-deep` | Text on deep |

Fonts map to `--font-display` (Bricolage Grotesque, headings, via `.font-display`) and `--font-sans` (Instrument Sans, body, 17px base). Both are self-hosted through `@fontsource-variable`.

**The theme and this font pair are fixed by the owner.** Don't introduce new colours or typefaces.

**Contexts:** add the `on-deep` class to a dark container and `.mark` switches from a highlighter stroke to highlight-coloured text, which reads better on dark.

## Animations

All defined in `app/globals.css`, all CSS-only, all disabled under `prefers-reduced-motion` in the media block at the bottom of the file.

| Class | Keyframes | What it does |
|---|---|---|
| `.notif` | `notif-in` (600ms, once) | Hero phone notifications slide up into place; staggered 400 / 1400 / 2400ms by inline `animationDelay`. They then hold still |
| `.ping` | `ping` (2.4s, loops) | Soft pulse on the "new enquiry" icon, the only continuous motion on the page |
| `.reveal` | (transition, 700ms) | Scroll fade-in, driven by `reveal.tsx` |
| `.btn-press` | (transition, 160ms) | Buttons scale to 0.97 when pressed |
| `.faq-icon` | (transition) | FAQ "+" rotates to "×" when opened |

`body::before` paints a faint fixed paper grain (an inline SVG `feTurbulence` data URI).

## Key modules

- **`lib/metadata.ts`** — `pageMetadata()`. Use it for every new page. It exists because Next merges metadata shallowly; see DECISIONS.
- **`components/legal-page.tsx`** — `LegalPage({ doc, related })`. Sticky contents list on lg+, prose capped at 68ch, "See also" link to the other legal page.
- **`content/site.ts`** — the file to edit for any homepage copy or link change. Includes `plain()` for stripping accent markers. `[BRACKET]` values are deliberate placeholders awaiting real data.
- **`components/section.tsx`** — shared primitives. `Section` sets the standard `py-16 sm:py-24` rhythm inside a `max-w-6xl` container; `SectionHeader` renders the tag + accented `<h2>`; `PrimaryCta` renders the one site-wide CTA so the label and destination stay consistent everywhere. `CtaButton` has `primary`, `ghost` and `light` variants.
- **`components/phone.tsx`** — a Server Component. The phone is `role="img"` with an `aria-label` summarising the three notifications, so screen readers get one sentence instead of the mock UI.
- **`components/icons.tsx`** — hand-written 24px line icons in a `paths` map. Add an icon by adding a key; `IconName` updates automatically.
- **`components/reveal.tsx`** — the only client component in the project.

## Integrations

| Service | Where in code | Notes |
|---|---|---|
| — | — | None. No analytics, no CRM, no forms, no third-party scripts. |

The CTA is a plain `<a href>` to an external booking link. Nothing is submitted from this site.
