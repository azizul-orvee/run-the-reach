/**
 * All copy, prices, links and metadata live here.
 * Edit this file to change the page — no component changes needed.
 * Anything in [BRACKETS] is a placeholder to replace.
 *
 * Headlines use `|pipes|` to mark the words rendered in the amber accent:
 *   "Your next customers are sending signals. |We catch them.|"
 */

/** Strips the accent markers — for plain-text contexts like the OG image. */
export const plain = (s: string) => s.replace(/\|/g, "");

export const site = {
  name: "Run the Reach",
  domain: "runthereach.com",
  /** Used for metadataBase / OpenGraph. Or set NEXT_PUBLIC_SITE_URL in Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://runthereach.com",
  founder: "[YOUR NAME]",
  email: "[hello@domain.com]",
  linkedin: "[LINKEDIN URL]",
  /** Where every CTA on the page points. */
  booking: "[BOOKING OR FORM LINK]",
  /** The CTA label, used everywhere. */
  cta: "Get 25 free leads",
  motto: "We scan for buyers. You take the meetings.",
  title: "Run the Reach — Signal-based outbound for seed-stage B2B SaaS",
  description:
    "We watch for buying signals — funding, hiring, new sales leaders, tech changes — and reach out the week they matter. Signal-based outbound for seed-stage B2B SaaS.",
  tagline: "Signal-based outbound for seed-stage B2B SaaS.",
};

