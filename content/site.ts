/**
 * Homepage copy, shared links and metadata live here.
 * The About page's copy is in content/pages.ts, and the Terms and Privacy text in content/legal.ts.
 * Edit these files to change the site — no component changes needed.
 * Anything in [BRACKETS] is a placeholder to replace.
 *
 * Headlines use `|pipes|` to mark the words drawn with the highlighter stroke:
 *   "More booked jobs. |Not just more clicks.|"
 *
 * Copy is UK English and deliberately names no country or city, so the site
 * works unchanged when the US market opens. No prices and no results figures:
 * every CTA leads to a call, and pricing is discussed there.
 */

/** Strips the accent markers — for plain-text contexts like the OG image. */
export const plain = (s: string) => s.replace(/\|/g, "");

export const site = {
  name: "Run the Reach",
  domain: "runthereach.com",
  /** Used for metadataBase / OpenGraph. Or set NEXT_PUBLIC_SITE_URL in Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://runthereach.com",
  founder: "[YOUR NAME]",
  email: "contact@runthereach.com",
  linkedin: "[LINKEDIN URL]",
  /** Where every CTA on the page points — a booking page (Calendly, Cal.com, etc.). */
  booking: "[BOOKING LINK]",
  /** The CTA label, used everywhere. */
  cta: "Book a call",
  motto: "More calls. More booked jobs.",
  title: "Run the Reach — AI-first customer acquisition for local businesses",
  description:
    "Exclusive leads from Google Ads, and AI that answers, follows up and books every one in. AI-first customer acquisition for local businesses.",
  tagline: "AI-first customer acquisition for local businesses.",
};

