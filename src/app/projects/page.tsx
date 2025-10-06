"use client";

import Project from "@/components/common/project";
import { Container } from "@/components/layout";
import { projects } from "@/lib/me";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LuInfo } from "react-icons/lu";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="py-12">
      <div className="w-full flex flex-col gap-12">
        {projects.map((project, index) => {
          const works = project.works;
          return (
            <motion.div
              className="w-full flex flex-col md:flex-row align-baseline  gap-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="font-semibold text-lg dark:text-white w-full md:w-1/3 flex items-baseline gap-2">
                {project.title}
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <LuInfo className="w-4 h-4 text-zinc-500 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click a project card to see more</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </h2>

              <div className="w-full">
                {works.map((work, idx) => (
                  <motion.div
                    key={`project-${idx}`}
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