export const nav = {
  links: [
    { label: "The Radar Loop", href: "#loop" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaShort: "25 leads",
};

export const hero = {
  eyebrow: "Signal-based outbound · seed-stage B2B SaaS",
  headline: "Your next customers are sending signals. |We catch them.|",
  sub: "Most outbound blasts a static list and hopes. We watch for the moments that create budget — a round closed, a sales hire, a new VP, a stack change — and reach out that week, while the need is still open.",
  secondaryCta: "See how it works",
  /** Blips that fade in and out on the hero radar. */
  blips: [
    { label: "Acme", meta: "raised $2M seed" },
    { label: "Nova", meta: "hiring first SDR" },
    { label: "Lumen", meta: "new VP Sales" },
    { label: "Stackr", meta: "switched to HubSpot" },
  ],
};

export const signals = {
  tag: "◉ SIGNALS",
  headline: "The signals we |scan for|.",
  sub: "Each one is a reason someone has to buy now rather than someday. We watch all of them, continuously.",
  cards: [
    {
      name: "Funding round",
      why: "New budget, and a board asking where the growth is going to come from.",
      mock: { title: "Acme raised $2M seed", meta: "Funding · 2m ago", tag: "NEW" },
    },
    {
      name: "Hiring sales roles",
      why: "A company building a sales team is building the stack that team will use.",
      mock: { title: "Nova posted: Account Executive", meta: "Hiring · 1d ago", tag: "OPEN" },
    },
    {
      name: "New sales leader",
      why: "New leaders rip out what they inherited and buy their own tools in the first 90 days.",
      mock: { title: "Lumen · new VP Sales", meta: "Job change · 4d ago", tag: "90D" },
    },
    {
      name: "Tech stack change",
      why: "If they just swapped a core GTM tool, the rest of the stack is in play too.",
      mock: { title: "Stackr switched to HubSpot", meta: "Stack · 6d ago", tag: "SWAP" },
    },
    {
      name: "Website visitor",
      why: "They already came looking. This is the warmest signal you will ever get.",
      mock: { title: "3 visits to /pricing", meta: "Intent · this week", tag: "WARM" },
    },
    {
      name: "Competitor churn",
      why: "Someone leaving a competitor is shopping right now, with a shortlist already open.",
      mock: { title: "Orbit dropped a competitor", meta: "Churn · 2w ago", tag: "SHOP" },
    },
  ],
};

export const loop = {
  tag: "◉ LOOP",
  headline: "The |Radar Loop|.",
  sub: "Four moves, running continuously. Every pass teaches the next one what to look for.",
  center: "The Radar Loop",
  steps: [
    { name: "Scan", body: "We watch your market for the signals that create budget." },
    { name: "Lock on", body: "Each account gets verified contacts and an AI research pass." },
    { name: "Reach out", body: "A personalised email that names the signal, from warmed inboxes." },
    { name: "Learn", body: "Replies feed back in. What lands gets scaled, what misses gets cut." },
  ],
  footnote: "Then straight back to Scan. The list is never finished.",
};

export const trace = {
  tag: "◉ TRACE",
  headline: "One signal, |start to finish|.",
  sub: "An illustration of the flow, using an example account. Not a real client.",
  detected: {
    label: "Signal detected",
    title: "Acme raised $2M seed",
    meta: "Funding · detected Tuesday 09:14",
  },
  research: {
    label: "Research pass",
    bullets: [
      "Series unknown → seed, led by [Investor]",
      "Headcount 11 → 14 in the last 60 days",
      "Two open sales roles, none in ops",
      "No dedicated RevOps or CRM admin yet",
    ],
  },
  email: {
    label: "The email it produced",
    from: "you@yourdomain.com",
    to: "dana@acme.com",
    subject: "your first two sales hires",
    /** Each line is a row of parts. `hl: true` renders in the accent colour. */
    lines: [
      [{ text: "Hi Dana," }],
      [
        { text: "Congrats on the " },
        { text: "$2M seed", hl: true },
        { text: " — saw it land Tuesday." },
      ],
      [
        { text: "Noticed you have " },
        { text: "two open sales roles", hl: true },
        { text: " and nobody on ops yet. That order usually means the first reps spend their first month building lists instead of selling." },
      ],
      [{ text: "That is the part we run for companies at your stage. Worth fifteen minutes?" }],
      [{ text: "— [YOUR NAME]" }],
    ],
    note: "Amber is the part that came from the signal, not a template.",
  },
};

export const about = {
  tag: "◉ OPERATOR",
  headline: "Built by an |engineer|.",
  /** Drop a photo at public/founder.jpg. Until then a placeholder frame shows. */
  photo: "/founder.jpg",
  name: "[YOUR NAME]",
  role: "Founder & GTM Engineer",
  lines: [
    "I spent years writing JavaScript before I ever wrote a cold email. Then I watched good companies lose deals to worse ones purely because nobody was watching for the right moment.",
    "So I build outbound the way I built software: a system you can inspect, measure and fix. Not a black box, and not a person you hope stays motivated.",
    "You work with me directly. There is no account manager layer, and I will tell you plainly when your offer is the problem rather than your targeting.",
  ],
};

export const pricing = {
  tag: "◉ PRICING",
  headline: "Two ways to |run it|.",
  plans: [
    {
      name: "First Sweep",
      price: "$[PRICE]",
      unit: "one-time · 30 days",
      body: "One full pass of the loop, set up in your accounts. The fastest way to see whether signal-based outbound works for your market.",
      features: [
        "ICP and signal definition",
        "Domains, inboxes and warmup",
        "First signal list, enriched and verified",
        "First campaign written and launched",
        "A readout of what the replies told us",
      ],
      highlight: false,
    },
    {
      name: "Always On",
      price: "$[PRICE]",
      unit: "/month · 3-month minimum",
      body: "The radar stays on. New signals every week, new sequences every week, and a loop that keeps tightening.",
      features: [
        "Everything in First Sweep",
        "Continuous signal scanning",
        "Fresh lists and sequences weekly",
        "Reply handling and routing",
        "Weekly readout of what is working",
      ],
      highlight: true,
    },
  ],
  note: "Everything runs in your accounts. You own it all.",
};

export const faq = {
  tag: "◉ FAQ",
  headline: "Straight |answers|.",
  items: [
    {
      q: "How is this different from buying a lead list?",
      a: "A list tells you who exists. A signal tells you who has a reason to move this month. We are not selling you 10,000 rows — we are watching a defined market and surfacing the handful of accounts where something just changed, then writing to those.",
    },
    {
      q: "Do I need Clay or other tools?",
      a: "No. You need a domain budget and an inbox provider. Everything else I set up in accounts that belong to you, and I will tell you what each one costs before we buy it. There is no markup on tooling.",
    },
    {
      q: "How long until emails go out?",
      a: "Infrastructure is live in week one. Then domains and inboxes need two to three weeks of warmup before they send. Skipping warmup is how you burn a domain permanently, so I do not skip it. Realistically: first sends in week three or four.",
    },
    {
      q: "Will this hurt my main domain?",
      a: "No, because we never send from it. Outbound goes out on separate domains bought for the purpose, with their own authentication. If one gets burned, your main domain and your team's email are untouched.",
    },
    {
      q: "What do you need from me?",
      a: "A clear description of who you sell to and what you charge, one hour up front to pull it out of your head, and someone who can answer a reply within a day. That is genuinely it.",
    },
  ],
};

export const finalCta = {
  headline: "Want to see what's |on your radar|?",
  note: "Tell me your ICP, I'll send 25 signal-based leads within 48 hours. No call needed.",
};

export const footer = {
  linkedinLabel: "LinkedIn",
};
