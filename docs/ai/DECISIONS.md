# Decisions

Why things are the way they are. Newest first.

## 2026-09-27 — Two renderings of the loop diagram instead of one responsive layout

**Context:** The Radar Loop needed to read as a *loop* (the whole point of the positioning), but a ring with four cards around it is unusable at 375px — the cards would overlap the centre label.
**Decision:** `components/loop-diagram.tsx` renders the same `loop.steps` data twice: an absolutely-positioned ring with clockwise arrowheads (`hidden md:block`) and a vertical stack with a `↻` return pill (`md:hidden`). The `Step` card component is shared.
**Alternatives considered:** A single ring that shrinks — illegible on mobile. A CSS-only reflow — the ring depends on absolute positioning that has no sensible stacked equivalent.
**Consequences:** The four steps exist twice in the DOM. That is a few hundred bytes of duplicated static HTML, and the copy is still single-sourced from config, so it was judged an acceptable trade for legibility. If you edit one rendering, edit the other.

## 2026-09-27 — Pipe-delimited accent markers in headlines

**Context:** Headlines highlight some words in amber. The original helper, `LastWord`, always highlighted the final word. The new headlines needed arbitrary spans — `"Your next customers are sending signals. |We catch them.|"` highlights a whole sentence, not one word.
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

**Context:** The radar is the centrepiece of the positioning and appears twice on the page (hero and final CTA), each with a rotating sweep and four independently fading blips.
**Decision:** SVG for the rings and crosshairs, a CSS `conic-gradient` with a `rotate` keyframe for the sweep, and `opacity` keyframes with staggered inline `animationDelay` for the blips. `components/radar.tsx` stays a Server Component. Everything is switched off in the `prefers-reduced-motion` block at the bottom of `app/globals.css`.
**Alternatives considered:** A canvas or requestAnimationFrame sweep — would force a client component, ship JS, and run on the main thread for a purely decorative effect.
**Consequences:** Animation timing is fixed at authoring time and the blips cannot react to anything. That is fine for decoration. The only client component in the project remains `components/reveal.tsx`.

## 2026-09-26 — All copy, prices and links live in `content/site.ts`

**Context:** The site is a marketing page whose text will change far more often than its layout, and the owner is the person who will change it.
**Decision:** One config module exporting a plain object per section. Components contain no user-facing strings. `[BRACKET]` values mark deliberate placeholders.
**Alternatives considered:** A CMS (Sanity/Contentful) — real infrastructure and cost for a one-page site with one editor. MDX — better for long-form prose than for structured section data like pricing tables and card grids.
**Consequences:** Copy changes need a redeploy, which is acceptable for a static marketing page. Every new component must take its text from config rather than inlining it — this is the convention most easily broken by an AI tool working quickly.
