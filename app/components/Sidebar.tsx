"use client";

import { useEffect, useState } from "react";
import { NAV_SECTIONS } from "@/lib/data";

export function Sidebar() {
  const [active, setActive] = useState<string>(NAV_SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    NAV_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 sticky top-0 h-screen border-r border-okx-border bg-okx-bg z-20">
      <div className="px-6 pt-8 pb-6 border-b border-okx-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-okx-text flex items-center justify-center">
            <span className="text-okx-bg font-black text-sm tracking-tight">
              A
            </span>
          </div>
          <span className="text-okx-muted text-xs">×</span>
          <div className="w-8 h-8 rounded-md bg-okx-blue flex items-center justify-center">
            <span className="text-white font-black text-sm tracking-tight">
              O
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-[13px] font-semibold text-okx-text leading-tight">
            Alpay × OKX Wallet
          </div>
          <div className="text-[11px] text-okx-muted mt-1 leading-tight">
            Türkiye GTM — 6 Month Plan
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto scroll-hint px-3 py-4">
        <div className="micro-label px-3 mb-2">Sections</div>
        <ul className="space-y-0.5">
          {NAV_SECTIONS.map((s, i) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`group flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors ${
                    isActive
                      ? "bg-okx-card text-okx-text"
                      : "text-okx-muted hover:text-okx-text hover:bg-okx-surface"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] w-5 ${
                      isActive ? "text-okx-blue" : "text-okx-dim"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 truncate">{s.label}</span>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-okx-blue" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6 py-5 border-t border-okx-border">
        <div className="micro-label mb-1">Prepared by</div>
        <div className="text-[13px] text-okx-text font-medium">Alpay</div>
        <div className="text-[11px] text-okx-muted mt-0.5">
          aktuh14@gmail.com
        </div>
      </div>
    </aside>
  );
}
