"use client";

import { motion } from "motion/react";
import { Timeline } from "@/components/common";
import TechStack from "@/components/common/tech-stack";
import ConnectSection from "@/components/contact/connect-section";
import { Container } from "@/components/layout";
import { aboutMe, connect, timeline } from "@/lib/me";

export default function About() {
  return (
    <Container className="py-16">
      {/* Page Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-black text-5xl md:text-6xl tracking-tight text-foreground mb-4">
          About Me
        </h1>
        <div className="h-1 w-24 bg-accent" />
      </motion.div>

      {/* About Me Section */}
      <motion.div
        className="w-full mb-20 pb-20 border-b-2 border-foreground/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="space-y-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="border-l-4 border-accent pl-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              I&apos;m Cornerstone, and I&apos;ve always been the developer who can&apos;t stand clunky websites. So I decided to build better ones:{" "}
              <span className="font-bold text-accent">
                fast, intuitive, and built to last.
              </span>
            </p>
          </div>

          {aboutMe.map(({ id, text }) => (
            <div key={id}>
              <p className="leading-relaxed text-foreground/80 text-base">{text}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="w-full mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h2 className="font-black text-4xl tracking-tight text-foreground mb-3 flex items-baseline gap-3">
            <span className="font-mono text-accent">—</span>
            Full Timeline
          </h2>
          <p className="text-foreground/70 font-mono text-sm">Complete work history and experience</p>
        </div>

        <div className="space-y-1">
          {timeline.map((tl, index) => (
            <motion.div
              key={`timeline-${tl.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Timeline active={tl.endDate == null} timeline={tl} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <TechStack />
      </motion.div>

      {/* Connect Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ConnectSection items={connect} className="mt-20 pt-20 border-t-2 border-foreground/20" />
      </motion.div>
    </Container>
  );
}
