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
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32">{children}</div>
    </section>
  );
}

/** Renders the last word of a headline in the accent color. */
export function LastWord({ text }: { text: string }) {
  const i = text.lastIndexOf(" ");
  if (i === -1) return <span className="text-accent">{text}</span>;
  return (
    <>
      {text.slice(0, i)} <span className="text-accent">{text.slice(i + 1)}</span>
    </>
  );
}

export function SectionHeader({
  num,
  label,
  title,
  sub,
  className = "mb-14 sm:mb-20",
  center = false,
}: {
  num: string;
  label: string;
  title: string;
  sub?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-4xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${center ? "justify-center" : ""}`}>
        <span className="text-accent">{num}</span>
        <span className="h-px w-8 bg-current opacity-40" />
        <span className="opacity-70">{label}</span>
      </p>
      <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1] tracking-[-0.035em] text-balance">
        <LastWord text={title} />
      </h2>
      {sub && <p className={`mt-6 max-w-2xl text-lg opacity-70 ${center ? "mx-auto" : ""}`}>{sub}</p>}
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
