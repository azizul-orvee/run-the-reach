import { hero } from "@/content/site";

/**
 * The concentric radar field: rings, crosshairs and a slow conic sweep.
 * Pure CSS/SVG — no JS. All motion is disabled under prefers-reduced-motion.
 */
export function RadarField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(circle,#000_30%,transparent_72%)] ${className}`}
    >
      <svg viewBox="-500 -500 1000 1000" className="absolute inset-0 h-full w-full text-ink" fill="none">
        {[120, 240, 360, 480].map((r) => (
          <circle key={r} r={r} stroke="currentColor" strokeOpacity={0.12} />
        ))}
        <line x1={-500} x2={500} stroke="currentColor" strokeOpacity={0.1} />
        <line y1={-500} y2={500} stroke="currentColor" strokeOpacity={0.1} />
      </svg>
      <div className="radar-sweep absolute inset-0 rounded-full" />
    </div>
  );
}

/** A pulsing amber dot. */
function Dot({ delay }: { delay: string }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="blip-ring absolute inset-0 rounded-full bg-accent" style={{ animationDelay: delay }} />
      <span className="relative h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}

/** Where each blip sits around the hero radar on large screens. */
const POSITIONS = ["left-[4%] top-[22%]", "right-[4%] top-[34%]", "left-[9%] top-[72%]", "right-[7%] top-[78%]"];

/**
 * Hero blips. Absolutely placed around the radar from `lg` up, where there is
 * room beside the headline; below that they sit in a grid under the CTA.
 */
export function RadarBlips({ variant }: { variant: "around" | "grid" }) {
  if (variant === "around") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {hero.blips.map((b, i) => (
          <div
            key={b.label}
            className={`blip absolute flex items-center gap-2.5 ${POSITIONS[i]}`}
            style={{ animationDelay: `${i * 2.6}s` }}
          >
            <Dot delay={`${i * 2.6}s`} />
            <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.12em]">
              {b.label} <span className="text-muted">· {b.meta}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul aria-hidden className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-2 lg:hidden">
      {hero.blips.map((b, i) => (
        <li
          key={b.label}
          className="blip flex items-center gap-2 rounded-lg border border-ink/10 bg-slip/60 px-2.5 py-2"
          style={{ animationDelay: `${i * 2.6}s` }}
        >
          <Dot delay={`${i * 2.6}s`} />
          <p className="min-w-0 font-mono text-[9px] uppercase leading-tight tracking-[0.1em]">
            {b.label} <span className="text-muted">· {b.meta}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
