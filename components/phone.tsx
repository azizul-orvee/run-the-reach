import { hero } from "@/content/site";
import { Icon, type IconName } from "./icons";

/* The hero phone. Pure CSS: the notifications land in order once, then hold still. */

const kinds: Record<string, { icon: IconName; chip: string }> = {
  lead: { icon: "bell", chip: "bg-accent text-on-accent" },
  reply: { icon: "reply", chip: "bg-ink text-paper" },
  booked: { icon: "calendar", chip: "bg-good text-on-accent" },
};

export function Phone() {
  const { phone } = hero;
  return (
    <div className="relative mx-auto w-full max-w-[21rem]">
      <div className="absolute -inset-x-6 top-10 bottom-4 -z-10 rounded-[3rem] bg-highlight/45 rotate-3" aria-hidden />
      <div
        role="img"
        aria-label={phone.notifications.map((n) => `${n.app}: ${n.title}`).join(". ")}
        className="rounded-[2.75rem] border-[9px] border-ink bg-ink shadow-[0_30px_60px_-30px_rgba(31,26,21,0.55)]"
      >
        <div className="relative overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-paper-2 to-slip px-3.5 pb-6 pt-3">
          <div className="mx-auto h-5 w-24 rounded-full bg-ink" aria-hidden />
          <p className="font-display mt-5 text-center text-5xl tracking-[-0.04em] text-ink/85">{phone.time}</p>
          <div className="mt-6 space-y-2.5">
            {phone.notifications.map((n, i) => {
              const k = kinds[n.kind];
              return (
                <div
                  key={n.app}
                  className="notif rounded-2xl border border-ink/5 bg-slip/95 p-3 shadow-[0_6px_16px_-10px_rgba(31,26,21,0.35)]"
                  style={{ animationDelay: `${400 + i * 1000}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <span className={`relative grid h-6 w-6 shrink-0 place-items-center rounded-md ${k.chip}`}>
                      {n.kind === "lead" && <span className="ping absolute inset-0 rounded-md bg-accent" />}
                      <Icon name={k.icon} className="relative h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
                      {n.app}
                    </span>
                    <span className="shrink-0 text-[11px] text-muted">{n.when}</span>
                  </div>
                  <p className="mt-2 text-[14px] font-semibold leading-snug">{n.title}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-muted">{n.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="font-display mt-5 text-center text-lg font-semibold tracking-[-0.02em] text-muted">{phone.caption}</p>
    </div>
  );
}
