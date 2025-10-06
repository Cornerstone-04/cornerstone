"use client";

import { motion } from "motion/react";
import { technologies } from "@/lib/me";

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
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              const isPlaywright = tech.name === "Playwright";

              return (
                <motion.div
                  key={index}
                  className="group relative p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-all cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.03,
                  }}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative flex flex-col items-center gap-3 text-center">
                    {isPlaywright ? (
                      <div
                        title={tech.name}
                        className="transition-all duration-300 group-hover:scale-110"
                      >
                        <Icon
                          className="w-12 h-12 text-zinc-700 dark:text-zinc-300"
                          style={{ width: "48px", height: "48px" }}
                        />
                      </div>
                    ) : (
                      <div title={tech.name} className="relative">
                        {Icon && (
                          <Icon className="text-5xl text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover:scale-110" />
                        )}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay`}
                        >
                          {Icon && <Icon className="text-5xl text-white" />}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
