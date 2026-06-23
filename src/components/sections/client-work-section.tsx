import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/project/project-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProjectContent } from "@/lib/types";

export function ClientWorkSection({
  label,
  heading,
  projects,
}: {
  label: string;
  heading: string;
  projects: ProjectContent[];
}) {
  return (
    <section className="bg-canvas-dark py-24 text-ink-inverse sm:py-32">
      <Container>
        <div className="section-heading section-heading-dark">
          <SectionLabel className="text-ink-inverse/65">{label}</SectionLabel>
          <Reveal>
            <h2>{heading}</h2>
          </Reveal>
        </div>
        <div className="[&_.group_span]:border-ink-inverse/15 [&_.group_p]:text-ink-inverse/55">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}
