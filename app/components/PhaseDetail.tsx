import { PhaseTask, FRAMEWORK_PHASES } from "@/lib/data";
import { Section } from "./Section";

export function PhaseDetail({
  id,
  index,
  phaseKey,
  tasks,
}: {
  id: string;
  index: number;
  phaseKey: "phase-1" | "phase-2" | "phase-3";
  tasks: PhaseTask[];
}) {
  const phase = FRAMEWORK_PHASES.find((p) => p.key === phaseKey)!;
  const accentDot =
    phase.accent === "blue"
      ? "bg-okx-blue"
      : phase.accent === "green"
        ? "bg-okx-green"
        : "bg-okx-text";
  const accentText =
    phase.accent === "blue"
      ? "text-okx-blue"
      : phase.accent === "green"
        ? "text-okx-green"
        : "text-okx-text";

  return (
    <Section
      id={id}
      index={index}
      label={`${phase.label} · ${phase.months}`}
      title={phase.title}
      kicker={phase.goal}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className={`w-2 h-2 rounded-full ${accentDot}`} />
        <span className={`micro-label ${accentText}`}>{phase.label}</span>
        <span className="font-mono text-[11px] text-okx-dim">
          {tasks.length} initiatives
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tasks.map((t, i) => (
          <div key={i} className="card card-hover p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] text-okx-dim">
                {phase.label.split(" ")[1]}.{String(i + 1).padStart(2, "0")}
              </span>
              {t.due && (
                <span className="font-mono text-[10px] text-okx-dim">
                  {t.due}
                </span>
              )}
            </div>
            <h3 className="text-[15px] font-semibold text-okx-text leading-snug">
              {t.title}
            </h3>
            <p className="mt-2 text-[13px] text-okx-muted leading-relaxed">
              {t.description}
            </p>
            {t.kols && t.kols.length > 0 && (
              <div className="mt-4 pt-4 border-t border-okx-border">
                <div className="micro-label mb-2">KOLs</div>
                <div className="flex flex-wrap gap-1.5">
                  {t.kols.map((k, j) => (
                    <span key={j} className="chip font-mono text-[11px]">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
