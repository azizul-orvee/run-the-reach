import { site } from "@/content/site";
import { Reveal } from "./reveal";

export function Section({
  id,
  children,
  className = "",
  border = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  border?: boolean;
}) {
  return (
    <section id={id} className={`relative ${border ? "border-t border-ink/15" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}

/**
 * Renders a headline, with the parts marked `|like this|` in the accent colour.
 * Odd-indexed segments are the marked ones.
 */
export function Accented({ text }: { text: string }) {
  return (
    <>
      {text.split("|").map((part, i) =>
        i % 2 ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** The small monospace radar tag that labels each section, e.g. "◉ SIGNALS". */
export function SectionTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.25em] text-accent ${className}`}>{children}</p>
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
    <Reveal className={`max-w-4xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <SectionTag>{tag}</SectionTag>
      <h2 className="font-display mt-5 text-[clamp(1.6rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-balance">
        <Accented text={title} />
      </h2>
      {sub && <p className={`mt-5 max-w-2xl opacity-70 sm:text-lg ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

const variants = {
  primary: "bg-accent text-on-accent border-accent hover:brightness-110",
  ghost: "border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-paper",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
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
      {arrow ? " →" : ""}
    </CtaButton>
  );
}
