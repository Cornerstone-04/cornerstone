import { useState } from "react";
import { motion } from "motion/react";
import { Tech } from "@/lib/types";

export function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const Icon = tech.icon as any;
  const isPlaywright = tech.name === "Playwright";
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={tech.name}
      title={tech.name}
      className="group relative p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-all cursor-pointer overflow-visible focus:outline-none focus:ring-2 focus:ring-zinc-400/50 dark:focus:ring-zinc-600/50"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
      whileHover={{ y: -4 }}
      tabIndex={0}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-describedby={`tech-${index}`}
    >
      {/* Subtle gradient wash on hover */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
          tech.color ?? ""
        } opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
      />

      {/* Icon */}
      <div className="relative flex flex-col items-center gap-3 text-center">
        {isPlaywright ? (
          <div className="transition-all duration-300 group-hover:scale-110">
            {Icon && (
              <Icon
                className="w-12 h-12 text-zinc-700 dark:text-zinc-300"
                style={{ width: 48, height: 48 }}
              />
            )}
          </div>
        ) : (
          <div className="relative">
            {Icon && (
              <Icon className="text-5xl text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover:scale-110" />
            )}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
                tech.color ?? ""
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay rounded-md`}
            >
              {Icon && <Icon className="text-5xl text-white" />}
            </div>
          </div>
        )}
      </div>

      {/* Name under icon */}
      <p className="mt-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 text-center">
        {tech.name}
      </p>
    </motion.div>
  );
}
