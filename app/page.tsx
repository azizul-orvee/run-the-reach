import { About, Ai, Faq, FinalCta, Hero, How, Problem, Promises, Services, Trades } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Ai />
      <Services />
      <How />
      <Trades />
      <Promises />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
