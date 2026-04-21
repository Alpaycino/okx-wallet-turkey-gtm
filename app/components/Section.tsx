import { ReactNode } from "react";

export function Section({
  id,
  index: _index,
  label,
  title,
  kicker,
  icon: _icon,
  children,
}: {
  id: string;
  index?: number;
  label: string;
  title: string;
  kicker?: string;
  icon?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-anchor py-6 md:py-8">
      <div className="rounded-[20px] border border-okx-green/25 bg-okx-green/[0.03] p-6 md:p-10">
        <div className="mb-8 md:mb-10">
          <div className="mb-4 text-okx-muted uppercase tracking-[0.18em] text-[13px] md:text-[14px] font-bold">
            {label}
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
      </div>
    </section>
  );
}
