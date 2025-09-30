"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Experience = {
  startDate: string;
  endDate?: string | null;
  position: string;
  company: string;
  summary: string;
  tools: string[];
};

type AccordionProps = {
  exp: Experience;
  active: boolean;
  handleToggle: () => void;
};

export function Accordion({ handleToggle, active, exp }: AccordionProps) {
  const { startDate, endDate, position, company, summary, tools } = exp;

  // measure content height for smooth transitions
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => setMaxHeight(el.scrollHeight));
    ro.observe(el);
    setMaxHeight(el.scrollHeight);

    return () => ro.disconnect();
  }, [summary, tools]);

  const period = useMemo(
    () => `${startDate} - ${endDate || "Present"}`,
    [startDate, endDate]
  );

  // keyboard a11y for header
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  const panelId = useMemo(
    () => `acc-panel-${position.replace(/\s+/g, "-").toLowerCase()}`,
    [position]
  );

  return (
    <div
      className="mb-2 rounded-lg border border-zinc-200 text-zinc-700 transition-all duration-300 dark:border-zinc-800 dark:text-zinc-200"
      data-state={active ? "open" : "closed"}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={active}
        aria-controls={panelId}
        onClick={handleToggle}
        onKeyDown={onKeyDown}
        className="flex cursor-pointer items-center justify-between rounded-lg p-3 text-xs md:text-sm transition-all ease-linear hover:bg-zinc-100 dark:hover:bg-[#0f0f0f]"
      >
        <h4 className="mb-0 font-medium">
          {position} <span className="opacity-70">@ {company}</span>
        </h4>

        <div className="flex items-center gap-3">
          <h5 className="mb-0 whitespace-nowrap text-xs opacity-80">
            {period}
          </h5>
        </div>
      </div>

      <div
        id={panelId}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: active ? maxHeight : 0 }}
      >
        <div ref={contentRef} className="p-3">
          <p className="mb-0 leading-6 text-xs md:text-sm text-justify">{summary}</p>

          <div className="mt-4 flex flex-wrap gap-2 text-zinc-900 dark:text-zinc-100">
            {tools.map((tool, index) => (
              <span
                key={`${tool}-${index}`}
                className="text-xs font-medium underline underline-offset-4"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
