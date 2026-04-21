import { KEY_TARGETS } from "@/lib/data";
import { Section } from "./Section";

export function KeyTargets() {
  return (
    <Section
      id="targets"
      index={2}
      label="Targets"
      title="Four KPIs define success."
      kicker="Every initiative ladders back to these numeric commitments. On-chain metrics only — no impression vanity."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {KEY_TARGETS.map((t, i) => (
          <div key={i} className="card card-hover p-6 flex flex-col">
            <span className="font-mono text-[10px] text-okx-dim">
              KPI {String(i + 1).padStart(2, "0")}
            </span>
            <div className="text-[13px] text-okx-muted mt-3">{t.metric}</div>
            <div className="mt-4 text-[28px] md:text-[32px] font-semibold tracking-tight leading-none text-okx-text">
              {t.target}
            </div>
            <div className="mt-2 text-[11px] text-okx-dim font-mono">
              from {t.current}
            </div>
            <p className="mt-5 text-[13px] text-okx-muted leading-relaxed">
              {t.note}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
