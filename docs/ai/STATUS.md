# Status — last updated 2026-10-24

## Current state

**`main` is the new agency site, committed and pushed on 2026-10-24.** Run the Reach has repositioned from signal-based outbound for SaaS founders to **AI-first customer acquisition for local businesses**: Google Ads lead generation (pay-per-lead or managed), plus AI follow-up and custom software that turn leads into booked jobs. The owner paused the GTM/outbound offer.

- **The old GTM site is preserved on the `GTM` branch** (at `d1957e6`, also on GitHub as `origin/GTM`). Nothing there changes.
- **The new site is on `main` and `origin/main`**, pushed at the owner's request. It typechecks, builds (`✓ Compiled successfully`, 8 static routes) and every page was checked in the browser at desktop width and at 375px with no horizontal overflow.
- **Vercel deploys `main` to production** (`https://run-the-reach.vercel.app`). The moment this work is pushed to `main`, the live site switches from the GTM site to the new one, `[BRACKET]` placeholders included. How to check deploy status: see PROJECT.md › Deployment.

## ✅ Recently done

- Made AI-first visible across the homepage, with a new `#ai` section; added `/about`, `/terms`, `/privacy`; removed tyre fitters (2026-10-24)
- Rebuilt the whole page for local businesses: new copy, new sections, new warm visual theme (2026-10-24, see CHANGELOG)
- Created branch `GTM` from `main` (both at `d1957e6`) and pushed it to GitHub, 2026-10-24
- Confirmed Vercel auto-deploys `main`: `/deploy-test.txt` was served from `run-the-reach.vercel.app` after a push, 2026-10-24

## 🚧 In progress

Nothing mid-edit. The site is live with `[BRACKET]` placeholders still in it (booking link, LinkedIn, founder name). Filling those is the next step.

## ⏭️ Next up

1. **Owner reviews the copy now that it's live**, especially the lines that make commitments (see Watch out).
2. **Have the legal pages reviewed** (`content/legal.ts`). See Watch out for the commitments in them. By the owner's choice they name the business only as **Run the Reach**, with no legal name, company number, address, ICO registration number or governing-law clause, and the Privacy policy has no "Your rights" or "International transfers" section. Add any of these back if the owner later wants them.
3. **Fill the placeholders in `content/site.ts`.** These are what block launch:
   - `site.booking` — `[BOOKING LINK]`, where every "Book a call" button points (Calendly, Cal.com, etc.)
   - `site.linkedin` (`site.email` is set: `contact@runthereach.com`)
   - `about.name` — `[YOUR NAME]`
4. **Add `public/founder.jpg`.** The About section shows a "Photo" placeholder frame until it exists.
5. **Delete `public/deploy-test.txt`.** The deploy test passed and the probe is no longer needed.
6. **Decide on the real domain.** The site answers at `run-the-reach.vercel.app`; `runthereach.com` is referenced in config but not attached.
7. **US launch prep** (later): copy is UK English (centre, enquiry), and the legal pages are written for UK law and need a US review. Spelling will need a pass when the US market opens. No country or city is named anywhere, so nothing else should need to change.
8. **Service terms**: the site has website terms of use only. Client contract terms (fees, lead credits, notice) need drafting from the owner's real commercial terms.
9. Consider analytics before launch. If analytics or any cookie is added, the Privacy policy's "this website does not set cookies" line must change., to measure "Book a call" clicks.

## 🐛 Known issues

- `[BRACKET]` placeholders are still in `content/site.ts` (booking link, LinkedIn, founder name), so every "Book a call" button currently links nowhere.
- No real founder photo; the About frame shows a placeholder.
- `public/deploy-test.txt` is a leftover deploy probe and is publicly served.
- No analytics.

## ⚠️ Watch out

