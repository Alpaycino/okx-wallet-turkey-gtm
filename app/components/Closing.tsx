import { CLOSING } from "@/lib/data";
import { Section } from "./Section";

export function Closing() {
  return (
    <Section
      id="recommendations"
      index={15}
      label="Closing"
      title={CLOSING.headline}
      kicker="The operating principles that hold the 6-month plan together."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CLOSING.principles.map((p, i) => (
          <div key={i} className="card card-hover p-5 flex items-start gap-4">
            <span className="font-mono text-[11px] text-okx-blue mt-0.5 w-6 shrink-0">
              0{i + 1}
            </span>
            <span className="text-[14px] text-okx-text leading-relaxed">
              {p}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-8 rounded-[14px] border border-okx-blue/30 bg-gradient-to-br from-okx-blue/10 via-okx-card to-okx-card">
        <div className="micro-label mb-3" style={{ color: "#3D66FF" }}>
          The Rule
        </div>
        <p className="text-lg md:text-[22px] font-medium text-okx-text leading-snug tracking-tight">
          {CLOSING.rule}
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-okx-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-[13px] text-okx-text font-medium">
            Prepared by Alpay · April 2026
          </div>
          <div className="text-[12px] text-okx-muted mt-1">
            OKX Wallet Türkiye — 6-Month Go-To-Market Strategy
          </div>
        </div>
        <a
          href="mailto:aktuh14@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-okx-blue text-white text-[13px] font-medium hover:bg-okx-blueSoft transition-colors"
        >
          Contact →
        </a>
      </div>
    </Section>
  );
}
