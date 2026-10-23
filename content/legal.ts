/**
 * Terms of use (/terms) and privacy policy (/privacy).
 *
 * DRAFTS written for the UK market (UK GDPR and the Data Protection Act 2018), in plain English.
 * They are a starting point, not legal advice: have them reviewed before relying on them.
 * By the owner's choice, no legal name, company number, address, ICO number or governing law is shown
 * for now: the business is named only as Run the Reach. Bump `updated` whenever the text changes.
 *
 * A section body is a list of blocks: a string is a paragraph, `{ list }` is a bullet list.
 */
import { site } from "./site";

export type LegalBlock = string | { list: string[] };
export type LegalDoc = {
  meta: { title: string; description: string };
  tag: string;
  title: string;
  updated: string;
  intro: string[];
  sections: { heading: string; body: LegalBlock[] }[];
};

const whoWeAre = `This website is run by ${site.name}.`;

export const privacy: LegalDoc = {
  meta: {
    title: "Privacy policy",
    description: `How ${site.name} collects, uses and protects personal data, including enquiries handled by our AI tools.`,
  },
  tag: "Legal",
  title: "Privacy |policy|",
  updated: "24 October 2026",
  intro: [
    "This policy explains what personal data we collect, why, what we do with it and the rights you have. We’ve kept it as plain as we can.",
    "It covers this website, people who book a call with us, our clients, and people who send an enquiry through an advert, landing page, phone line or messaging service we run for a business.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        `${whoWeAre} In this policy “we”, “us” and “our” mean ${site.name}.`,
        `For most of the data described here we are the controller, which means we decide how it’s used. Where we run AI tools inside a client’s business, we usually act on that client’s behalf as a processor, and the client’s own privacy policy applies as well.`,
        `Contact us about anything in this policy at ${site.email}.`,
      ],
    },
    {
      heading: "What we collect",
      body: [
        "When you visit this website:",
        {
          list: [
            "Our hosting provider records technical information such as your IP address, browser and device type, the pages you request and when. This keeps the site running and secure.",
            "This website does not use analytics, advertising cookies or contact forms.",
          ],
        },
        "When you book a call or contact us:",
        {
          list: [
            `Your name, email address, phone number, business name, trade and area, and anything you choose to tell us. Bookings are handled by a third-party booking tool.`,
          ],
        },
        "When you are a client:",
        {
          list: [
            "Contact and billing details for you and your staff, information about your business, and access to accounts you share with us, such as Google Ads, your calendar or your phone system.",
          ],
        },
        "When you send an enquiry through one of our adverts, pages or AI tools:",
        {
          list: [
            "Your name, phone number, email address, postcode or area, details of the job you need doing and the messages you send.",
            "Where AI call answering is used, the call audio, a transcript and a summary of the call.",
          ],
        },
      ],
    },
    {
      heading: "How we use it, and our lawful basis",
      body: [
        "We only use personal data where the law allows it. In practice:",
        {
          list: [
            "To run and secure this website: our legitimate interests in keeping the site working and safe.",
            "To reply to you and hold a call you booked: our legitimate interests, or steps you asked us to take before entering a contract.",
            "To provide our services to clients: performance of our contract with them.",
            "To handle an enquiry you sent about a job, reply to you, arrange a booking and pass your details to a business that can do the work: our legitimate interests (and the client’s) in responding to the request you made.",
            "To keep accounts and meet tax and legal duties: legal obligation.",
          ],
        },
        "If we ever rely on your consent, you can withdraw it at any time.",
      ],
    },
    {
      heading: "Enquiries and leads",
      body: [
        "If you send an enquiry through one of our adverts or pages, we pass it to one business that provides the service you asked about. That business may pay us for the introduction.",
        "We do not pass your enquiry to more than one business, and we do not sell it to list brokers or data companies.",
      ],
    },
    {
      heading: "How we use AI",
      body: [
        "We use AI to reply to enquiries, answer calls, summarise conversations and arrange bookings on behalf of the businesses we work with. The AI works from the information you give it and the instructions the business has set.",
        "AI does not make decisions about you that have legal or similarly significant effects. If you want a person to review a conversation or a booking, contact the business or us and we will.",
        "To generate replies, conversation content is processed by AI model providers. We use providers that do not use this data to train their models.",
      ],
    },
    {
      heading: "Who we share it with",
      body: [
        {
          list: [
            "The single business you enquired about, as described above.",
            "Service providers who help us run things: website hosting (Vercel), our booking tool, Google (for advertising), AI model providers, phone, SMS and email providers, and our payment and accounting tools. They may only use the data to provide their service to us.",
            "Professional advisers such as accountants and lawyers.",
            "Authorities, where the law requires it.",
            "A buyer or successor, if our business is ever sold or restructured.",
          ],
        },
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        {
          list: [
            "Enquiries and call records: up to 24 months, then deleted or anonymised.",
            "Prospective client details (for example from a booked call): up to 24 months after our last contact.",
            "Client records: for the length of our engagement and 6 years after, to meet tax and legal requirements.",
            "Website server logs: for the short period set by our hosting provider.",
          ],
        },
      ],
    },
    {
      heading: "Complaints",
      body: [
        `If you’re unhappy with how we’ve handled your data, please tell us first at ${site.email} and we’ll try to put it right. You can also complain to the Information Commissioner’s Office (ICO) at ico.org.uk or on 0303 123 1113.`,
      ],
    },
    {
      heading: "Cookies",
      body: [
        "This website does not set cookies. If you follow a link to book a call, the booking provider’s site may set its own cookies, covered by its own policy.",
      ],
    },
    {
      heading: "Children",
      body: ["Our services are for businesses and adults. We do not knowingly collect data from children."],
    },
    {
      heading: "Changes to this policy",
      body: ["We may update this policy from time to time. The date at the top shows when it last changed."],
    },
  ],
};

