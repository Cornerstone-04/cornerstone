import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/project/project-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { getAllProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects | Cornerstone Ephraim",
  description:
    "Selected client work, product work, and digital experiences shaped by frontend engineering, product thinking, and clear communication.",
  path: "/projects",
  keywords: [
    "Frontend Projects",
    "Product Case Studies",
    "Client Work",
    "Digital Experiences",
    "Next.js Projects",
  ],
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-canvas-light pt-20 pb-28 text-ink-primary sm:pt-28 sm:pb-36">
      <Container>
        <SectionLabel>Projects</SectionLabel>
        <Reveal>
          <h1 className="mt-16 max-w-6xl text-[clamp(4rem,10vw,9.5rem)] leading-[0.84] font-medium tracking-[-0.075em]">
            Products, platforms, and digital experiences.
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-10 mb-24 ml-auto max-w-xl text-lg leading-8 text-ink-muted sm:mb-32">
            A collection of client work and independent products shaped by
            frontend engineering, product thinking, and clear communication.
          </p>
        </Reveal>
        <ProjectGrid projects={projects} />
      </Container>
    </div>
  );
}
