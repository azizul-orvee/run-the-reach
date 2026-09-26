import { faq, finalCta, hero, how, marquee, math, pricing, problem, site, system } from "@/content/site";
import { Reveal } from "./reveal";
import { CtaButton, LastWord, Section, SectionHeader } from "./section";
import { Terminal } from "./terminal";

/* Page sections. All copy comes from content/site.ts. */

function Radar({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 [mask-image:radial-gradient(circle,#000_15%,transparent_68%)] ${className}`}
    >
      <svg viewBox="-500 -500 1000 1000" className="absolute inset-0 text-ink" fill="none">
        {[100, 200, 300, 400, 490].map((r) => (
          <circle key={r} r={r} stroke="currentColor" strokeOpacity={0.12} />
        ))}
        <line x1={-500} x2={500} stroke="currentColor" strokeOpacity={0.12} />
        <line y1={-500} y2={500} stroke="currentColor" strokeOpacity={0.12} />
        <circle cx={210} cy={-150} r={5} className="fill-accent" />
        <circle cx={-260} cy={170} r={4} className="fill-accent" fillOpacity={0.6} />
      </svg>
      <div className="radar-sweep absolute inset-0 rounded-full" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Radar className="-top-56" />
      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-16 text-center sm:px-8 sm:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-slip/70 px-4 py-1.5 font-mono text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </p>
        <h1 className="font-display mt-8 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance">
          <LastWord text={hero.headline} />
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-muted sm:text-xl">{hero.sub}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton href={site.booking}>{hero.primaryCta} →</CtaButton>
          <CtaButton href="#how-it-works" variant="ghost">
            {hero.secondaryCta}
          </CtaButton>
        </div>
        <div className="mx-auto mt-16 max-w-2xl text-left">
          <Terminal />
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marquee.tools.map((t) => (
        <li key={t} className="flex items-center font-mono text-sm">
          <span className="px-5">{t}</span>
          <span className="text-accent" aria-hidden>
            /
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="border-y border-ink/10" aria-label={marquee.label}>
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-5 sm:px-8">
        <p className="hidden shrink-0 font-mono text-xs uppercase tracking-widest text-muted sm:block">{marquee.label}</p>
        <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track flex w-max">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </section>
  );
}

const bento = ["lg:col-span-2", "", "", "lg:col-span-2"];

export function Problem() {
  return (
    <Section>
      <SectionHeader center num={problem.num} label={problem.label} title={problem.headline} />
      <div className="grid gap-4 lg:grid-cols-3">
        {problem.cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 80} className={bento[i]}>
            <div className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-ink/10 bg-slip p-7 sm:p-9">
              <span className="font-mono text-xs text-accent">// 0{i + 1}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                <p className="mt-3 max-w-md text-muted">{c.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function System() {
  return (
    <Section id="system" className="bg-paper-2">
      <SectionHeader center num={system.num} label={system.label} title={system.name} sub={system.sub} />
      <div className="mx-auto max-w-4xl">
        {system.layers.map((l, i) => (
          <Reveal key={l.id}>
            <div className="rounded-2xl border border-ink/10 bg-slip p-6 sm:p-8 md:grid md:grid-cols-[3rem_1fr_auto] md:items-center md:gap-8">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent font-mono text-sm font-bold text-on-accent md:mb-0">
                {l.id}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{l.title}</h3>
                <p className="mt-2 text-muted">{l.body}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2 md:mt-0 md:max-w-[15rem] md:justify-end">
                {l.tools.map((t) => (
                  <li key={t} className="rounded-md border border-ink/15 px-2.5 py-1 font-mono text-[11px] text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {i < system.layers.length - 1 && <div className="mx-auto h-6 w-px bg-ink/20" aria-hidden />}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader center num={pricing.num} label={pricing.label} title={pricing.headline} />
      <div className="mx-auto max-w-5xl space-y-5">
        {pricing.plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div
              className={`relative grid gap-6 rounded-2xl border p-6 sm:p-8 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-10 ${
                p.highlight ? "border-accent bg-accent/5" : "border-ink/10 bg-slip"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-on-accent">
                  {p.badge}
                </span>
              )}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{p.name}</h3>
                <p className="font-display mt-3 text-5xl font-semibold tracking-[-0.04em]">{p.price}</p>
                <p className="mt-1 font-mono text-xs text-muted">{p.unit}</p>
              </div>
              <div>
                <p className="text-lg leading-snug">{p.body}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent" aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <CtaButton href={site.booking} variant={p.highlight ? "primary" : "ghost"}>
                {p.cta}
              </CtaButton>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center font-mono text-sm text-muted">{pricing.note}</p>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-paper-2">
      <SectionHeader center num={how.num} label={how.label} title={how.headline} />
      <ol className="mx-auto max-w-3xl space-y-14 border-l border-ink/20 pl-8 sm:pl-12">
        {how.steps.map((s, i) => (
          <Reveal key={s.title}>
            <li className="relative">
              <span
                className="absolute -left-[2.35rem] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[3.35rem]"
                aria-hidden
              />
              <span className="font-mono text-xs text-accent">STEP 0{i + 1}</span>
              <h3 className="font-display mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-lg text-muted">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function TheMath() {
  return (
    <Section>
      <SectionHeader center num={math.num} label={math.label} title={math.headline} sub={math.sub} />
      <div className="grid gap-4 md:grid-cols-3">
        {math.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="flex h-full flex-col justify-between gap-12 rounded-2xl border border-ink/10 bg-slip p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{s.label}</p>
              <p className="font-display text-5xl font-semibold leading-none tracking-[-0.04em] text-accent sm:text-6xl">
                {s.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" className="bg-paper-2">
      <SectionHeader center num={faq.num} label={faq.label} title={faq.headline} />
      <Reveal className="mx-auto max-w-3xl space-y-3">
        {faq.items.map((item) => (
          <details key={item.q} className="group rounded-2xl border border-ink/10 bg-slip px-6 py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-6">
              <span className="text-lg font-medium sm:text-xl">{item.q}</span>
              <span
                className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/30 font-mono text-lg transition-transform"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-muted">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ink/10 bg-slip px-6 py-20 text-center sm:py-28">
        <Radar className="-top-72" />
        <div className="relative">
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1] tracking-[-0.045em] text-balance">
            <LastWord text={finalCta.headline} />
          </h2>
          <div className="mt-10">
            <CtaButton href={site.booking}>{finalCta.button} →</CtaButton>
          </div>
          <p className="mt-5 font-mono text-xs text-muted">{finalCta.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
