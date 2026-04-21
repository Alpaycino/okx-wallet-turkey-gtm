import { EXECUTIVE_SUMMARY } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="summary"
      className="section-anchor relative pt-16 md:pt-24 pb-16 md:pb-20"
    >
      <div className="okx-glow" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="chip">
            <span className="w-1.5 h-1.5 rounded-full bg-okx-green mr-2" />
            Draft · Q2 2026
          </span>
          <span className="chip">6-Month GTM</span>
          <span className="chip">Türkiye</span>
        </div>

        <h1 className="text-[40px] md:text-[64px] leading-[1.02] font-semibold tracking-tightest max-w-4xl">
          OKX Wallet
          <span className="text-okx-blue"> Türkiye</span>
          <br />
          Go-To-Market Strategy.
        </h1>

        <p className="mt-6 text-okx-muted text-base md:text-lg max-w-2xl leading-relaxed">
          Converting Türkiye's retail CEX traders into active on-chain OKX
          Wallet users through a localized CeDeFi playbook: education, KOL
          networks, and ecosystem partnerships.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-6">
            <div className="micro-label mb-3">Context</div>
            <p className="text-[15px] leading-relaxed text-okx-text/90">
              {EXECUTIVE_SUMMARY.intro}
            </p>
          </div>
          <div className="card p-6">
            <div className="micro-label mb-3">Plan</div>
            <p className="text-[15px] leading-relaxed text-okx-text/90">
              {EXECUTIVE_SUMMARY.plan}
            </p>
          </div>
        </div>

        <div className="mt-6 card p-6">
          <div className="micro-label mb-4">Deliverables</div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {EXECUTIVE_SUMMARY.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-mono text-[11px] text-okx-dim mt-1 w-6 shrink-0">
                  D{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] text-okx-text/90 leading-relaxed">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-6 rounded-[14px] border border-okx-blue/30 bg-okx-blue/5">
          <div className="micro-label mb-2" style={{ color: "#3D66FF" }}>
            Objective
          </div>
          <p className="text-lg md:text-xl font-medium text-okx-text leading-snug">
            {EXECUTIVE_SUMMARY.objective}
          </p>
        </div>
      </div>
    </section>
  );
}
