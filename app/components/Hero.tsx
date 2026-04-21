import { EXECUTIVE_SUMMARY } from "@/lib/data";
import { OkxWalletLogo } from "./OkxWalletLogo";

export function Hero() {
  return (
    <section
      id="summary"
      className="section-anchor relative pt-14 md:pt-20 pb-16 md:pb-20"
    >
      <div className="okx-glow" />
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="chip">
                <span className="w-1.5 h-1.5 rounded-full bg-okx-green mr-2" />
                Draft · Q2 2026
              </span>
              <span className="chip">6-Month GTM</span>
              <span className="chip">Türkiye</span>
            </div>

            <h1 className="text-[40px] md:text-[64px] leading-[1.02] font-semibold tracking-tightest">
              OKX Wallet
              <span className="text-okx-green"> Türkiye</span>
              <br />
              Go-To-Market Strategy.
            </h1>

            <p className="mt-6 text-okx-muted text-base md:text-lg max-w-2xl leading-relaxed">
              Converting Türkiye's retail CEX traders into active on-chain OKX
              Wallet users through a localized CeDeFi playbook: education, KOL
              networks, and ecosystem partnerships.
            </p>
          </div>

          {/* OKX Wallet brand slab, right-side, overlayer-style */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="inline-flex flex-col gap-5 rounded-2xl border border-okx-border bg-okx-surface px-8 py-8 w-full lg:max-w-[440px]">
              <OkxWalletLogo className="text-okx-text" width={260} />
              <span className="h-px w-full bg-okx-border" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-[0.18em] text-okx-muted font-semibold">
                  Case Study
                </div>
                <div className="text-[15px] text-okx-text font-semibold mt-1">
                  Türkiye Go-To-Market
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-7 rounded-[14px] border border-okx-green/25 bg-okx-green/[0.06]">
            <div className="micro-label mb-3" style={{ color: "#B9F25A" }}>
              Context
            </div>
            <p className="text-[17px] md:text-[18px] leading-relaxed text-okx-text">
              {EXECUTIVE_SUMMARY.intro}
            </p>
          </div>
          <div className="p-7 rounded-[14px] border border-okx-green/25 bg-okx-green/[0.06]">
            <div className="micro-label mb-3" style={{ color: "#B9F25A" }}>
              Plan
            </div>
            <p className="text-[17px] md:text-[18px] leading-relaxed text-okx-text">
              {EXECUTIVE_SUMMARY.plan}
            </p>
          </div>
        </div>

        <div className="mt-6 p-7 rounded-[14px] border border-okx-green/25 bg-okx-green/[0.06]">
          <div className="micro-label mb-4" style={{ color: "#B9F25A" }}>
            Deliverables
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {EXECUTIVE_SUMMARY.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-mono text-[12px] text-okx-green mt-1 w-7 shrink-0">
                  D{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] text-okx-text leading-relaxed">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-7 rounded-[14px] border border-okx-green/45 bg-okx-green/[0.12]">
          <div className="micro-label mb-2" style={{ color: "#B9F25A" }}>
            Objective
          </div>
          <p className="text-xl md:text-2xl font-medium text-okx-text leading-snug">
            {EXECUTIVE_SUMMARY.objective}
          </p>
        </div>
      </div>
    </section>
  );
}
