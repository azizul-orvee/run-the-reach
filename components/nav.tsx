import { nav, site } from "@/content/site";
import { Logo } from "./logo";
import { CtaButton } from "./section";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-nav text-sm font-medium uppercase tracking-[0.06em] underline-offset-4 hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <CtaButton href={site.booking} className="!px-5 !py-2.5">
          <span className="hidden sm:inline">{nav.cta}</span>
          <span className="sm:hidden">{nav.ctaShort}</span>
        </CtaButton>
      </div>
    </header>
  );
}
