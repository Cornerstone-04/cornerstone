import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/project/project-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { HomeContent, ProjectContent } from "@/lib/types";

export function SelectedWorkSection({
  content,
  projects,
}: {
  content: HomeContent["selectedWork"];
  projects: ProjectContent[];
}) {
  return (
    <section className="bg-canvas-light py-24 text-ink-primary sm:py-32">
      <Container>
        <div className="section-heading">
          <SectionLabel>{content.label}</SectionLabel>
          <Reveal>
            <h2>{content.heading}</h2>
          </Reveal>
        </div>
        <ProjectGrid projects={projects} featured />
      </Container>
    </section>
  );
}
