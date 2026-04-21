import { COMMUNITY } from "@/lib/data";
import { Section } from "./Section";

export function Community() {
  return (
    <Section
      id="community"
      index={10}
      label="Community"
      title="The Learn → Retain flywheel."
      kicker="Every channel exists to pull users deeper into the loop — from first tutorial view to repeat on-chain activity."
    >
      <div className="card p-6">
        <div className="micro-label mb-6">5-Step Flywheel</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {COMMUNITY.flywheel.map((f, i) => (
            <div key={i} className="relative">
              <div className="p-4 rounded-xl bg-okx-bg border border-okx-border h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-okx-dim">
                    0{i + 1}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-okx-blue" />
                </div>
                <div className="text-[15px] font-semibold text-okx-text">
                  {f.step}
                </div>
                <div className="mt-2 text-[12px] text-okx-muted leading-snug">
                  {f.detail}
                </div>
              </div>
              {i < COMMUNITY.flywheel.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 text-okx-dim font-mono text-xs z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        {COMMUNITY.channels.map((c, i) => (
          <div key={i} className="card card-hover p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold text-okx-text">
                {c.name}
              </h3>
              <span className="chip">{c.cadence}</span>
            </div>
            <p className="mt-4 text-[13px] text-okx-muted leading-relaxed">
              {c.role}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 card p-6">
        <div className="micro-label mb-4">Retention Mechanisms</div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {COMMUNITY.retention.map((r, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-okx-dim mt-0.5 w-5 shrink-0">
                R{i + 1}
              </span>
              <span className="text-[14px] text-okx-text/90 leading-relaxed">
                {r}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
