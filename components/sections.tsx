import { about, faq, finalCta, hero, loop, pricing, signals, site, trace } from "@/content/site";
import { Reveal } from "./reveal";
import { Accented, PrimaryCta, Section, SectionHeader, SectionTag } from "./section";
import { RadarBlips, RadarField } from "./radar";
import { LoopDiagram } from "./loop-diagram";

/* Page sections. All copy comes from content/site.ts. */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <RadarField className="h-[34rem] w-[34rem] sm:h-[44rem] sm:w-[44rem] lg:h-[50rem] lg:w-[50rem]" />
      <RadarBlips variant="around" />
      <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-20 text-center sm:px-8 sm:pb-32 sm:pt-28">
        <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-ink/15 bg-slip/70 px-3 py-1.5 font-mono text-[10px] sm:px-4 sm:text-xs">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          {hero.eyebrow}
        </p>
        <h1 className="font-display mt-7 text-[clamp(2.1rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-balance">
          <Accented text={hero.headline} />
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted sm:text-lg">{hero.sub}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryCta />
          <a
            href="#loop"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            {hero.secondaryCta}
          </a>
        </div>
        <RadarBlips variant="grid" />
      </div>
    </section>
  );
}

export function Signals() {
  return (
    <Section id="signals">
      <SectionHeader center tag={signals.tag} title={signals.headline} sub={signals.sub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {signals.cards.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-slip p-5">
              <div aria-hidden className="rounded-xl border border-ink/10 bg-paper/60 p-3">
                <div className="flex items-start gap-2.5">
                  <span className="relative mt-1 flex h-1.5 w-1.5 shrink-0">
                    <span className="blip-ring absolute inset-0 rounded-full bg-accent" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium">{c.mock.title}</p>
                    <p className="mt-0.5 truncate font-mono text-[9px] text-muted">{c.mock.meta}</p>
                  </div>
                  <span className="shrink-0 rounded border border-accent/40 px-1.5 py-0.5 font-mono text-[9px] text-accent">
                    {c.mock.tag}
                  </span>
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.name}</h3>
              <p className="mt-2 text-sm text-muted">{c.why}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Loop() {
  return (
    <Section id="loop" className="bg-paper-2">
      <SectionHeader center tag={loop.tag} title={loop.headline} sub={loop.sub} />
      <Reveal>
        <LoopDiagram />
      </Reveal>
    </Section>
  );
}

/** The single-lead walkthrough: signal → research → the email it produced. */
export function Trace() {
  return (
    <Section id="trace">
      <SectionHeader center tag={trace.tag} title={trace.headline} sub={trace.sub} />
      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start">
        <Reveal className="flex flex-col gap-4">
          <div className="rounded-2xl border border-ink/10 bg-slip p-5">
            <SectionTag>{trace.detected.label}</SectionTag>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 p-3">
              <span className="relative mt-1 flex h-1.5 w-1.5 shrink-0" aria-hidden>
                <span className="blip-ring absolute inset-0 rounded-full bg-accent" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium">{trace.detected.title}</p>
                <p className="mt-0.5 font-mono text-[10px] text-muted">{trace.detected.meta}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto h-5 w-px bg-accent/30" aria-hidden />

          <div className="rounded-2xl border border-ink/10 bg-slip p-5">
            <SectionTag>{trace.research.label}</SectionTag>
            <ul className="mt-4 space-y-2">
              {trace.research.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 font-mono text-[11px] leading-relaxed text-muted">
                  <span className="text-accent" aria-hidden>
                    ›
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-ink/10 bg-slip p-5">
            <SectionTag>{trace.email.label}</SectionTag>
            <div className="mt-4 overflow-hidden rounded-xl border border-ink/10 bg-paper/60">
              <dl className="border-b border-ink/10 px-4 py-3 font-mono text-[10px]">
                {[
                  ["From", trace.email.from],
                  ["To", trace.email.to],
                  ["Subject", trace.email.subject],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2 py-0.5">
                    <dt className="w-14 shrink-0 uppercase tracking-[0.15em] text-muted">{k}</dt>
                    <dd className="min-w-0 break-words">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="space-y-3 px-4 py-4 text-sm leading-relaxed">
                {trace.email.lines.map((line, i) => (
                  <p key={i}>
                    {line.map((part, j) =>
                      part.hl ? (
                        <mark key={j} className="bg-accent/20 font-medium text-accent">
                          {part.text}
                        </mark>
                      ) : (
                        <span key={j}>{part.text}</span>
                      ),
                    )}
                  </p>
                ))}
              </div>
            </div>
            <p className="mt-4 font-mono text-[10px] leading-relaxed text-muted">{trace.email.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" className="bg-paper-2">
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
        <Reveal>
          {/* Drop a photo at public/founder.jpg; until then the frame shows initials. */}
          <div
            className="relative grid h-32 w-32 shrink-0 place-items-center overflow-hidden rounded-2xl border border-ink/15 bg-slip bg-cover bg-center sm:h-40 sm:w-40"
            style={{ backgroundImage: `url(${about.photo})` }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Photo</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <SectionTag>{about.tag}</SectionTag>
          <h2 className="font-display mt-4 text-[clamp(1.6rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-balance">
            <Accented text={about.headline} />
          </h2>
          <p className="mt-5 font-semibold">{about.name}</p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{about.role}</p>
          <div className="mt-5 space-y-3 text-muted">
            {about.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader center tag={pricing.tag} title={pricing.headline} />
      <div className="mx-auto grid max-w-4xl items-start gap-4 md:grid-cols-2">
        {pricing.plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 80} className="h-full">
            <div
              className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                p.highlight ? "border-accent bg-accent/5" : "border-ink/10 bg-slip"
              }`}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{p.name}</h3>
              <p className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em]">{p.price}</p>
              <p className="mt-1 font-mono text-xs text-muted">{p.unit}</p>
              <p className="mt-5 text-muted">{p.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="text-accent" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <PrimaryCta className="mt-7 w-full" variant={p.highlight ? "primary" : "ghost"} arrow={false} />
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center font-mono text-sm text-muted">{pricing.note}</p>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" className="bg-paper-2">
      <SectionHeader center tag={faq.tag} title={faq.headline} />
      <Reveal className="mx-auto max-w-3xl space-y-3">
        {faq.items.map((item) => (
          <details key={item.q} className="group rounded-2xl border border-ink/10 bg-slip px-5 py-4 sm:px-6 sm:py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <span className="font-medium sm:text-lg">{item.q}</span>
              <span
                className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/30 font-mono text-lg transition-transform"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-sm text-muted sm:text-base">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 pb-16 pt-4 sm:px-8 sm:pb-24">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ink/10 bg-slip px-5 py-16 text-center sm:px-6 sm:py-20">
        <RadarField className="h-[34rem] w-[34rem] sm:h-[44rem] sm:w-[44rem]" />
        <div className="relative">
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(1.75rem,4.8vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-balance">
            <Accented text={finalCta.headline} />
          </h2>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-accent sm:text-sm sm:tracking-[0.3em]">
            {site.motto}
          </p>
          <div className="mt-8">
            <PrimaryCta />
          </div>
          <p className="mx-auto mt-5 max-w-md text-xs text-muted sm:text-sm">{finalCta.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
