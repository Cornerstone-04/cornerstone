import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { HomeContent } from "@/lib/types";

export function HeroSection({ content }: { content: HomeContent["hero"] }) {
  return (
    <section className="bg-canvas-dark pb-8 pt-4 text-ink-inverse sm:pb-12">
      <Container className="max-w-full">
        <div className="hero-stage relative min-h-[calc(100svh-7rem)] overflow-hidden bg-surface-dark">
          <div className="hero-image-reveal absolute inset-0">
            <Image
              src={content.portrait}
              alt={content.portraitAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-portrait object-cover object-[50%_28%] grayscale md:object-[90%_10%]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-canvas-dark)_98%,transparent)_0%,color-mix(in_srgb,var(--color-canvas-dark)_90%,transparent)_43%,color-mix(in_srgb,var(--color-canvas-dark)_18%,transparent)_78%,color-mix(in_srgb,var(--color-canvas-dark)_38%,transparent)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--color-canvas-dark)_80%,transparent)_0%,transparent_50%)] md:hidden" />

          <div className="relative flex min-h-[calc(100svh-7rem)] flex-col justify-between p-6 sm:p-10 lg:p-14">
            <Reveal delay={0.18}>
              <SectionLabel className="text-ink-inverse/70">{content.eyebrow}</SectionLabel>
            </Reveal>

            <div className="max-w-5xl py-20">
              <h1 className="text-[clamp(3.65rem,9vw,8.8rem)] font-medium leading-[0.84] tracking-[-0.072em]">
                {content.title.map((line, index) => (
                  <Reveal key={line} delay={0.36 + index * 0.12}>
                    <span className={index === 2 ? "text-ink-inverse/45" : ""}>{line}</span>
                  </Reveal>
                ))}
              </h1>
            </div>

            <Reveal delay={0.88} className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_360px]">
              <div className="flex flex-wrap gap-3">
                <Link className="button button-light motion-link" href={content.primaryAction.href}>
                  {content.primaryAction.label}
                  <ArrowRight />
                </Link>
                <Link
                  className="button button-ghost-dark motion-link"
                  href={content.secondaryAction.href}
                  target={content.secondaryAction.external ? "_blank" : undefined}
                  download="Cornerstone_Ephraim_Resume.pdf"
                >
                  {content.secondaryAction.label}
                  <Download />
                </Link>
              </div>
              <p className="max-w-sm text-base leading-7 text-ink-inverse/65 sm:text-lg">
                {content.description}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
