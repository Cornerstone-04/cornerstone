import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import type { ProjectContent } from "@/lib/types";

export function ProjectNavigation({
  current,
  projects,
}: {
  current: ProjectContent;
  projects: ProjectContent[];
}) {
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = ordered.findIndex((project) => project.slug === current.slug);
  const previous = ordered[(currentIndex - 1 + ordered.length) % ordered.length];
  const next = ordered[(currentIndex + 1) % ordered.length];

  return (
    <section className="bg-canvas-light pb-28 text-ink-primary sm:pb-36">
      <Container>
        <Reveal>
          <div className="grid gap-4 border-t border-ink-primary/15 pt-8 md:grid-cols-2">
            <ProjectNavLink direction="Previous project" project={previous} previous />
            <ProjectNavLink direction="Next project" project={next} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ProjectNavLink({
  direction,
  project,
  previous = false,
}: {
  direction: string;
  project: ProjectContent;
  previous?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group rounded-[28px] border border-ink-primary/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-surface-light sm:p-8 ${
        previous ? "" : "md:text-right"
      }`}
    >
      <p className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted ${
        previous ? "" : "md:justify-end"
      }`}
      >
        {previous ? (
          <ArrowLeft className="size-4 transition-transform duration-500 group-hover:-translate-x-1" />
        ) : null}
        {direction}
        {!previous ? (
          <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
        ) : null}
      </p>
      <h2 className="mt-6 text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.92] tracking-[-0.055em]">
        {project.title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-ink-muted">{project.industry}</p>
    </Link>
  );
}
