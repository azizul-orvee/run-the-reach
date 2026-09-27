import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-deep text-on-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm opacity-70">{site.motto}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
            {footer.linkedinLabel} ↗
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-on-deep/15 px-5 py-5 font-mono text-xs opacity-70 sm:px-8">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
