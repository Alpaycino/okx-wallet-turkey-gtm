import { SUCCESS_METRICS } from "@/lib/data";
import { Section } from "./Section";

const accents = ["text-okx-blue", "text-okx-green", "text-okx-text"];
const dots = ["bg-okx-blue", "bg-okx-green", "bg-okx-text"];

export function SuccessMetrics() {
  return (
    <Section
      id="metrics"
      index={14}
      label="Success Metrics"
      title="Three checkpoints, one trajectory."
      kicker="Month 2 benchmarks execution quality. Month 4 confirms full-cycle signal. Month 6 evaluates conversion depth and retention."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SUCCESS_METRICS.map((b, i) => (
          <div key={i} className="card p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${dots[i]}`} />
              <span className={`micro-label ${accents[i]}`}>{b.bucket}</span>
            </div>
            <p className="text-[13px] text-okx-muted leading-relaxed mb-5">
              {b.subtitle}
            </p>
            <div className="space-y-3 pt-3 border-t border-okx-border">
              {b.items.map((it, j) => (
                <div
                  key={j}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-[13px] text-okx-muted leading-tight">
                    {it.label}
                  </span>
                  <span className="font-mono text-[13px] font-semibold text-okx-text whitespace-nowrap">
                    {it.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
