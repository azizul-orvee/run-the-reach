/**
 * Copy for the About page (/about). Same conventions as content/site.ts:
 * `|pipes|` mark highlighter words, [BRACKETS] are placeholders.
 *
 * Everything here is built from what the owner has said about the business.
 * Nothing about founding date, team size or location is stated, on purpose.
 */

export const aboutPage = {
  meta: {
    title: "About us",
    description:
      "Run the Reach is an AI-first agency for local businesses: Google Ads that bring in leads, and AI that turns them into booked jobs.",
  },
  hero: {
    tag: "About us",
    headline: "AI-first growth for |local businesses|.",
    sub: "Run the Reach brings local businesses two things they usually have to buy from different people: Google Ads that bring in leads, and AI that makes sure those leads turn into booked jobs.",
  },
  story: {
    tag: "Our story",
    headline: "Why we |exist|.",
    lines: [
      "I build software and run Google Ads. For the last three years I’ve done both for local businesses (roofers, locksmiths, heating engineers, recovery firms and more), managing seven figures of ad spend along the way.",
      "The same thing kept happening. The ads worked and the phone rang, but plenty of jobs still slipped away: a call missed while up a ladder, an enquiry that sat for hours, a quote nobody chased.",
      "More ads don’t fix that. Better systems do. So Run the Reach is AI-first: we bring in the leads, and we build the AI that answers, follows up and books every one in.",
    ],
    /** Shown with the photo frame from `about.photo` in content/site.ts. */
    signoff: "Founder, Run the Reach",
  },
  aiFirst: {
    tag: "What AI-first means",
    headline: "The AI does the busywork. |You do the work.|",
    items: [
      {
        icon: "sparkles" as const,
        name: "AI handles the phone side",
        body: "Replies, missed calls, follow-ups and bookings happen in seconds, day and night, without you stopping what you’re doing.",
      },
      {
        icon: "reply" as const,
        name: "It sounds like your business",
        body: "We set it up around your services, your area and the way you talk to customers, so it reads like you, not like a robot.",
      },
      {
        icon: "layers" as const,
        name: "Built, not bolted on",
        body: "We build and tune the AI ourselves, and we build custom software when off-the-shelf tools don’t fit how you work.",
      },
    ],
  },
  principles: {
    tag: "How we work",
    headline: "Straight terms, |every time|.",
    items: [
      {
        name: "Exclusive leads",
        body: "Every lead we send you is yours alone. It never goes to a competitor.",
      },
      {
        name: "One business per trade, per area",
        body: "If we work with you, we don’t work with the company down the road.",
      },
      {
        name: "Leads, not clicks",
        body: "Clicks and impressions are not the goal. Enquiries and booked jobs are.",
      },
      {
        name: "Honest answers",
        body: "On the call we tell you plainly whether we can help. No hard sell, no jargon.",
      },
    ],
  },
  trades: {
    tag: "Who we work with",
    headline: "Local trades and |services|.",
    sub: "Businesses people search Google for when they need help fast. A few we’ve grown:",
  },
};
