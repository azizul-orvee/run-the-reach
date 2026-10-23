# Status — last updated 2026-10-24

## Current state

The site is **structurally and visually complete** but **not launchable** — it is full of `[BRACKET]` placeholders (CTA link, prices, founder name, email, LinkedIn) and has never been deployed. The production build passes and the page has been verified at 1280px and 375px.

All code is committed on `main`, including the `docs/` folder and the `AGENTS.md` / `CLAUDE.md` edits, which were committed on 2026-10-24 together with `public/deploy-test.txt` — a disposable static file added to prove that pushes to `azizul-orvee/run-the-reach` reach Vercel. Nothing has been pushed by an AI tool.

## ✅ Recently done

- Repositioned the whole site around a RADAR / signal-scanning concept — new positioning, new section set, new system name ("The Radar Loop")
- Built the animated radar: concentric rings, 12s conic sweep, fading signal blips (`components/radar.tsx`, CSS in `app/globals.css`)
- New sections: Signals we track, The Radar Loop, One signal start to finish, About, 2-tier Pricing, new FAQ
- Removed the patterns that were too close to another agency's site: terminal card, numbered section labels, L1–L4 framework, tool marquee, "The math", 3-tier pricing, old CTA wording
- Earlier same-day pass: hero two-column layout, ~30% type-scale reduction, tightened vertical rhythm, fixed a real 375px horizontal overflow
- Production build verified: `✓ Compiled successfully`, 5 static routes, `tsc --noEmit` clean

## 🚧 In progress

Nothing mid-edit. The working tree is complete and self-consistent.

## ⏭️ Next up

1. **Push and check the deploy test** — open `/deploy-test.txt` on the Vercel domain. If it 404s, the GitHub integration is not wired up; there is no `.vercel/` directory in this checkout, so the CLI has never linked it. Delete `public/deploy-test.txt` once confirmed.
2. **Fill the placeholders in `content/site.ts`** — this is what blocks launch:
   - `site.booking` — `[BOOKING OR FORM LINK]`, the destination of every CTA on the page
   - `site.founder`, `site.email`, `site.linkedin`
   - `pricing.plans[].price` — two `$[PRICE]` values
   - `[YOUR NAME]` also appears in `about.name` and in the example email signature (`trace.email.lines`)
3. **Add `public/founder.jpg`** — the About section shows a "PHOTO" placeholder frame until it exists.
4. **Link and deploy to Vercel** — `npm i -g vercel`, then `vercel link`. Confirm the domain.
5. Consider whether analytics should exist before launch.

## 🐛 Known issues

- `public/deploy-test.txt` is a temporary deploy probe and should be deleted once the deploy is confirmed.
- No real founder photo; the About frame shows a placeholder.
- No analytics, so there is no way to measure whether the CTA converts.
- The `◉` glyph in section tags is not in Martian Mono and falls back to another font. It renders as a small dot, which reads fine, but it is a fallback rather than a designed glyph.

## ⚠️ Watch out

- **`next build` and `next dev` cannot run inside the Claude Code Bash sandbox.** Turbopack's PostCSS loader spawns a worker that binds a port; the sandbox refuses it with `Operation not permitted (os error 1)`. The failure also poisons `.next`, so subsequent attempts keep failing until `rm -rf .next`. Run with `dangerouslyDisableSandbox: true`, or set `sandbox.network.allowLocalBinding: true`.
- **Piping a build through `| tail` hides its exit code.** A failed build reported exit 0 twice during the 2026-09-27 session. Read the output text.
- **`npm run lint` is `tsc --noEmit`, not ESLint.** There is no linter in this project.
- **Grid children containing nowrap text need `min-w-0`.** This caused a page-wide 447px overflow at a 375px viewport. See DECISIONS 2026-09-27.
- **The visual theme is fixed** — dark background, amber accent, Syne/Instrument Sans/Martian Mono/Chakra Petch. Do not change colours or typography.
- **The FAQ and About copy make operational commitments** (3–4 weeks to first send, separate sending domains, no tool markup, direct founder access). These were AI-drafted and have **not been confirmed by the owner**. Verify before launch.
- Nothing on the page is a real result, logo or testimonial, and it should stay that way until there are real ones.
