import { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  title,
  kicker,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-anchor py-10 md:py-14">
      <div className="mb-8 md:mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[11px] text-okx-dim">
            {String(index).padStart(2, "0")} /{" "}
            {String(15).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-okx-border" />
          <span className="micro-label">{label}</span>
        </div>
        <h2 className="text-3xl md:text-[42px] font-semibold tracking-tightest leading-[1.05] max-w-3xl">
          {title}
        </h2>
        {kicker && (
          <p className="mt-4 text-okx-muted text-[15px] md:text-base max-w-2xl leading-relaxed">
            {kicker}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
