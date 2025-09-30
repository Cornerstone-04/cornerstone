import Image from "next/image";
import Link from "next/link";
import React from "react";

type TimelineItem = {
  startDate: string;
  endDate?: string | null;
  position: string;
  company: string;
  url?: string;
  logo?: string;
  summary: string;
};

interface TimelineProps {
  active: boolean;
  timeline: TimelineItem;
}

export function Timeline({ active, timeline }: TimelineProps) {
  const { startDate, endDate, position, company, url, logo, summary } =
    timeline;

  const Company = () =>
    url ? (
      <Link
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="underline decoration-blue-500/70 underline-offset-4 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {company}
      </Link>
    ) : (
      <span
        className="underline decoration-dotted decoration-zinc-400 underline-offset-4 text-zinc-800 dark:text-zinc-200"
        title={company}
      >
        {company}
      </span>
    );

  return (
    <div className="w-full flex justify-start gap-7 border-l pb-8 last:pb-16 border-zinc-200 dark:border-zinc-800">
      {/* Timeline dot */}
      <div className="relative">
        <div
          className={`absolute top-0 -left-2 h-4 w-4 aspect-square rounded-sm
            ${active ? "bg-blue-500" : "bg-zinc-800 dark:bg-zinc-300"}`}
          aria-hidden
        />
        {active && (
          <div
            className="absolute top-0 -left-2 h-4 w-4 aspect-square rounded-sm bg-blue-500/60 animate-ping"
            aria-hidden
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-y-2 text-zinc-800 dark:text-zinc-200">
        <div>
          {logo ? (
            <Image
              src={logo}
              alt={`${company} logo`}
              width={60}
              height={60}
              className="rounded ring-1 ring-zinc-200 dark:ring-zinc-800"
            />
          ) : (
            <div
              className="h-[60px] w-[60px] rounded bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-800 grid place-items-center text-xs text-zinc-500"
              aria-label={`${company} logo placeholder`}
            >
              {company[0] ?? "•"}
            </div>
          )}
        </div>

        <div className="flex items-center">
          <h4 className="text-md font-semibold">
            <span>{position} @ </span>
            <Company />
          </h4>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-zinc-600 dark:text-zinc-400">
            {startDate} - {endDate || "Present"}
          </p>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}
