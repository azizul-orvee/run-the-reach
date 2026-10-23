import { site } from "@/content/site";
import { Reveal } from "./reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}

/**
 * Renders a headline, with the parts marked `|like this|` drawn with the highlighter stroke.
 * Odd-indexed segments are the marked ones.
 */
export function Accented({ text }: { text: string }) {
  return (
    <>
      {text.split("|").map((part, i) =>
        i % 2 ? (
          <span key={i} className="mark">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** The small label above each section headline, led by a short accent rule. */
export function SectionTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] ${className}`}>
      <span className="h-[3px] w-6 shrink-0 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeader({
  tag,
  title,
  sub,
  className = "mb-10 sm:mb-14",
  center = false,
}: {
  tag: string;
  title: string;
  sub?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <SectionTag className={center ? "justify-center" : ""}>{tag}</SectionTag>
      <h2 className="font-display mt-4 text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.06]">
        <Accented text={title} />
      </h2>
      {sub && <p className={`mt-5 max-w-2xl opacity-75 sm:text-lg ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

/**
 * The top of an inner page (About, Terms, Privacy): tag, the page's only <h1>, optional intro.
 * Deliberately not wrapped in <Reveal>: like the homepage hero, it must paint immediately.
 */
export function PageHeader({ tag, title, sub, children }: { tag: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <header className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20">
      <div className="max-w-3xl">
        <SectionTag>{tag}</SectionTag>
        <h1 className="font-display mt-5 text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.03] tracking-[-0.045em]">
          <Accented text={title} />
        </h1>
        {sub && <p className="mt-6 max-w-2xl text-lg opacity-80 sm:text-xl">{sub}</p>}
        {children}
      </div>
    </header>
  );
}

const variants = {
  primary: "bg-accent text-on-accent border-accent hover:bg-ink hover:border-ink",
  ghost: "border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
  light: "bg-on-deep text-ink border-on-deep hover:bg-highlight hover:border-highlight",
} as const;

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn-press group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 px-7 py-3 text-[15px] font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** The site-wide CTA. One label, one destination, set in content/site.ts. */
export function PrimaryCta({
  variant = "primary",
  className = "",
  arrow = true,
}: {
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <CtaButton href={site.booking} variant={variant} className={className}>
      {site.cta}
      {arrow && (
        <span aria-hidden className="transition-transform duration-150 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </CtaButton>
  );
}
