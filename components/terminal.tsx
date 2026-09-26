"use client";

import { useEffect, useRef, useState } from "react";
import { site, terminal } from "@/content/site";

const CMD = terminal.command;
const LINES = terminal.lines.map((l) => [l.mark, l.label.padEnd(9), l.text, l.tool ? ` [${l.tool}]` : ""]);
const CHAR_MS = 14;
const LINE_PAUSE = 260;

/** A printed "run report". Types the command, then each line char by char, once in view. */
export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [cmdChars, setCmdChars] = useState(0);
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCmdChars(CMD.length);
      setLine(LINES.length);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStarted(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let t: ReturnType<typeof setTimeout>;
    if (cmdChars < CMD.length) {
      t = setTimeout(() => setCmdChars((c) => c + 1), cmdChars === 0 ? 500 : 45);
    } else if (line < LINES.length) {
      const total = LINES[line].join("").length;
      if (chars < total) t = setTimeout(() => setChars((c) => c + 1), CHAR_MS);
      else
        t = setTimeout(() => {
          setLine((l) => l + 1);
          setChars(0);
        }, LINE_PAUSE);
    }
    return () => clearTimeout(t);
  }, [started, cmdChars, line, chars]);

  const done = line >= LINES.length;

  return (
    <div ref={ref} className="rounded-2xl bg-slip pb-6 font-mono text-[12px] leading-relaxed ring-1 ring-ink/15 sm:text-[13px]">
      <div className="flex items-center justify-between border-b border-ink/15 px-5 py-4 text-[11px] uppercase tracking-[0.18em]">
        <span>Run report</span>
        <span className="text-muted">{terminal.title}</span>
      </div>
      <div className="min-h-[16rem] whitespace-pre-wrap break-words px-5 pt-5" aria-label="Run output">
        <div>
          <span className="text-accent">$ </span>
          {site.cli} {CMD.slice(0, cmdChars)}
          {!done && cmdChars < CMD.length && <span className="cursor">▍</span>}
        </div>
        {LINES.slice(0, line + 1).map((parts, i) => {
          if (cmdChars < CMD.length) return null;
          let left = i < line ? Infinity : chars;
          const [mark, label, text, tool] = parts.map((p) => {
            const s = p.slice(0, Math.max(0, left));
            left -= p.length;
            return s;
          });
          if (i === line && line >= LINES.length) return null;
          return (
            <div key={i}>
              <span className="font-bold text-accent">{mark}</span> <span className="font-bold">{label}</span>
              <span className="text-ink/75">{text}</span>
              <span className="text-muted">{tool}</span>
              {i === line && <span className="cursor">▍</span>}
            </div>
          );
        })}
        {done && (
          <div>
            <span className="text-accent">$ </span>
            <span className="cursor">▍</span>
          </div>
        )}
      </div>
    </div>
  );
}
