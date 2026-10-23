import { about, ai, faq, finalCta, hero, how, problem, promises, services, site, trades } from "@/content/site";
import { Reveal } from "./reveal";
import { Accented, PrimaryCta, Section, SectionHeader, SectionTag } from "./section";
import { Icon } from "./icons";
import { Phone } from "./phone";

/* Page sections. All copy comes from content/site.ts. */

function Points({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2.5 text-[15px] font-medium sm:flex-row sm:flex-wrap sm:gap-x-6 ${className}`}>
      {items.map((p) => (
        <li key={p} className="flex items-center gap-2">
          <Icon name="check" className="h-4 w-4 shrink-0 text-good" />
          {p}
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:pb-28">
        <div className="min-w-0">
          <p className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-ink/10 bg-slip px-3.5 py-1.5 text-[13px] font-medium leading-snug sm:rounded-full">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
            {hero.eyebrow}
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.5rem,7vw,4.6rem)] leading-[1.02] tracking-[-0.045em]">
            <Accented text={hero.headline} />
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80 sm:text-xl">{hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <a
              href="#ai"
              className="btn-press inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink/20 px-7 py-3 text-[15px] font-semibold hover:border-ink hover:bg-ink/5"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <Points items={hero.points} className="mt-8" />
        </div>
        <div className="min-w-0">
          <Phone />
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <Section id="problem" className="bg-paper-2">
      <SectionHeader center tag={problem.tag} title={problem.headline} sub={problem.sub} />
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {problem.leaks.map((l, i) => (
          <Reveal key={l.name} delay={(i % 2) * 80}>
            <div className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-slip p-5 sm:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-highlight/70">
                <Icon name={l.icon} />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{l.name}</h3>
                <p className="mt-1.5 text-[15px] text-muted">{l.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Ai() {
  return (
    <Section id="ai">
      <SectionHeader tag={ai.tag} title={ai.headline} sub={ai.sub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ai.features.map((f, i) => (
          <Reveal key={f.name} delay={(i % 3) * 80}>
            <div className="h-full rounded-2xl border border-ink/10 bg-slip p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-highlight">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.name}</h3>
              <p className="mt-1.5 text-[15px] text-muted">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-ink/10 bg-highlight/35 px-5 py-4 sm:items-center">
        <Icon name="sparkles" className="mt-0.5 h-5 w-5 shrink-0 text-accent sm:mt-0" />
        <p className="font-medium">{ai.note}</p>
      </Reveal>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" className="bg-paper-2">
      <SectionHeader tag={services.tag} title={services.headline} sub={services.sub} />
      <div className="grid gap-4 md:grid-cols-3">
        {services.items.map((s, i) => (
          <Reveal key={s.name} delay={i * 80} className="h-full">
            <div
              className={`flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                s.featured ? "border-deep bg-deep text-on-deep" : "border-ink/10 bg-slip"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-2xl tracking-[-0.03em]">{s.name}</h3>
                {s.label && (
                  <span className="rounded-full bg-highlight px-3 py-1 text-xs font-semibold text-ink">{s.label}</span>
                )}
              </div>
              <p className={`mt-3 text-[15px] ${s.featured ? "opacity-80" : "text-muted"}`}>{s.lead}</p>
              <ul className={`mt-6 space-y-2.5 border-t pt-5 text-[15px] ${s.featured ? "border-on-deep/15" : "border-ink/10"}`}>
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Icon name="check" className={`mt-1 h-4 w-4 shrink-0 ${s.featured ? "text-highlight" : "text-good"}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
        <PrimaryCta />
        <p className="text-[15px] text-muted">{services.ctaNote}</p>
      </Reveal>
    </Section>
  );
}

export function How() {
  return (
    <Section id="how" className="on-deep bg-deep text-on-deep">
      <SectionHeader center tag={how.tag} title={how.headline} sub={how.sub} />
      <div className="relative">
        <span className="absolute left-[12.5%] right-[12.5%] top-6 hidden border-t-2 border-dashed border-on-deep/25 lg:block" aria-hidden />
        <ol className="relative grid gap-4 lg:grid-cols-4 lg:gap-6">
          {how.steps.map((s, i) => (
            <li key={s.name} className="min-w-0">
              <Reveal
                delay={i * 90}
                className="flex h-full gap-4 rounded-2xl border border-on-deep/10 bg-on-deep/[0.04] p-5 lg:flex-col lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:text-center"
              >
                <span className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-full bg-highlight text-xl text-ink">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight lg:mt-4">{s.name}</h3>
                  <p className="mt-1.5 text-[15px] opacity-75">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/** The trades as tags, closed by a plain-text "…and other local services". Used on the homepage and /about. */
export function TradeList() {
  return (
    <>
      <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
        {trades.list.map((t) => (
          <li key={t} className="rounded-full border border-ink/15 bg-slip px-4 py-2 text-[15px] font-medium">
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-center text-muted">{trades.more}</p>
    </>
  );
}

export function Trades() {
  return (
    <Section id="trades" className="bg-paper-2">
      <SectionHeader center tag={trades.tag} title={trades.headline} sub={trades.sub} />
      <Reveal>
        <TradeList />
      </Reveal>
    </Section>
  );
}

export function Promises() {
  return (
    <Section id="why">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader tag={promises.tag} title={promises.headline} sub={promises.sub} className="mb-8" />
          <Reveal>
            <PrimaryCta />
          </Reveal>
        </div>
        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          {promises.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <div className="h-full rounded-2xl border border-ink/10 bg-slip p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-highlight/70">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1.5 text-[15px] text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" className="bg-paper-2">
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-12">
        <Reveal>
          {/* Drop a photo at public/founder.jpg; until then the frame shows a placeholder label. */}
          <div
            className="grid h-36 w-36 place-items-center overflow-hidden rounded-3xl border border-ink/10 bg-slip bg-cover bg-center sm:h-48 sm:w-48"
            style={{ backgroundImage: `url(${about.photo})` }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Photo</span>
          </div>
        </Reveal>
        <Reveal delay={80} className="min-w-0">
          <SectionTag>{about.tag}</SectionTag>
          <h2 className="font-display mt-4 text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.06]">
            <Accented text={about.headline} />
          </h2>
          <div className="mt-6 space-y-4 text-muted sm:text-lg">
            {about.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
          <p className="mt-6 font-semibold">{about.name}</p>
          <p className="text-[15px] text-muted">{about.role}</p>
          <a href="/about" className="group mt-6 inline-flex items-center gap-2 font-semibold underline decoration-accent decoration-2 underline-offset-4">
            {about.more}
            <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeader center tag={faq.tag} title={faq.headline} />
      <Reveal className="mx-auto max-w-3xl space-y-3">
        {faq.items.map((item) => (
          <details key={item.q} className="rounded-2xl border border-ink/10 bg-slip px-5 py-4 sm:px-6 sm:py-5">
            <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4">
              <span className="font-semibold sm:text-lg">{item.q}</span>
              <span
                className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink/20 text-lg leading-none"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-muted">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 pb-16 sm:px-8 sm:pb-24">
      <Reveal className="on-deep mx-auto max-w-6xl rounded-[2rem] bg-deep px-5 py-16 text-center text-on-deep sm:px-10 sm:py-20">
        <h2 className="font-display mx-auto max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.04] tracking-[-0.04em]">
          <Accented text={finalCta.headline} />
        </h2>
        <p className="mx-auto mt-5 max-w-xl opacity-80 sm:text-lg">{finalCta.sub}</p>
        <div className="mt-9">
          <PrimaryCta />
        </div>
        <p className="mt-6 text-sm opacity-60">{site.motto}</p>
      </Reveal>
    </section>
  );
}
