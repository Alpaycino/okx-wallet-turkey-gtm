import { FRAMEWORK_PHASES } from "@/lib/data";
import { Section } from "./Section";
import { PhaseTimeline } from "./PhaseTimeline";

const accents: Record<string, { dot: string; ring: string; label: string }> = {
  blue: {
    dot: "bg-okx-blue",
    ring: "ring-okx-blue/30",
    label: "text-okx-blue",
  },
  green: {
    dot: "bg-okx-green",
    ring: "ring-okx-green/30",
    label: "text-okx-green",
  },
  white: {
    dot: "bg-okx-text",
    ring: "ring-white/20",
    label: "text-okx-text",
  },
};

export function Framework() {
  return (
    <Section
      id="framework"
      index={5}
      label="Framework"
      icon="🗺️"
      title="Six months, three phases."
      kicker="Foundation sets the onboarding rails. Activation drives on-chain volume. Scale expands via partnerships and airdrop ecosystems."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {FRAMEWORK_PHASES.map((p, i) => {
          const a = accents[p.accent] || accents.blue;
          return (
            <a
              key={p.key}
              href={`#${p.key}`}
              className="card card-hover p-6 flex flex-col group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${a.dot}`} />
                  <span className={`micro-label ${a.label}`}>{p.label}</span>
                </div>
                <span className="font-mono text-[10px] text-okx-dim">
                  {p.months}
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-semibold tracking-tight leading-tight text-okx-text">
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] text-okx-muted leading-relaxed">
                {p.goal}
              </p>
              <div className="mt-6 pt-5 border-t border-okx-border">
                <div className="micro-label mb-3">Pillars</div>
                <ul className="space-y-2">
                  {p.pillars.map((pp, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-[13px] text-okx-text/90"
                    >
                      <span className="font-mono text-[10px] text-okx-dim w-5">
                        P{j + 1}
                      </span>
                      {pp}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-[11px] text-okx-muted group-hover:text-okx-text transition-colors">
                View details →
              </div>
            </a>
          );
        })}
      </div>

      <PhaseTimeline />
    </Section>
  );
}
