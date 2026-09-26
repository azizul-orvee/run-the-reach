/**
 * All copy, prices, links and metadata live here.
 * Edit this file to change the page — no component changes needed.
 * Anything in [BRACKETS] is a placeholder to replace.
 */

export const site = {
  name: "Run the Reach",
  /** Short lowercase slug used in the terminal command: `$ <cli> run outbound-engine` */
  cli: "runthereach",
  domain: "runthereach.com",
  /** Used for metadataBase / OpenGraph. Or set NEXT_PUBLIC_SITE_URL in Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://runthereach.com",
  founder: "Azizul Hakim Orvee",
  email: "[hello@domain.com]",
  linkedin: "[LINKEDIN URL]",
  /** Cal.com or Calendly link */
  booking: "[CAL.COM OR CALENDLY LINK]",
  motto: "We run your outreach.",
  title: "Run the Reach — We run your outreach | GTM engineering for seed-stage B2B SaaS",
  description:
    "Clay, AI research, and cold email infrastructure wired into one system that finds your buyers and books meetings. No SDR hire needed.",
  tagline:
    "We run your outreach. GTM engineering for seed-stage B2B SaaS: the outbound system that books your meetings.",
};

export const nav = {
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Book a free outbound audit",
  ctaShort: "Book audit",
};

export const hero = {
  eyebrow: "GTM Engineering · for seed-stage B2B SaaS",
  headline: "Your outbound engine, built by an engineer.",
  sub: "Clay, AI research, and cold email infrastructure wired into one system that finds your buyers and books meetings. No SDR hire needed.",
  primaryCta: "Book a free outbound audit",
  secondaryCta: "See how it works",
};

/** The animated pipeline-run card in the hero. Each stage: label, text, tool ("" for none). */
export const pipeline = {
  title: "outbound-engine",
  run: "Run #0001",
  command: "run outbound-engine",
  running: "Running",
  complete: "Complete",
  stages: [
    { mark: "✓", label: "signals", text: "820 seed-stage accounts matched to ICP", tool: "clay" },
    { mark: "✓", label: "enrich", text: "verified emails via multi-provider waterfall", tool: "" },
    { mark: "✓", label: "research", text: "AI summary per account", tool: "claygent" },
    { mark: "✓", label: "write", text: "personalized first lines", tool: "claude" },
    { mark: "✓", label: "send", text: "warmed inboxes, 3-step sequence", tool: "instantly" },
    { mark: "→", label: "meetings", text: "booked on your calendar", tool: "" },
  ],
};

export const marquee = {
  label: "Tools we build with",
  tools: [
    "Clay",
    "Apollo",
    "Instantly",
    "Smartlead",
    "HubSpot",
    "Attio",
    "LeadMagic",
    "HeyReach",
    "n8n",
    "Make",
    "Zapier",
    "Claude",
    "OpenAI",
  ],
};

export const problem = {
  num: "01",
  label: "The problem",
  headline: "You raised the round. Now you need pipeline, fast.",
  cards: [
    {
      title: "Founder-led sales doesn't scale",
      body: "You're the best closer you have, and also the product lead, recruiter and CEO. Pipeline stalls the week you get busy.",
    },
    {
      title: "Hiring SDRs is slow and expensive",
      body: "Months to hire, months to ramp, and a six-figure bet before you know your messaging works.",
    },
    {
      title: "Buying signals go unworked",
      body: "Funding rounds, hiring sprees and job changes are the best timing cues you'll get. Almost nobody acts on them.",
    },
    {
      title: "Cold email lands in spam",
      body: "Without proper domains, warmup and authentication, your best copy never reaches an inbox.",
    },
  ],
};

export const system = {
  num: "02",
  label: "The system",
  /** Framework name */
  name: "[FRAMEWORK NAME, e.g. The Signal Engine]",
  sub: "Four layers. One pipeline. Each layer feeds the next, and every one of them is measured.",
  layers: [
    {
      id: "L1",
      title: "Targeting",
      body: "ICP definition and signal-based lists, so you only write to accounts with a reason to buy now.",
      tools: ["Clay", "Apollo", "Signals"],
    },
    {
      id: "L2",
      title: "Enrichment",
      body: "Waterfall enrichment, verified contacts and AI research on every account.",
      tools: ["Clay", "Claygent", "LeadMagic"],
    },
    {
      id: "L3",
      title: "Outreach",
      body: "Personalized sequences, deliverability setup, domains and warmup.",
      tools: ["Instantly", "Smartlead", "HeyReach"],
    },
    {
      id: "L4",
      title: "Tuning",
      body: "Reply tracking, A/B testing and weekly iteration on what's working.",
      tools: ["HubSpot", "Attio", "n8n"],
    },
  ],
};