- **The legal pages deliberately omit company identifiers** (owner's decision, 2026-10-24), and the Terms have no governing-law clause. A lawyer reviewing them should know this was intentional.
- **The Terms and Privacy pages are AI drafts, not legal advice.** The Privacy policy commits the business to things it must make true: AI model providers that don't train on conversation data; retention of 24 months (enquiries, prospects), 6 years (client records); one business per enquiry and no sales to list brokers. It also discloses that businesses may pay for introductions. If the business isn't established in the UK, UK GDPR may require a UK representative.
- **The Privacy policy deliberately has no "Your rights" or "International transfers" section** (owner's decision, 2026-10-24). UK GDPR (Art. 13) normally expects both: telling people their rights, and how data sent outside the UK (e.g. to US providers) is protected. Raise this with whoever reviews the policy; the removed text is in git history and the 2026-10-24 CHANGELOG entries.
- **The AI capability list** (`ai.features`: AI receptionist answering calls any time of day, instant replies, missed-call text-back, quote follow-up, smart booking, AI-tuned Google Ads) describes what the owner offers. Confirm each one is something they can actually deliver.
- **These lines are commitments, not filler, and were drafted by AI from the owner's answers. Confirm them before launch:**
  - "One business per trade, per area" (hero, Why us, FAQ). The owner said "I always work with one person per area". The copy reads that as *one per trade per area*, so a roofer and a locksmith in the same town are not a conflict. If the owner meant one client per area in total, change all three places.
  - "Every lead is exclusive to you" (hero, services, Why us, FAQ). Owner confirmed leads are exclusive.
  - "Seven figures of Google Ads spend managed" (hero, Why us, About). Owner volunteered it ("over a million dollars in the past three years"). It is the only number on the site; the owner said no results figures.
  - The About section's three lines are first-person biography assembled from what the owner said: builds software, runs Google Ads, three years with local businesses. Nothing beyond that was invented, but the owner should check the wording.
  - FAQ "What happens on the call?" promises "No hard sell".
- **The owner chose not to feature niches**, then left it to the AI. The site shows trades the owner has worked with (roofers, boiler/HVAC engineers, locksmiths, auto locksmiths, car key replacement, recovery/towing; tyre fitters removed at the owner's request) as *examples* in the "Who we help" section, framed as open to any local service. There is no niche-specific page or positioning. See DECISIONS.
- **No prices and no results figures anywhere.** This is a deliberate owner decision: the site's only job is to get a call booked. Don't add pricing.
- **`next build` and `next dev` cannot run inside the Claude Code Bash sandbox.** Turbopack's PostCSS loader spawns a worker that binds a port; the sandbox refuses it with `Operation not permitted (os error 1)`. The failure also poisons `.next`, so later attempts keep failing until `rm -rf .next`. Run with `dangerouslyDisableSandbox: true`, or set `sandbox.network.allowLocalBinding: true`.
- **`npm install` fails in the sandbox** because `~/.npm` is not writable from it. Use `npm install --cache "$TMPDIR/npm-cache"`.
- **Port 3000 is shared with the owner's other project, `techtron-auto`.** Its dev server is launched by the Claude app (`npx next dev -p 3000`). Killing only the `next-server` worker does nothing: its `next dev` parent respawns it straight away. Stop the `next dev` parent instead, and **ask the owner first**, since it's their other project.
- **When the browser pane is hidden, smooth scrolling never finishes.** The page runs as a background tab and `scroll-behavior: smooth` animations don't advance, so `/#faq` loads and `location.hash` changes appear to "not scroll". Set `document.documentElement.style.scrollBehavior = 'auto'` in the console to test anchors. This is a test-environment artefact, not a site bug (verified 2026-10-24).
- **The browser pane can show a stale frame.** A screenshot of the hero once showed an empty phone after the notifications had already finished animating. Check `document.getAnimations()` or take a second screenshot before "fixing" anything.
- **`html` has `scroll-behavior: smooth`**, so `window.scrollTo(y)` animates. When scripting scroll-then-screenshot, pass `behavior: 'instant'`.
- **Piping a build through `| tail` hides its exit code.** Read the output text for `✓ Compiled successfully`.
- **`npm run lint` is `tsc --noEmit`, not ESLint.** There is no linter in this project.
- **Grid children containing nowrap or truncated text need `min-w-0`.** See DECISIONS 2026-09-27. The hero phone's notification labels use `truncate`.
- **The visual theme is fixed by the owner**: warm cream, near-black ink, burnt-orange accent, Bricolage Grotesque + Instrument Sans. Don't change colours or typefaces without asking.
- Nothing on the page is a real result, review or client logo, and it should stay that way until real ones exist. The hero phone shows an illustrative enquiry ("Sarah", a broken boiler), not a real customer.
