import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/project/project-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProjectContent } from "@/lib/types";

export function ProductsSection({
  label,
  heading,
  projects,
}: {
  label: string;
  heading: string;
  projects: ProjectContent[];
}) {
  return (
    <section className="bg-canvas-light py-24 text-ink-primary sm:py-32">
      <Container>
        <div className="section-heading">
          <SectionLabel>{label}</SectionLabel>
          <Reveal>
            <h2>{heading}</h2>
          </Reveal>
        </div>
        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
