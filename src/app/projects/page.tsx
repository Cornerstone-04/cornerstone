"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Project from "@/components/common/project";
import { Container } from "@/components/layout";
import { projects } from "@/lib/me";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="py-16">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-black text-5xl md:text-6xl tracking-tight text-foreground mb-4">
          Projects
        </h1>
        <div className="h-1 w-24 bg-accent" />
      </motion.div>

      <div className="w-full flex flex-col gap-16">
        {projects.map((project, index) => {
          const works = project.works;
          return (
            <motion.div
              className="w-full border-b-2 border-foreground/20 pb-16 last:border-b-0"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="font-black text-3xl md:text-4xl tracking-tight text-foreground mb-12 flex items-baseline gap-3">
                <span className="font-mono text-accent">—</span>
                {project.title}
              </h2>

              <div className="w-full grid gap-6">
                {works.map((work, idx) => (
                  <motion.div
                    key={`project-${work.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <Project type={project.type} {...work} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
