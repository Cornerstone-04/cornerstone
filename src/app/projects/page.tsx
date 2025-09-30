import Project from "@/components/common/project";
import { Container } from "@/components/layout";
import { projects } from "@/lib/me";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LuInfo } from "react-icons/lu";

export default function Projects() {
  return (
    <Container className="py-12">
      <div className="w-full">
        {projects.map((project, index) => {
          const works = project.works;
          return (
            <div
              className="w-full flex flex-col md:flex-row align-baseline mt-12 gap-4"
              key={index}
            >
              {/* <div className="flex items-start gap-2> */}
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
              {/* </div> */}

              <div className="w-full">
                {works.map((work, idx) => (
                  <Project
                    key={`project-${idx}`}
                    type={project.type}
                    {...work}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
