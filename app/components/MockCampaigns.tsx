import { MOCK_CAMPAIGNS } from "@/lib/data";
import { Section } from "./Section";

export function MockCampaigns() {
  return (
    <Section
      id="mock-campaigns"
      index={12}
      label="Mock Campaigns"
      title="Two flagship campaigns, ready to brief."
      kicker="Concrete end-to-end programs that showcase how the framework executes across mechanics, rewards, KOL fanout, and measurement."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {MOCK_CAMPAIGNS.map((c, i) => (
          <div key={i} className="card p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-okx-dim">
                C0{i + 1}
              </span>
              <span className="chip">Proposed</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-okx-text tracking-tight leading-tight">
              {c.title}
            </h3>
            <p className="mt-2 text-[13px] text-okx-blue font-medium">
              {c.positioning}
            </p>
            <p className="mt-4 text-[14px] text-okx-muted leading-relaxed">
              {c.concept}
            </p>

            <div className="mt-5 pt-5 border-t border-okx-border">
              <div className="micro-label mb-3">Mechanics</div>
              <ul className="space-y-2">
                {c.mechanics.map((m, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[13px] text-okx-text/90"
                  >
                    <span className="font-mono text-[10px] text-okx-dim mt-0.5 w-5 shrink-0">
                      M{j + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-5 border-t border-okx-border">
              <div className="micro-label mb-3">Rewards</div>
              <div className="flex flex-wrap gap-1.5">
                {c.rewards.map((r, j) => (
                  <span key={j} className="chip">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-okx-border">
              <div className="micro-label mb-3 font-bold text-okx-text">KOL Fanout</div>
              <div className="flex flex-wrap gap-1.5">
                {c.kols.map((k, j) => (
                  <a
                    key={j}
                    href={`https://x.com/${k.replace(/^@/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip font-mono text-[15px] transition-colors hover:bg-okx-green/[0.18] hover:border-okx-green/50"
                  >
                    {k}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-okx-border">
              <div className="micro-label mb-3">Metrics</div>
              <div className="grid grid-cols-2 gap-2">
                {c.metrics.map((m, j) => (
                  <div
                    key={j}
                    className="p-3 rounded-lg inner-cell text-[12px] text-okx-text/90 leading-snug"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
