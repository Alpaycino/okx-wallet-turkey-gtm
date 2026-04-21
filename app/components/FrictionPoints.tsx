import { FRICTION_POINTS } from "@/lib/data";
import { Section } from "./Section";

export function FrictionPoints() {
  return (
    <Section
      id="friction"
      index={3}
      label="Friction"
      title="Four barriers to convert."
      kicker="Turkish users sit at one of the world's most active CEX markets — but with limited on-chain participation. These are the frictions the GTM plan dismantles."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {FRICTION_POINTS.map((f, i) => (
          <div key={i} className="card p-6 card-hover">
            <div className="flex items-start justify-between gap-4">
              <div className="font-mono text-[10px] text-okx-dim">
                F0{i + 1}
              </div>
              <span className="chip">Friction</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-okx-text">
              {f.title}
            </h3>
            <div className="mt-5 pt-5 border-t border-okx-border">
              <div className="micro-label mb-2" style={{ color: "#F6465D" }}>
                Problem
              </div>
              <p className="text-[14px] text-okx-text/90 leading-relaxed">
                {f.problem}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-okx-border">
              <div className="micro-label mb-2" style={{ color: "#0ECB81" }}>
                Solution
              </div>
              <p className="text-[14px] text-okx-text/90 leading-relaxed">
                {f.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
