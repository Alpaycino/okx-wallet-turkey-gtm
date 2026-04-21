import { KOL_CATEGORIES, KOL_ONBOARDING } from "@/lib/data";
import { Section } from "./Section";

export function KOLs() {
  return (
    <Section
      id="kols"
      index={9}
      label="KOL Ecosystem"
      title="Four tiers. One network."
      kicker="The KOL ecosystem is segmented by content purpose — every partner is measured against on-chain KPIs, not impressions."
    >
      <div className="space-y-3">
        {KOL_CATEGORIES.map((cat, i) => (
          <div key={i} className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-5 border-b border-okx-border">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-okx-dim">
                    G0{i + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-okx-text">
                    {cat.category}
                  </h3>
                </div>
                <p className="mt-2 text-[13px] text-okx-muted">{cat.focus}</p>
              </div>
              <span className="chip self-start md:self-auto">
                {cat.cadence}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {cat.kols.map((k, j) => (
                <div
                  key={j}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-okx-bg border border-okx-border"
                >
                  <span className="font-mono text-[12px] text-okx-text">
                    {k.handle}
                  </span>
                  {k.reach !== "—" && (
                    <span className="font-mono text-[10px] text-okx-dim">
                      {k.reach}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="card p-6">
          <div className="micro-label mb-4">Onboarding Flow</div>
          <ol className="space-y-3">
            {KOL_ONBOARDING.steps.map((s, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-okx-blue/10 border border-okx-blue/30 flex items-center justify-center font-mono text-[11px] text-okx-blue">
                  {i + 1}
                </span>
                <span className="text-[14px] text-okx-text">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="card p-6">
          <div className="micro-label mb-4">Compensation</div>
          <div className="space-y-3">
            {KOL_ONBOARDING.compensation.map((c, i) => (
              <div
                key={i}
                className="pb-3 border-b border-okx-border last:border-b-0 last:pb-0"
              >
                <div className="text-[13px] font-semibold text-okx-text">
                  {c.title}
                </div>
                <div className="text-[12px] text-okx-muted mt-1 leading-relaxed">
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="micro-label mb-4">Quality Control</div>
          <ol className="space-y-3">
            {KOL_ONBOARDING.qc.map((s, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-okx-green/10 border border-okx-green/30 flex items-center justify-center font-mono text-[11px] text-okx-green">
                  {i + 1}
                </span>
                <span className="text-[14px] text-okx-text">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
