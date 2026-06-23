import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import {
  getAboutContent,
  getExperienceContent,
  getHomeContent,
} from "@/lib/content";

const content = getAboutContent();

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function AboutPage() {
  const home = getHomeContent();

  return (
    <>
      <section className="bg-canvas-dark py-20 text-ink-inverse sm:py-28">
        <Container>
          <SectionLabel className="text-ink-inverse/60">{content.label}</SectionLabel>
          <Reveal>
            <h1 className="mt-16 max-w-6xl text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              {content.heading}
            </h1>
          </Reveal>
          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface-dark">
                <Image
                  src={content.portrait}
                  alt={content.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top grayscale"
                />
              </div>
            </Reveal>
            <Reveal className="space-y-6 pb-2">
              {content.introduction.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-xl leading-9 text-ink-inverse/65 sm:text-2xl sm:leading-10"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-canvas-light py-24 sm:py-32">
        <Container>
          <div className="section-heading">
            <SectionLabel>Principles</SectionLabel>
            <Reveal>
              <h2>How I approach the work.</h2>
            </Reveal>
          </div>
          <div className="grid border-t border-ink-primary/15 md:grid-cols-3">
            {content.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <article className="min-h-64 border-b border-ink-primary/15 py-8 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0">
                  <p className="font-mono text-[10px] text-ink-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-14 text-3xl font-medium tracking-[-0.04em]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-sm leading-7 text-ink-muted">
                    {principle.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 flex flex-wrap gap-3 border-t border-ink-primary/15 pt-8">
            {content.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-ink-primary/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em]"
              >
                {tool}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <ExperienceSection
        label={home.experience.label}
        heading={home.experience.heading}
        experience={getExperienceContent()}
      />
      <ContactSection content={home.contact} />
    </>
  );
}
