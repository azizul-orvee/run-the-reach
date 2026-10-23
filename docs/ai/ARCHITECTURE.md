# Architecture

A single static marketing page. No database, no API routes, no auth, no server-side data fetching. The interesting design decision is the **content/presentation split**: every word, price and link lives in `content/site.ts`, and the components in `components/` are pure presentation driven by that config.

## Folder map

```
app/
├── layout.tsx            ← root layout, metadata, font imports, noscript reveal fallback
├── page.tsx              ← composes the 8 sections in order
├── globals.css           ← design tokens, grid background, radar animations, reduced-motion
├── icon.tsx              ← generated 64×64 favicon (next/og)
├── apple-icon.tsx        ← generated 180×180 touch icon (next/og)
└── opengraph-image.tsx   ← generated 1200×630 OG card (next/og)

components/
├── nav.tsx               ← sticky header: logo, anchor links, CTA
├── logo.tsx              ← LogoMark (SVG) + Logo (mark + wordmark)
├── sections.tsx          ← all 8 page sections
├── section.tsx           ← shared primitives: Section, SectionHeader, SectionTag,
│                            Accented, CtaButton, PrimaryCta
├── radar.tsx             ← RadarField (rings + sweep) and RadarBlips
├── loop-diagram.tsx      ← the Radar Loop, ring on md+ / stack on mobile
├── reveal.tsx            ← the only "use client" file: fade-in on scroll
└── footer.tsx            ← name, motto, email, LinkedIn, copyright

content/
└── site.ts               ← ALL copy, prices, links, metadata

public/
├── logo-mark.svg
└── logo-tile.svg
```

## Pages / routes

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | The entire site — one page, anchor-linked sections |
| `/icon` | `app/icon.tsx` | Favicon, generated at build |
| `/apple-icon` | `app/apple-icon.tsx` | Apple touch icon, generated at build |
| `/opengraph-image` | `app/opengraph-image.tsx` | Social card, generated at build |
| `/_not-found` | (Next default) | 404 |

All five prerender as static content.

## Page composition

`app/page.tsx` renders, in order:

| # | Component | Anchor | Content source | Notes |
|---|---|---|---|---|
| 1 | `Hero` | `#top` | `hero` | Radar centrepiece, headline, CTA, blips |
| 2 | `Signals` | `#signals` | `signals` | 6 cards, each with a mini notification mock |
| 3 | `Loop` | `#loop` | `loop` | The Radar Loop diagram |
| 4 | `Trace` | `#trace` | `trace` | One lead end-to-end: signal → research → email |
| 5 | `About` | `#about` | `about` | Founder photo frame + bio |
| 6 | `Pricing` | `#pricing` | `pricing` | Two plans side by side |
| 7 | `Faq` | `#faq` | `faq` | Native `<details>` accordion |
| 8 | `FinalCta` | — | `finalCta` | Closing CTA over a second radar field |

`Nav` and `Footer` wrap the `<main>`.

## Data models

None. The only "schema" is the shape of the exports in `content/site.ts`, inferred by TypeScript rather than declared. Two shapes are worth knowing:

- **Accent markers.** Headline strings use `|pipes|` around the words that render amber: `"The signals we |scan for|."` The `Accented` component in `components/section.tsx` splits on `|` and wraps odd-indexed segments in `text-accent`. `plain()` strips markers for plain-text contexts (the OG image).
- **Email lines.** `trace.email.lines` is an array of arrays of `{ text: string; hl?: boolean }`. Each inner array is a paragraph; `hl: true` parts render in an amber `<mark>` to show which phrases came from the signal rather than a template.

## Data flow

There isn't a request cycle to speak of. The flow is build-time only:

```
content/site.ts  →  components (server-rendered)  →  static HTML at build time
                 ↘  plain() → app/opengraph-image.tsx → PNG at build time
```

The only runtime behaviour in the browser:

1. `components/reveal.tsx` mounts an IntersectionObserver and adds `.is-visible` to fade sections in on scroll. It disconnects after firing once. A `<noscript>` block in `app/layout.tsx` forces everything visible when JS is off.
2. CSS animations for the radar sweep and blips — no JS involved.

## Styling system

Tailwind v4, configured entirely in CSS. `app/globals.css` defines raw custom properties on `:root`, then re-exposes them to Tailwind through `@theme inline`:

| Token | Value | Tailwind class |
|---|---|---|
| `--paper` | `#0b0b0d` | `bg-paper` |
| `--paper-2` | `#101013` | `bg-paper-2` (alternating section bg) |
| `--slip` | `#151519` | `bg-slip` (cards) |
| `--ink` | `#f1eee7` | `text-ink` |
| `--muted` | `#8f8d87` | `text-muted` |
| `--accent` | `#ffb31a` | `text-accent` / `bg-accent` |
| `--deep` | `#060607` | `bg-deep` (footer) |

Fonts map to `--font-display` (Syne), `--font-sans` (Instrument Sans), `--font-nav` (Chakra Petch), `--font-mono` (Martian Mono).

**The dark + amber theme and this font stack are fixed by the owner.** Do not introduce new colours or typefaces.

## Animations

All defined in `app/globals.css`, all CSS-only, all disabled under `prefers-reduced-motion` in the media block at the bottom of the file.

| Class | Keyframes | What it does |
|---|---|---|
| `.radar-sweep` | `radar-spin` (12s linear) | Conic-gradient wedge rotating over the rings |
| `.blip` | `blip-fade` (11s) | Fades a signal blip in and out; staggered by inline `animationDelay` |
| `.blip-ring` | `blip-ping` (11s) | Expanding ring behind each blip dot |
| `.reveal` | (transition) | Scroll fade-in, driven by `reveal.tsx` |

`body::before` paints the fixed 56px grid background, masked to fade out down the page.

## Key modules

- **`content/site.ts`** — the file to edit for any copy, price or link change. Includes `plain()` for stripping accent markers. `[BRACKET]` values are deliberate placeholders awaiting real data.
- **`components/section.tsx`** — shared primitives. `Section` sets the standard `py-16 sm:py-24` rhythm and top border; `SectionHeader` renders the radar tag + accented `<h2>`; `PrimaryCta` renders the one site-wide CTA so the label and destination stay consistent everywhere.
- **`components/radar.tsx`** — `RadarField` draws four concentric rings plus crosshairs in a `-500 -500 1000 1000` viewBox, masked with a radial gradient and overlaid with the rotating sweep. It is absolutely positioned and centred on its parent, which must be `relative overflow-hidden`. `RadarBlips` takes `variant="around"` (absolute, `lg` and up) or `variant="grid"` (2×2 chips, below `lg`) — the same data rendered two ways because absolute blips collide with the headline on narrow screens.
- **`components/loop-diagram.tsx`** — renders the loop twice: a ring with four cards at 12/3/6/9 o'clock and clockwise arrowheads on `md+`, and a vertical stack with a `↻` return pill below it on mobile. Arrow coordinates are precomputed in the `ARROWS` const.
- **`components/reveal.tsx`** — the only client component in the project.

## Integrations

| Service | Where in code | Notes |
|---|---|---|
| — | — | None. No analytics, no CRM, no forms, no third-party scripts. |

The CTA is a plain `<a href>` to an external booking/form link. Nothing is submitted from this site.
