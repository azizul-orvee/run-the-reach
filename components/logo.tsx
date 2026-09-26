import { site } from "@/content/site";

/**
 * The mark: a hairline frame, open at one corner, with the leg of a fine-stroked "R" running through the gap — reach passing the boundary.
 * Inherits color via currentColor.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className={className}>
      <path d="M56 42 V8 H8 V56 H42" stroke="currentColor" strokeWidth={2} strokeLinejoin="miter" />
      <path d="M21 47 V17 H34 A8.5 8.5 0 0 1 34 34 H21 M33 34 L59 60" stroke="currentColor" strokeWidth={4} strokeLinejoin="miter" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3.5">
      <LogoMark className="h-9 w-9 text-accent" />
      <span className="text-[12px] font-medium uppercase tracking-[0.34em]">{site.name}</span>
    </span>
  );
}
