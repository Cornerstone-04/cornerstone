import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectDetail } from "@/components/project/project-detail";
import { ProjectHero } from "@/components/project/project-hero";
import { getAllProjects, getHomeContent, getProjectBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetail project={project} />
      <ContactSection content={getHomeContent().contact} />
    </>
  );
}
