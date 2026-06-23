import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { getContactContent } from "@/lib/content";

const content = getContactContent();

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
};

export default function ContactPage() {
  return (
    <section className="bg-canvas-light py-20 text-ink-primary sm:py-28">
      <Container>
        <SectionLabel>{content.label}</SectionLabel>
        <div className="mt-14 grid gap-16 lg:grid-cols-[0.8fr_1.5fr]">
          <Reveal className="flex flex-col justify-between gap-16">
            <div>
              <h1 className="max-w-2xl text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                {content.heading}
              </h1>
              <p className="mt-8 max-w-md text-lg leading-8 text-ink-muted">
                {content.description}
              </p>
            </div>
            <div>
              <Link
                href={`mailto:${content.email}`}
                className="text-lg font-medium underline decoration-ink-primary/20 underline-offset-8"
              >
                {content.email}
              </Link>
              <div className="mt-7 flex flex-wrap gap-5">
                {content.socials.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm"
                  >
                    {social.label}
                    <ArrowUpRight className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] bg-surface-light p-6 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-medium tracking-[-0.04em]">
                {content.form.heading}
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-ink-muted">
                {content.form.description}
              </p>
              <ContactForm submitLabel={content.form.submitLabel} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
