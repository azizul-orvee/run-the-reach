import { footer, site } from "@/content/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-deep text-on-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Logo />
          <p className="mt-2 text-sm opacity-70">{site.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <nav aria-label="Footer" className="mb-2 flex flex-wrap gap-x-5 gap-y-2">
            {footer.links.map((l) => (
              <a key={l.href} href={l.href} className="font-semibold underline-offset-4 hover:underline">
                {l.label}
              </a>
            ))}
          </nav>
          <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            {footer.linkedinLabel} ↗
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-on-deep/15 px-4 py-5 text-xs opacity-60 sm:px-8">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
