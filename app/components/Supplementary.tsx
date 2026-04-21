import { SUPPLEMENTARY } from "@/lib/data";
import { Section } from "./Section";

export function Supplementary() {
  return (
    <Section
      id="supplementary"
      index={11}
      label="Supplementary"
      title="Deeper answers."
      kicker="Questions that frequently follow the framework — ecosystem priorities, CeDeFi integration, KOL budget split, and the growth hack."
    >
      <div className="space-y-3">
        {SUPPLEMENTARY.map((q, i) => (
          <div key={q.id} className="card p-6">
            <div className="flex items-start gap-4">
              <span className="font-mono text-[10px] text-okx-dim mt-1">
                Q0{i + 1}
              </span>
              <div className="flex-1">
                <h3 className="text-[18px] md:text-xl font-semibold text-okx-text tracking-tight">
                  {q.question}
                </h3>
                <p className="mt-3 text-[14px] text-okx-muted leading-relaxed">
                  {q.body}
                </p>

                {q.verticals && (
                  <div className="mt-5 grid md:grid-cols-3 gap-3">
                    {q.verticals.map((v, j) => (
                      <div
                        key={j}
                        className="p-4 rounded-xl bg-okx-bg border border-okx-border"
                      >
                        <div className="text-[14px] font-semibold text-okx-text">
                          {v.name}
                        </div>
                        <div className="mt-2 text-[12px] text-okx-muted leading-relaxed">
                          {v.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {q.steps && (
                  <div className="mt-5">
                    <div className="micro-label mb-3">CeDeFi Flow</div>
                    <div className="flex flex-col gap-2">
                      {q.steps.map((s, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 p-3 rounded-lg bg-okx-bg border border-okx-border"
                        >
                          <span className="w-6 h-6 rounded-full bg-okx-blue/10 border border-okx-blue/30 flex items-center justify-center font-mono text-[11px] text-okx-blue shrink-0">
                            {j + 1}
                          </span>
                          <span className="text-[13px] text-okx-text/90 leading-relaxed">
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {q.kpis && (
                  <div className="mt-5 grid md:grid-cols-2 gap-3">
                    {q.kpis.map((k, j) => (
                      <div
                        key={j}
                        className="p-4 rounded-xl bg-okx-bg border border-okx-border"
                      >
                        <div className="text-[13px] font-semibold text-okx-text">
                          {k.title}
                        </div>
                        <div className="mt-1 text-[12px] text-okx-muted leading-relaxed">
                          {k.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {q.loop && (
                  <div className="mt-5 p-4 rounded-xl border border-okx-blue/30 bg-okx-blue/5">
                    <div className="micro-label mb-2" style={{ color: "#3D66FF" }}>
                      Feedback Loop
                    </div>
                    <p className="text-[13px] text-okx-text/90 leading-relaxed">
                      {q.loop}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
