import { PAST_CAMPAIGNS } from "@/lib/data";
import { Section } from "./Section";

export function PastCampaigns() {
  return (
    <Section
      id="past-campaigns"
      index={13}
      label="Proof of Work"
      title="Past campaigns I've executed."
      kicker="Reference campaigns showing the operating model in practice, across partner integrations, ecosystem launches, and sports collabs."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {PAST_CAMPAIGNS.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-6 flex flex-col group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-okx-dim">
                R0{i + 1}
              </span>
              <span className="font-mono text-[11px] text-okx-muted group-hover:text-okx-blue transition-colors">
                View on X ↗
              </span>
            </div>
            <h3 className="text-[18px] font-semibold text-okx-text tracking-tight leading-tight">
              {c.title}
            </h3>
            <p className="mt-2 text-[13px] text-okx-muted leading-relaxed">
              {c.note}
            </p>
            <div className="mt-4 pt-4 border-t border-okx-border">
              <div className="font-mono text-[10px] text-okx-dim truncate">
                {c.url.replace("https://", "")}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
