import { FRAMEWORK_PHASES } from "@/lib/data";

/**
 * 6-Month gantt-style timeline visualizing the three phases across Month 1–6.
 * Dropped directly under the Framework cards; does not open a new Section.
 */
export function PhaseTimeline() {
  const barColors: Record<string, string> = {
    blue: "bg-okx-blue",
    green: "bg-okx-green",
    white: "bg-okx-text/80",
  };
  const labelColors: Record<string, string> = {
    blue: "text-okx-blue",
    green: "text-okx-green",
    white: "text-okx-text",
  };
  const dateRanges = ["May – Jun 2026", "Jul – Aug 2026", "Sep – Oct 2026"];

  return (
    <div className="mt-8 rounded-[18px] border border-okx-green/30 bg-okx-green/[0.04] p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-[20px] md:text-[22px] font-semibold text-okx-text leading-tight">
          Timeline
        </h3>
        <p className="mt-1 text-[13px] md:text-[14px] text-okx-muted leading-relaxed max-w-2xl">
          6-month strategic schedule. Phases run sequentially with hand-off
          overlaps between KOL, content, and product workstreams.
        </p>
      </div>

      {/* Gantt rows */}
      <div className="space-y-4">
        {FRAMEWORK_PHASES.map((p, i) => {
          const bar = barColors[p.accent] || barColors.blue;
          const label = labelColors[p.accent] || labelColors.blue;
          return (
            <div
              key={p.key}
              className="grid grid-cols-12 items-center gap-x-4 gap-y-2"
            >
              {/* Left label */}
              <div className="col-span-12 md:col-span-4 flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-md flex items-center justify-center font-mono text-[12px] font-semibold text-black ${bar}`}
                >
                  {i + 1}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className={`micro-label ${label}`}>{p.label}</span>
                  <span className="text-[14px] text-okx-text font-medium">
                    {p.title}
                  </span>
                </div>
              </div>

              {/* Bar track */}
              <div className="col-span-8 md:col-span-6">
                <div className="relative h-3 rounded-full bg-okx-green/[0.05] border border-okx-green/10">
                  <div
                    className={`absolute top-0 h-full rounded-full ${bar} opacity-80`}
                    style={{
                      left: `${(i * 100) / 3}%`,
                      width: `${100 / 3}%`,
                    }}
                  />
                </div>
              </div>

              {/* Date range */}
              <div className="col-span-4 md:col-span-2 text-[11px] md:text-[12px] font-mono text-okx-muted text-right">
                {dateRanges[i]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Month axis */}
      <div className="mt-6 pt-3 border-t border-okx-green/10 ml-0 md:ml-[33.333%] mr-0 md:mr-[16.666%]">
        <div className="grid grid-cols-6">
          {["M1", "M2", "M3", "M4", "M5", "M6"].map((m, i) => (
            <div
              key={i}
              className="text-[11px] font-mono text-okx-dim text-center"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
