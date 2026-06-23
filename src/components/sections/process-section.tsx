import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { HomeContent } from "@/lib/types";

export function ProcessSection({ content }: { content: HomeContent["process"] }) {
  return (
    <section className="bg-canvas-dark py-24 text-ink-inverse sm:py-32">
      <Container>
        <div className="section-heading section-heading-dark">
          <SectionLabel className="text-ink-inverse/65">{content.label}</SectionLabel>
          <Reveal>
            <h2>{content.heading}</h2>
          </Reveal>
        </div>
        <div className="grid border-t border-ink-inverse/15 md:grid-cols-4">
          {content.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="min-h-64 border-b border-ink-inverse/15 py-7 md:border-b-0 md:border-r md:px-7 first:pl-0 last:border-r-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-inverse/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-3 text-base text-ink-inverse/55">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
