"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ResumeDownloadButton from "@/components/common/resume-download";
import { Container } from "@/components/layout";
import { Accordion } from "@/components/ui";
import { connect, timeline } from "@/lib/me";

export default function Home() {
  const [active, setActive] = useState<number | null>(0);
  const trunkExp = timeline.slice(0, 3);

  const handleToggle = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <Container className="py-16 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground mb-4">
              Cornerstone
            </h1>
            <h2 className="font-bold text-2xl md:text-3xl tracking-wider text-accent">
              Frontend Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-l-4 border-accent pl-6 mb-12 space-y-4"
          >
            <p className="text-base leading-relaxed max-w-md text-foreground/80">
              I build <span className="font-bold">clean, scalable interfaces</span> that people actually enjoy using. Specializing in React, Next.js, and modern web architecture.
            </p>
            <p className="text-sm leading-relaxed max-w-md text-foreground/70 font-mono">
              Performance-focused • Accessibility-first • Code quality obsessed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ResumeDownloadButton />
            <Link
              href="/projects"
              className="font-bold tracking-wider uppercase text-sm px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              View Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 mt-12"
          >
            {connect.slice(0, 4).map(({ id, social, icon, url }) => {
              const Icon = icon;
              const href =
                social === "Email"
                  ? "mailto:fortunecornerstone@gmail.com"
                  : `https://${url}`;

              return (
                <Link
                  key={`connect-${id}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors border border-foreground hover:border-accent p-3"
                  aria-label={social}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="border-4 border-foreground p-1">
            <Image
              src="/images/cornerstone.jpg"
              className="aspect-square object-cover"
              alt="Cornerstone Ephraim"
              width={280}
              height={280}
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="h-1 bg-foreground my-20" />

      {/* Experience Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline gap-4 mb-12">
          <h3 className="font-black text-4xl md:text-5xl tracking-tight text-foreground">
            Experience
          </h3>
          <span className="text-accent font-mono text-sm">— Recent roles</span>
        </div>

        <div className="space-y-4">
          {trunkExp.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion
                active={active === index}
                handleToggle={() => handleToggle(index)}
                exp={exp}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="border-2 border-foreground p-12 bg-accent/5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="font-black text-3xl mb-4 text-foreground">
          Let&apos;s build something great
        </h4>
        <p className="text-foreground/80 mb-6 max-w-lg leading-relaxed">
          Whether you need a pixel-perfect frontend, performance optimization, or a complete design system, I&apos;m ready to collaborate.
        </p>
        <Link
          href="/contact"
          className="inline-block font-bold tracking-wider uppercase text-sm px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors border border-foreground"
        >
          Get In Touch
        </Link>
      </motion.div>
    </Container>
  );
}
