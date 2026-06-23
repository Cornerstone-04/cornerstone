import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCover } from "@/components/project/project-cover";
import { Reveal } from "@/components/ui/reveal";
import type { ProjectContent } from "@/lib/types";

export function ProjectCard({
  project,
  featured = false,
  index = 0,
}: {
  project: ProjectContent;
  featured?: boolean;
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.18)}>
      <article className="group/project">
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
          <ProjectCover
            project={project}
            priority={featured && index === 0}
            className={featured ? "aspect-[16/9]" : undefined}
          />
        </Link>
        <div className="grid gap-5 pt-6 sm:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
              <span>{project.category}</span>
              <span>/</span>
              <span>{project.role}</span>
            </div>
            <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-3">
              <h3 className="transition-transform duration-500 ease-out text-[clamp(1.8rem,3vw,2.65rem)] font-medium leading-none tracking-[-0.045em] group-hover/project:translate-x-1">
                {project.title}
              </h3>
              <ArrowUpRight className="size-5 transition-transform duration-500 ease-out group-hover/project:translate-x-2 group-hover/project:-translate-y-2" />
            </Link>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
              {project.shortDescription}
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2 sm:max-w-64 sm:justify-end">
            {project.technologies.slice(0, featured ? 4 : 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-ink-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors duration-300 group-hover/project:border-ink-primary/25"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
