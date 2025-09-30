"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectTypes } from "@/lib/me";
import { LuArrowUpRight, LuGithub, LuLink } from "react-icons/lu";
import ProjectModal from "@/components/common/project-modal"; // <-- import your modal

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
  image: string;
  type: ProjectTypes | "web" | "mobile" | string;
  gif?: string; // used as a richer preview if present
  longDescription?: string; // optional, if you have it
  role?: string;
  duration?: string;
};

export default function Project({
  title,
  description,
  longDescription,
  url = "",
  repo = "",
  image,
  tech,
  gif,
  type,
  role,
  duration,
}: ProjectProps) {
  const [open, setOpen] = useState(false);

  // Close on Escape (your modal also listens, but this keeps local state in sync)
  const handleEscKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [handleEscKey]);

  const hasUrl = Boolean(url);

  // small helper to render link icons with placeholder when link is missing
  const LinkIconBtn = ({
    href,
    label,
    Icon,
  }: {
    href?: string;
    label: "repo" | "url";
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }) => {
    const isMissing = !href;
    if (isMissing) {
      const placeholderTitle =
        label === "repo"
          ? "No repo URL was provided"
          : "No project URL was provided";
      return (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                aria-disabled
                className="inline-flex items-center opacity-40 cursor-not-allowed"
                title={placeholderTitle}
              >
                <Icon className="size-6" />
              </span>
            </TooltipTrigger>
            <TooltipContent>{placeholderTitle}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    return (
      <Link
        href={href!}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center rounded-lg transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={label === "repo" ? "Open repository" : "Open project"}
      >
        <Icon className="size-6" />
      </Link>
    );
  };

  // Map current props → modal's `project` shape
  const modalProject = useMemo(
    () => ({
      title,
      description,
      longDescription,
      technologies: tech,               // <-- tech -> technologies
      liveUrl: url || undefined,        // <-- url -> liveUrl
      githubUrl: repo || undefined,     // <-- repo -> githubUrl
      image: (gif || image) ?? undefined, // prefer gif preview if provided
      role,
      duration,
    }),
    [title, description, longDescription, tech, url, repo, gif, image, role, duration]
  );

  const CardBody = (
    <div
      className="w-full h-auto rounded border border-zinc-200 dark:border-zinc-800
                 hover:border-zinc-300 dark:hover:border-zinc-700
                 shadow-sm hover:shadow-[0_2px_4px_rgba(0,0,0,0.05)]
                 bg-white dark:bg-zinc-900
                 p-5 transition-all ease-in-out group mb-8"
    >
      <div className="w-full flex justify-between items-start min-h-16 gap-5">
        <div className="hidden w-1/12 md:block">
          <Image
            src={image}
            alt={`${title} logo`}
            width={60}
            height={60}
            className="rounded ring-1 ring-zinc-200 dark:ring-zinc-800"
          />
        </div>

        <div className="w-10/12">
          <div className="flex items-center">
            <h3 className="text-md lg:text-lg font-medium mb-2 mr-2 text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            {/* External open icon (project URL) */}
            {hasUrl ? (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Open project"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <LuArrowUpRight className="size-5 relative bottom-0.5" />
              </Link>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      className="text-zinc-400 inline-flex"
                      aria-disabled
                      title="No project URL was provided"
                    >
                      <LuArrowUpRight className="size-4 relative bottom-0.5" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>No project URL was provided</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <p className="text-xs md:text-xs text-zinc-700 dark:text-zinc-300 text-justify">
            {description}
          </p>
        </div>

        <div className="flex justify-end items-end gap-3 text-zinc-600 dark:text-zinc-300">
          <LinkIconBtn href={repo} label="repo" Icon={LuGithub} />
          <LinkIconBtn href={url} label="url" Icon={LuLink} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Clickable card opens the modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={`project-modal-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {CardBody}
      </button>

      {/* Technologies row below the card (optional, keep or remove) */}
      <div className="flex flex-wrap gap-2 -mt-6 mb-8">
        {tech.map((t, i) => (
          <Badge variant="secondary" key={`${t}-${i}`}>
            {t}
          </Badge>
        ))}
      </div>

      {/* Your modal (fixed-position; no portal required) */}
      <ProjectModal
        isOpen={open}
        onClose={() => setOpen(false)}
        project={modalProject}
      />
    </>
  );
}