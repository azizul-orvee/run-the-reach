import type { LegalDoc } from "@/content/legal";
import { PageHeader } from "./section";

/* Renders a legal document from content/legal.ts: contents list (sticky on lg+) beside readable prose. */

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function LegalPage({ doc, related }: { doc: LegalDoc; related: { label: string; href: string } }) {
  return (
    <>
      <PageHeader tag={doc.tag} title={doc.title}>
        <p className="mt-5 text-[15px] text-muted">Last updated {doc.updated}</p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="Contents" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Contents</p>
            <ol className="mt-4 space-y-2.5 text-[15px]">
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${slug(s.heading)}`} className="text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 max-w-[68ch]">
          <div className="space-y-4 text-lg">
            {doc.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {doc.sections.map((s) => (
            <section key={s.heading} id={slug(s.heading)} className="mt-12 border-t border-ink/10 pt-8">
              <h2 className="font-display text-[1.6rem] leading-tight tracking-[-0.03em]">{s.heading}</h2>
              <div className="mt-4 space-y-4 text-ink/85">
                {s.body.map((b, i) =>
                  typeof b === "string" ? (
                    <p key={i}>{b}</p>
                  ) : (
                    <ul key={i} className="list-disc space-y-2 pl-5 marker:text-accent">
                      {b.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}

          <p className="mt-14 border-t border-ink/10 pt-8">
            See also:{" "}
            <a href={related.href} className="font-semibold underline decoration-accent decoration-2 underline-offset-4">
              {related.label}
            </a>
          </p>
        </article>
      </div>
    </>
  );
}
