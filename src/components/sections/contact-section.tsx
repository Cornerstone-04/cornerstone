import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import type { HomeContent } from "@/lib/types";

export function ContactSection({
  content,
}: {
  content: HomeContent["contact"];
}) {
  return (
    <section className="bg-brand-accent saturate-130 py-24 text-ink-primary sm:py-32">
      <Container>
        <Reveal className="mt-16 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            {content.heading}
          </h2>
          <div>
            <p className="text-lg leading-8">{content.description}</p>
            <Link
              className="button mt-8 bg-canvas-dark text-ink-inverse"
              href={content.action.href}
            >
              {content.action.label}
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
