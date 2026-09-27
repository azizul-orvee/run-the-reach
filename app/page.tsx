import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { About, Faq, FinalCta, Hero, Loop, Pricing, Signals, Trace } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Signals />
        <Loop />
        <Trace />
        <About />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
