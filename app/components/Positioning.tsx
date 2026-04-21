import { POSITIONING } from "@/lib/data";
import { Section } from "./Section";

export function Positioning() {
  return (
    <Section
      id="positioning"
      index={4}
      label="Positioning"
      icon="🧭"
      title={POSITIONING.headline}
      kicker={POSITIONING.oneLiner}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:col-span-2 card p-6">
          <div className="micro-label mb-4" style={{ color: "#F6465D" }}>
            What it should not be
          </div>
          <ul className="space-y-3">
            {POSITIONING.shouldNotBe.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-3 pb-3 border-b border-okx-border last:border-b-0 last:pb-0"
              >
                <span className="text-okx-red/80 font-mono text-[12px] mt-0.5">
                  ×
                </span>
                <span className="text-[14px] text-okx-muted line-through decoration-okx-border">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 card p-6">
          <div className="micro-label mb-4" style={{ color: "#B9F25A" }}>
            OKX Wallet advantage
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {POSITIONING.advantages.map((a, i) => (
              <div
                key={i}
                className="p-5 rounded-xl inner-cell"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-okx-dim">
                    A0{i + 1}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-okx-blue" />
                </div>
                <h4 className="text-[15px] font-semibold text-okx-text leading-tight">
                  {a.title}
                </h4>
                <p className="mt-2 text-[13px] text-okx-muted leading-relaxed">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
