import { ProjectCard } from "@/components/project/project-card";
import type { ProjectContent } from "@/lib/types";

export function ProjectGrid({
  projects,
  featured = false,
}: {
  projects: ProjectContent[];
  featured?: boolean;
}) {
  return (
    <div className={featured ? "grid gap-20" : "grid gap-x-8 gap-y-16 md:grid-cols-2"}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          featured={featured}
          index={index}
        />
      ))}
    </div>
  );
}