export const terms: LegalDoc = {
  meta: {
    title: "Terms of use",
    description: `The terms that apply when you use the ${site.name} website.`,
  },
  tag: "Legal",
  title: "Terms of |use|",
  updated: "24 October 2026",
  intro: [
    `These terms apply to your use of this website. By using it, you agree to them. If you don’t agree, please don’t use the site.`,
  ],
  sections: [
    {
      heading: "Who we are",
      body: [`${whoWeAre} In these terms “we”, “us” and “our” mean ${site.name}. You can contact us at ${site.email}.`],
    },
    {
      heading: "Our services are agreed separately",
      body: [
        "Nothing on this website is an offer to supply services. Booking a call is free and doesn’t commit you, or us, to anything.",
        "If we work together, a separate written agreement will set out the services, fees and terms. If that agreement and these terms ever conflict, the agreement wins.",
      ],
    },
    {
      heading: "Information on this website",
      body: [
        "The content on this site is general information about what we do. Results depend on many things, including your trade, area, competition and budget, so we don’t promise any particular outcome from what you read here.",
        "Examples on the site, such as the messages shown on the phone on our homepage, are illustrations. They are not real customers or real conversations.",
        "We try to keep the site accurate and up to date, but we don’t guarantee it is complete, accurate or always available.",
      ],
    },
    {
      heading: "Using the site",
      body: [
        "You may use this site for lawful purposes only. You must not:",
        {
          list: [
            "try to gain unauthorised access to the site, its server or anything connected to it",
            "introduce viruses or other harmful code, or attack the site in any way",
            "copy or scrape the site’s content in bulk, or use it to build a competing product",
          ],
        },
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        `The content, design, text, graphics and the ${site.name} name and logo belong to us or our licensors. You may view the site and print pages for your own reference. You may not reuse them commercially without our written permission.`,
      ],
    },
    {
      heading: "Links to other websites",
      body: [
        "This site links to other websites, such as our booking provider. We don’t control them and aren’t responsible for their content or how they handle your data.",
      ],
    },
    {
      heading: "Our liability",
      body: [
        "Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited or excluded by law.",
        "Otherwise, the site is provided free of charge and “as is”. We are not liable for any loss or damage arising from your use of, or reliance on, the site, including loss of profit, business, revenue or opportunity.",
      ],
    },
    {
      heading: "Privacy",
      body: ["How we handle personal data is explained in our privacy policy."],
    },
    {
      heading: "Changes to these terms",
      body: ["We may update these terms from time to time. The date at the top shows when they last changed. Please check back when you use the site."],
    },
  ],
};