/** Links point at "/#…" so they work from every page, not just the homepage. */
export const nav = {
  links: [
    { label: "Our AI", href: "/#ai" },
    { label: "Services", href: "/#services" },
    { label: "How it works", href: "/#how" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export const hero = {
  eyebrow: "AI-first customer acquisition for local businesses",
  headline: "More booked jobs. |Not just more clicks.|",
  sub: "We bring you exclusive leads from people searching for your service right now. Then our AI answers, follows up and books every one in, even while you’re on a job.",
  secondaryCta: "See our AI at work",
  /** Trust points shown under the buttons. */
  points: [
    "AI replies to every lead in seconds",
    "Every lead is yours alone",
    "One business per trade, per area",
    "Seven figures of Google Ads spend managed",
  ],
  /**
   * The phone in the hero. These are illustrative, not a real customer.
   * `kind` picks the icon and colour: lead = accent, reply = ink, booked = green.
   */
  phone: {
    time: "09:41",
    notifications: [
      { kind: "lead", app: "New enquiry", title: "Boiler stopped working", body: "“No heating or hot water. Can someone come out today?”", when: "now" },
      { kind: "reply", app: "AI reply sent", title: "To: Sarah", body: "“Hi Sarah, thanks for getting in touch. We can come out today. Which time suits?”", when: "now" },
      { kind: "booked", app: "Job booked by AI", title: "Today, 2:00pm", body: "Added to your calendar. Reminder sent to Sarah.", when: "2m" },
    ],
    caption: "Handled by AI while you’re on another job.",
  },
};

export const problem = {
  tag: "The problem",
  headline: "Most marketing gets you clicks. |You need customers.|",
  sub: "Clicks don’t pay the bills. Between the ad and the invoice, most local businesses lose plenty of people who were ready to hire them.",
  leaks: [
    {
      icon: "missed" as const,
      name: "Missed calls",
      body: "You’re up a ladder or under a car. The phone rings out, and they call the next name on Google.",
    },
    {
      icon: "clock" as const,
      name: "Slow replies",
      body: "An enquiry sits for a few hours. By the time you reply, someone else has already booked the job.",
    },
    {
      icon: "quote" as const,
      name: "Quotes nobody chases",
      body: "The quote goes out and nobody follows up. People meant to say yes. They just forgot.",
    },
    {
      icon: "shared" as const,
      name: "Shared leads",
      body: "Lead sites sell the same enquiry to several companies at once. Now you’re racing them on price.",
    },
  ],
};

export const ai = {
  tag: "Our AI",
  headline: "Your leads, worked by |AI that never clocks off|.",
  sub: "AI-first means the jobs that slip when you’re busy get done by AI instead: in seconds, day and night, in your business’s name. We build it ourselves and set it up around how you work.",
  features: [
    {
      icon: "phone" as const,
      name: "AI receptionist",
      body: "Answers the calls you can’t take, gets the details and books the job, any time of day.",
    },
    {
      icon: "reply" as const,
      name: "Instant replies",
      body: "Every enquiry from your ads and website gets a reply in seconds, not hours.",
    },
    {
      icon: "missed" as const,
      name: "Missed-call text-back",
      body: "Miss a call and the customer gets a text straight away, before they ring someone else.",
    },
    {
      icon: "quote" as const,
      name: "Quote follow-up",
      body: "Chases every quote you send, politely and on time, until you get a yes or a no.",
    },
    {
      icon: "calendar" as const,
      name: "Smart booking",
      body: "Customers pick a slot that suits you. It lands in your calendar and a reminder goes out.",
    },
    {
      icon: "trend" as const,
      name: "AI-tuned Google Ads",
      body: "Automation watches your campaigns and moves budget to the searches that turn into jobs.",
    },
  ],
  note: "And when you need something no off-the-shelf tool does, we build custom AI software for it.",
};

export const services = {
  tag: "Services",
  headline: "Three ways in. |One goal: booked jobs.|",
  sub: "We’ll work out which fits you on the call. Many businesses start with leads and grow into the full AI system.",
  ctaNote: "Not sure which fits? That’s what the call is for.",
  items: [
    {
      name: "Pay per lead",
      lead: "We run the ads with our own budget. You pay for the leads we send you.",
      points: ["We fund the advertising", "Every lead exclusive to you", "No ad account to manage"],
      featured: false,
    },
    {
      name: "Managed Google Ads",
      lead: "We take over your Google Ads and run it with automation and AI doing the heavy lifting, so your budget goes on people ready to hire you.",
      points: ["Your account, your budget", "AI-assisted bidding and targeting", "Built around leads, not clicks"],
      featured: false,
    },
    {
      name: "The full AI system",
      label: "Most complete",
      lead: "The leads, plus AI that catches every one: an AI receptionist, instant replies, follow-ups and booking, with custom software where off-the-shelf tools fall short.",
      points: ["Leads from Google Ads", "AI receptionist and replies", "Custom AI tools built for you"],
      featured: true,
    },
  ],
};

export const how = {
  tag: "How it works",
  headline: "One lead, |start to finish|.",
  sub: "What happens when someone near you needs your help.",
  steps: [
    { name: "They search", body: "Something breaks. They grab their phone and search Google for someone nearby who can help today." },
    { name: "They find you", body: "Your ad sits at the top of the results and sends them to a page built to get them to call or enquire." },
    { name: "AI replies instantly", body: "Even when you’re mid-job, our AI replies straight away by text, email or phone, and answers their questions." },
    { name: "AI books it in", body: "It offers a time that suits you, adds the job to your calendar and sends a reminder. You just turn up." },
  ],
};

export const trades = {
  tag: "Who we help",
  headline: "Built for |local trades|.",
  sub: "We’ve helped businesses like these grow. If your customers search Google when they need you, we can probably help you too.",
  list: [
    "Roofers",
    "Boiler & heating engineers",
    "HVAC engineers",
    "Locksmiths",
    "Auto locksmiths",
    "Car key replacement",
    "Recovery & towing",
  ],
  more: "…and other local services",
};

export const promises = {
  tag: "Why Run the Reach",
  headline: "Straight terms. |No surprises.|",
  sub: "A few things that are true for every business we work with.",
  items: [
    {
      icon: "lock" as const,
      name: "Your leads are yours",
      body: "Every lead we send is exclusive to you. It never goes to a competitor.",
    },
    {
      icon: "pin" as const,
      name: "One business per area",
      body: "We work with one business per trade in each area. We’ll never be working for the company down the road.",
    },
    {
      icon: "trend" as const,
      name: "Proven on real budgets",
      body: "We’ve managed seven figures of Google Ads spend. You get that experience from day one, not a junior learning on your money.",
    },
    {
      icon: "sparkles" as const,
      name: "AI-first, built by us",
      body: "Most ad agencies stop at the click. We build the AI that turns clicks into booked jobs, and tune it to how your business works.",
    },
  ],
};

export const about = {
  tag: "Who’s behind it",
  headline: "A real person, |not a call centre|.",
  /** Drop a photo at public/founder.jpg. Until then a placeholder frame shows. */
  photo: "/founder.jpg",
  name: "[YOUR NAME]",
  role: "Founder, Run the Reach",
  lines: [
    "I build software and run Google Ads, and for the last three years I’ve done both for local businesses: roofers, locksmiths, heating engineers, recovery firms and more.",
    "The pattern I kept seeing was simple. Plenty of people wanted to hire them, and too many slipped away before they did.",
    "Run the Reach is how I fix that: the leads, and the AI that turns them into jobs.",
  ],
  more: "More about us",
};

export const faq = {
  tag: "FAQ",
  headline: "Straight |answers|.",
  items: [
    {
      q: "Are the leads shared with other businesses?",
      a: "No. Every lead we send you is exclusive. It doesn’t go to anyone else.",
    },
    {
      q: "Will you work with my competitors?",
      a: "Not in your area. We work with one business per trade in each area, so if we’re working with you, we’re not working with the company down the road.",
    },
    {
      q: "What does “AI-first” actually mean?",
      a: "It means AI does the jobs that slip when you’re busy: replying to enquiries in seconds, answering calls you can’t take, chasing quotes and booking jobs in. We set it up around your business and the way you talk to customers. You do the work; the AI keeps the phone side running.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on how we work together (pay per lead, managing your ads, or the full AI system) and on your trade and area. We’ll go through it properly on the call, once we know what you need.",
    },
    {
      q: "What kinds of businesses do you work with?",
      a: "Mostly local trades and services, the kind of business people search for on Google when they need help fast. We’ve worked with roofers, heating engineers, locksmiths, recovery firms and more.",
    },
    {
      q: "What happens on the call?",
      a: "We ask about your business, the work you want more of and where your customers come from now. Then we tell you honestly whether we can help, and how. No hard sell.",
    },
  ],
};

export const finalCta = {
  headline: "Let’s see if we’re |a good fit|.",
  sub: "A short call about your business and your area. If we can help, we’ll show you how. If your trade is already taken in your area, we’ll tell you straight away.",
};

export const footer = {
  linkedinLabel: "LinkedIn",
  links: [
    { label: "About us", href: "/about" },
    { label: "Terms of use", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
  ],
};
