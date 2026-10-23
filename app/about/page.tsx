import { about } from "@/content/site";
import { aboutPage } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/reveal";
import { Accented, PageHeader, PrimaryCta, Section, SectionHeader, SectionTag } from "@/components/section";
import { FinalCta, TradeList } from "@/components/sections";
import { Icon } from "@/components/icons";

export const metadata = pageMetadata({ ...aboutPage.meta, path: "/about" });

export default function AboutPage() {
  const { hero, story, aiFirst, principles, trades } = aboutPage;
  return (
    <>
      <PageHeader tag={hero.tag} title={hero.headline} sub={hero.sub}>
        <div className="mt-8">
          <PrimaryCta />
        </div>
      </PageHeader>

      <Section className="bg-paper-2">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-12">
          <Reveal>
            {/* Same photo as the homepage About section: public/founder.jpg, placeholder until it exists. */}
            <div
              className="grid h-36 w-36 place-items-center overflow-hidden rounded-3xl border border-ink/10 bg-slip bg-cover bg-center sm:h-48 sm:w-48"
              style={{ backgroundImage: `url(${about.photo})` }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Photo</span>
            </div>
          </Reveal>
          <Reveal delay={80} className="min-w-0">
            <SectionTag>{story.tag}</SectionTag>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.06]">
              <Accented text={story.headline} />
            </h2>
            <div className="mt-6 space-y-4 text-muted sm:text-lg">
              {story.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
            <p className="mt-6 font-semibold">{about.name}</p>
            <p className="text-[15px] text-muted">{story.signoff}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="on-deep bg-deep text-on-deep">
        <SectionHeader tag={aiFirst.tag} title={aiFirst.headline} />
        <div className="grid gap-4 md:grid-cols-3">
          {aiFirst.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div className="h-full rounded-2xl border border-on-deep/10 bg-on-deep/[0.04] p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-highlight text-ink">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-1.5 text-[15px] opacity-75">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader tag={principles.tag} title={principles.headline} />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {principles.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80} className="flex gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-good/10 text-good">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-paper-2">
        <SectionHeader center tag={trades.tag} title={trades.headline} sub={trades.sub} />
        <Reveal>
          <TradeList />
        </Reveal>
      </Section>

      <div className="pt-16 sm:pt-24">
        <FinalCta />
      </div>
    </>
  );
}
