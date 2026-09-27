import { loop } from "@/content/site";

/** Arrowheads sit at the diagonals, pointing clockwise around the ring. */
const ARROWS = [
  { x: 291.9, y: 108.1, r: 45 },
  { x: 291.9, y: 291.9, r: 135 },
  { x: 108.1, y: 291.9, r: 225 },
  { x: 108.1, y: 108.1, r: 315 },
];

/** Step card placement around the ring, clockwise from 12 o'clock. */
const SEATS = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];

function Step({ i, name, body }: { i: number; name: string; body: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-slip p-4">
      <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        Step {i + 1}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{name}</h3>
      <p className="mt-1.5 text-sm text-muted">{body}</p>
    </div>
  );
}

/**
 * The loop, drawn as a ring on md+ and as a stack with a return arrow below it.
 * Same content either way.
 */
export function LoopDiagram() {
  return (
    <>
      {/* Ring */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-3xl md:block">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-accent" fill="none" aria-hidden>
          <circle cx={200} cy={200} r={130} stroke="currentColor" strokeOpacity={0.35} strokeDasharray="3 7" />
          <circle cx={200} cy={200} r={168} stroke="currentColor" strokeOpacity={0.12} />
          {ARROWS.map((a) => (
            <polygon
              key={a.r}
              points="0,-4.5 10,0 0,4.5"
              fill="currentColor"
              fillOpacity={0.55}
              transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-display text-xl font-semibold leading-tight tracking-tight text-balance">{loop.center}</p>
          <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-muted">
            {loop.footnote}
          </p>
        </div>
        {loop.steps.map((s, i) => (
          <div key={s.name} className={`absolute w-[15.5rem] ${SEATS[i]}`}>
            <Step i={i} name={s.name} body={s.body} />
          </div>
        ))}
      </div>

      {/* Stack */}
      <div className="mx-auto max-w-md md:hidden">
        {loop.steps.map((s, i) => (
          <div key={s.name}>
            <Step i={i} name={s.name} body={s.body} />
            {i < loop.steps.length - 1 && <div className="mx-auto h-5 w-px bg-accent/30" aria-hidden />}
          </div>
        ))}
        <div className="mx-auto h-5 w-px bg-accent/30" aria-hidden />
        <p className="rounded-full border border-dashed border-accent/40 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          ↻ {loop.footnote}
        </p>
      </div>
    </>
  );
}
