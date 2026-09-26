import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Faq, FinalCta, Hero, HowItWorks, Marquee, Pricing, Problem, System, TheMath } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <System />
        <Pricing />
        <HowItWorks />
        <TheMath />

        {/*
          CASE STUDIES — add real ones here later. Do not publish until you have real results.
          Suggested shape: client type, the problem, what you built, the numbers.

          <section id="results" className="border-t border-line">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <SectionHeader num="XX" label="Results" title="Case studies" />
              ...cards...
            </div>
          </section>
        */}

        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
