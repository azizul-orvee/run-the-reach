"use client";

import { useEffect, useRef, useState } from "react";
import { pipeline, site } from "@/content/site";

const STAGES = pipeline.stages;
const STAGE_MS = 950;

/**
 * Pipeline-run card. Stages activate one after another once scrolled into view:
 * spinner + progress bar while running, check when done. Instant under prefers-reduced-motion.
 * step: -1 = queued, 0..n-1 = that stage running, n = complete.
 */
export function PipelineRun() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(STAGES.length);
      return;
    }
    let t: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        t = setTimeout(() => setStep(0), 500);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (step < 0 || step >= STAGES.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), STAGE_MS);
    return () => clearTimeout(t);
  }, [step]);

  const complete = step >= STAGES.length;

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl bg-slip ring-1 ring-ink/15">
      <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {pipeline.run} · {pipeline.title}
          </p>
          <p className="mt-1 truncate font-mono text-xs">
            <span className="text-accent">$</span> {site.cli} {pipeline.command}
          </p>
        </div>
        <p
          aria-live="polite"
          className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${
            step < 0 ? "border-ink/15 text-muted" : "border-accent/50 text-accent"
          }`}
        >
          {complete ? (
            <>✓ {pipeline.complete}</>
          ) : step < 0 ? (
            "Queued"
          ) : (
            <>
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {pipeline.running}
            </>
          )}
        </p>
      </div>

      <ol>
        {STAGES.map((s, i) => {
          const done = step > i;
          const active = step === i;
          const outcome = s.mark === "→";
          return (
            <li
              key={s.label}
              className={`relative border-b border-ink/10 px-5 py-4 transition-opacity duration-500 last:border-b-0 ${
                done || active ? "" : "opacity-40"
              } ${outcome && done ? "bg-accent/10" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden>
                  {done ? (
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                        outcome ? "bg-accent text-on-accent" : "border border-accent text-accent"
                      }`}
                    >
                      {outcome ? "→" : "✓"}
                    </span>
                  ) : active ? (
                    <span className="stage-spinner h-5 w-5 rounded-full border-2 border-ink/15 border-t-accent" />
                  ) : (
                    <span className="h-5 w-5 rounded-full border border-ink/25" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    0{i + 1} · {s.label}
                  </p>
                  <p className={`mt-1 text-sm ${outcome && done ? "font-medium text-accent" : ""}`}>{s.text}</p>
                </div>
                {s.tool && (
                  <span className="hidden shrink-0 rounded-md border border-ink/15 px-2 py-0.5 font-mono text-[10px] text-muted sm:block">
                    {s.tool}
                  </span>
                )}
              </div>
              {active && <span className="stage-fill absolute bottom-0 left-0 h-[2px] bg-accent" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
