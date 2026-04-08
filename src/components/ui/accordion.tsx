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

  // Split summary into sentences for line breaks
  const sentences = useMemo(
    () => summary.split(/(?<=\.)\s*/).filter((s) => s.trim().length > 0),
    [summary]
  );

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
  }, [summary, tools, sentences]);

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
      className="mb-1 border border-foreground text-foreground transition-all duration-300"
      data-state={active ? "open" : "closed"}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={active}
        aria-controls={panelId}
        onClick={handleToggle}
        onKeyDown={onKeyDown}
        className="flex cursor-pointer items-center justify-between p-4 text-sm md:text-base transition-all ease-linear hover:bg-foreground/5 group"
      >
        <h4 className="mb-0 font-bold tracking-tight group-hover:text-accent transition-colors">
          {position}
          <span className="font-normal text-foreground/60 ml-2">@ {company}</span>
        </h4>

        <div className="flex items-center gap-4">
          <h5 className="mb-0 whitespace-nowrap text-xs font-mono text-foreground/70">
            {period}
          </h5>
          <span className="font-bold text-accent text-lg">
            {active ? "−" : "+"}
          </span>
        </div>
      </div>

      <div
        id={panelId}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-foreground"
        style={{ maxHeight: active ? maxHeight : 0 }}
      >
        <div ref={contentRef} className="p-4 space-y-4">
          {/* Summary with line breaks */}
          <p className="text-sm text-foreground/80 leading-relaxed">
            {sentences.map((sentence, index) => (
              <React.Fragment key={index}>
                {sentence}
                {index < sentences.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={`${tool}-${index}`}
                className="text-xs font-mono font-bold text-accent border border-accent px-3 py-1 bg-accent/5"
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
