import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectContent } from "@/lib/types";

const tones: Record<string, string> = {
  oxide:
    "from-cover-oxide-start via-cover-oxide-mid to-cover-oxide-end",
  signal:
    "from-cover-signal-start via-cover-signal-mid to-cover-signal-end",
  paper:
    "from-cover-paper-start via-cover-paper-mid to-cover-paper-end",
  sage: "from-cover-sage-start via-cover-sage-mid to-cover-sage-end",
  rose: "from-cover-rose-start via-cover-rose-mid to-cover-rose-end",
  amber:
    "from-cover-amber-start via-cover-amber-mid to-cover-amber-end",
  violet:
    "from-cover-violet-start via-cover-violet-mid to-cover-violet-end",
  blue: "from-cover-blue-start via-cover-blue-mid to-cover-blue-end",
};

export function ProjectCover({
  project,
  className,
  priority = false,
}: {
  project: ProjectContent;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "group/cover relative isolate aspect-video overflow-hidden rounded-[24px] bg-gradient-to-br p-6 sm:p-10",
        tones[project.cover.tone] ?? tones.oxide,
        className,
      )}
    >
      {project.cover.image ? (
        <>
          <Image
            src={project.cover.image}
            alt={project.cover.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover/cover:scale-[1.075]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-primary/25 via-ink-primary/35 to-ink-primary/80 transition-opacity duration-700 group-hover/cover:opacity-90" />
        </>
      ) : (
        <>
          <div className="cover-orbit absolute -right-[8%] -top-[25%] size-[70%] rounded-full border border-ink-inverse/20" />
          <div className="cover-orbit-reverse absolute -bottom-[45%] left-[8%] size-[80%] rounded-full border border-ink-inverse/15" />
          <div className="cover-grid absolute inset-0 opacity-30 [background-image:linear-gradient(color-mix(in_srgb,var(--color-ink-inverse)_12%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--color-ink-inverse)_12%,transparent)_1px,transparent_1px)] [background-size:48px_48px]" />
        </>
      )}

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-inverse/75">
          <span>{project.industry}</span>
          <span>{String(project.order).padStart(2, "0")}</span>
        </div>

        {!project.cover.image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[clamp(5rem,14vw,12rem)] font-medium uppercase leading-none tracking-[-0.08em] text-ink-inverse/15 transition-transform duration-[1200ms] ease-out group-hover/cover:scale-[1.12]">
              {project.title
                .split(" ")
                .map((word) => word[0])
              .join("")}
            </span>
          </div>
        )}

        <p className="max-w-[80%] text-[clamp(1.6rem,4vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-ink-inverse drop-shadow-sm transition-transform duration-[900ms] ease-out group-hover/cover:-translate-y-2">
          {project.title}
        </p>
      </div>
    </div>
  );
}
