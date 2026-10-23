import { nav, site } from "@/content/site";
import { Logo } from "./logo";
import { CtaButton } from "./section";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="/" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium underline-offset-4 hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
        <CtaButton href={site.booking} className="!min-h-11 !px-5 !py-2 !text-sm">
          {site.cta}
        </CtaButton>
      </div>
    </header>
  );
}
