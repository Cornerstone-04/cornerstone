import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProjectContent } from "@/lib/types";

export function ProjectDetail({ project }: { project: ProjectContent }) {
  return (
    <section className="bg-canvas-light py-24 text-ink-primary sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <SectionLabel>Overview</SectionLabel>
          <Reveal>
            <p className="max-w-4xl text-[clamp(2rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              {project.summary}
            </p>
          </Reveal>
        </div>

        <div className="mt-28 grid gap-16 border-t border-ink-primary/15 pt-12 md:grid-cols-3">
          <Reveal>
            <DetailList title="Contribution" items={project.responsibilities} />
          </Reveal>
          <Reveal delay={0.06}>
            <DetailList title="Highlights" items={project.highlights} />
          </Reveal>
          <Reveal delay={0.12}>
            <DetailList title="Technology" items={project.technologies} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
        {title}
      </h2>
      <ul className="mt-8 border-t border-ink-primary/15">
        {items.map((item, index) => (
          <li
            key={item}
            className="flex gap-5 border-b border-ink-primary/15 py-4 text-base"
          >
            <span className="font-mono text-[10px] text-ink-secondary">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
