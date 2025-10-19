"use client";

import { motion } from "motion/react";
import { technologies } from "@/lib/me";
import { TechCard } from "./tech-card";
import { Tech } from "@/lib/types";

export default function TechStack() {
  return (
    <motion.div
      className="w-full mb-16 mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
        <motion.h2
          className="w-full md:w-1/5 font-semibold text-lg text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="w-full md:w-4/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            Technologies and tools I work with to build modern web applications
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {technologies.map((tech: Tech, index: number) => (
              <TechCard tech={tech} index={index} key={tech.name ?? index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
