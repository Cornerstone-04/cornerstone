import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { ExperienceContent } from "@/lib/types";

export function ExperienceSection({
  label,
  heading,
  experience,
}: {
  label: string;
  heading: string;
  experience: ExperienceContent;
}) {
  return (
    <section className="bg-surface-light py-24 text-ink-primary sm:py-32">
      <Container>
        <div className="section-heading">
          <SectionLabel>{label}</SectionLabel>
          <Reveal>
            <h2>{heading}</h2>
          </Reveal>
        </div>
        <div className="border-t border-ink-primary/15">
          {experience.items.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.06}>
              <article className="grid gap-5 border-b border-ink-primary/15 py-8 md:grid-cols-[1fr_1fr_2fr_auto] md:items-start md:py-10">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.035em]">{item.company}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.role}</p>
                </div>
                <p className="max-w-2xl text-base leading-7 text-ink-muted">
                  {item.description}
                </p>
                {item.url && (
                  <Link
                    href={item.url}
                    target="_blank"
                    aria-label={`Visit ${item.company}`}
                    className="rounded-full border border-ink-primary/15 p-3 transition-colors hover:bg-ink-primary hover:text-ink-inverse"
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
