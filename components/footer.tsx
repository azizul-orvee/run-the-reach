import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-deep text-on-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-16 sm:px-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-3xl text-accent sm:text-4xl">{site.motto}</p>
          <p className="mt-4 max-w-sm text-sm opacity-70">{site.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            LinkedIn ↗
          </a>
        </div>
      </div>
      <p
        aria-hidden
        className="font-display mt-12 select-none whitespace-nowrap px-5 text-[clamp(3rem,12vw,14rem)] font-medium leading-[0.8] tracking-[-0.05em] text-on-deep/10 sm:px-8"
      >
        {site.name}
      </p>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-on-deep/15 px-5 py-6 font-mono text-xs opacity-70 sm:flex-row sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{footer.builtOn}</span>
      </div>
    </footer>
  );
}