export const pricing = {
  num: "03",
  label: "Pricing",
  headline: "Transparent pricing. No surprises.",
  plans: [
    {
      name: "Outbound Pilot",
      badge: "",
      price: "$[PRICE]",
      unit: "one-time · 30 days",
      body: "Setup plus your first campaign. The fastest way to see the system work.",
      features: [
        "ICP and signal definition",
        "Domains, inboxes and warmup",
        "Clay table and enrichment waterfall",
        "First campaign live",
      ],
      cta: "Book a free outbound audit",
      highlight: false,
    },
    {
      name: "Outbound Engine",
      badge: "MOST FOUNDERS START HERE",
      price: "$[PRICE]",
      unit: "/month · 3-month minimum",
      body: "We build, run and tune your outbound every week.",
      features: [
        "Everything in the Pilot",
        "Ongoing list building and signals",
        "Weekly A/B testing and iteration",
        "Reply handling and reporting",
      ],
      cta: "Book a free outbound audit",
      highlight: true,
    },
    {
      name: "Custom",
      badge: "",
      price: "Contact us",
      unit: "scoped to your stack",
      body: "Custom integrations, AI agents and CRM work.",
      features: ["Custom Clay and n8n workflows", "AI agents for research and routing", "CRM setup and automation"],
      cta: "Talk to us",
      highlight: false,
    },
  ],
  note: "No tool markup. Everything lives in your accounts.",
};

export const how = {
  num: "04",
  label: "How it works",
  headline: "Four steps from audit to pipeline.",
  steps: [
    { title: "Audit", body: "We review your ICP, offer and current outbound." },
    { title: "Build", body: "Domains, inboxes, Clay tables and sequences, set up in your accounts." },
    { title: "Launch", body: "Campaigns go live once inboxes are warm and lists are verified." },
    { title: "Tune", body: "Weekly reviews of replies and data. Winners scale, losers get cut." },
  ],
};

export const math = {
  num: "05",
  label: "The math",
  headline: "An engine costs less than one SDR.",
  sub: "A US-based SDR runs roughly $70–90K a year, plus months of ramp time before they book anything.",
  stats: [
    { value: "Week 1", label: "Infrastructure live" },
    { value: "$[PRICE]/mo", label: "vs $80K+ SDR salary" },
    { value: "100% yours", label: "Every system lives in your accounts" },
  ],
};

export const faq = {
  num: "06",
  label: "FAQ",
  headline: "Straight answers.",
  items: [
    {
      q: "Why not just hire an SDR?",
      a: "An SDR costs $70–90K a year and takes months to hire and ramp, and they still need tooling, data and management. We give you the system in weeks, at a fraction of the cost. When you're ready to hire, you'll have a proven playbook to hand them.",
    },
    {
      q: "Are you just another cold email agency?",
      a: "No. We're engineers. We build systems: signal-based targeting, enrichment waterfalls, AI research and deliverability infrastructure, wired together and tuned weekly. Copy is one part of it, not the product.",
    },
    {
      q: "Who owns the domains, data, and tools?",
      a: "You do. Everything is set up in your accounts, with no tool markup. If we part ways, you keep the domains, lists, tables and sequences.",
    },
    {
      q: "How fast will we see results?",
      a: "Honestly: infrastructure goes live in week 1. Domains and inboxes then need 2–3 weeks of warmup, and campaigns go live after that. Skipping warmup is how you burn a domain, so we don't.",
    },
    {
      q: "Do you guarantee meetings?",
      a: "No, and be wary of anyone who does. We guarantee the system, the sending volume and weekly iteration. Meetings depend on your offer and market, and we'll tell you plainly if we see a problem there.",
    },
    {
      q: "Who is this NOT for?",
      a: "Pre-product companies with nothing to sell yet, and anyone who wants a one-off lead list. This is an ongoing system, not a spreadsheet delivery.",
    },
  ],
};

export const finalCta = {
  headline: "Let's build your pipeline engine.",
  button: "Book a free outbound audit",
  note: "Free 30-minute audit. You leave with 3 concrete fixes either way.",
};

export const footer = {
  builtOn: "Built on the stack we sell.",
};
