"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectTypes } from "@/lib/me";
import { LuArrowUpRight, LuGithub, LuLink } from "react-icons/lu";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  url?: string; // may be missing
  repo?: string; // may be missing
  image: string;
  type: ProjectTypes | "web" | "mobile" | string;
  gif?: string;
};

export default function Project({
  title,
  description,
  url = "",
  repo = "",
  image,
  tech,
  gif,
  type,
}: ProjectProps) {
  const [open, setOpen] = useState(false);

  // close on Escape (works for both Dialog/Sheet)
  const handleEscKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [handleEscKey]);

  const isMobileType = String(type).toLowerCase() === "mobile";
  const hasUrl = Boolean(url);
  // const hasRepo = Boolean(repo);

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

          <p className="text-xs md:text-xs text-zinc-700 dark:text-zinc-300">
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

  // Web => Dialog; Mobile => Sheet (drawer)
  if (isMobileType) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            {CardBody}
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[520px] p-0">
          <SheetHeader className="p-4">
            <SheetTitle className="text-zinc-900 dark:text-zinc-100">
              {title} Mobile Application
            </SheetTitle>
          </SheetHeader>
          <div className="p-4 space-y-6 text-zinc-800 dark:text-zinc-200">
            {gif && (
              <Image
                src={gif}
                alt={description}
                width={360}
                height={600}
                className="mx-auto max-h-[600px] object-contain"
              />
            )}

            <section>
              <h5 className="font-semibold text-base">About</h5>
              <p className="mt-2 leading-6">{description}</p>
            </section>

            <section>
              <h5 className="font-semibold text-base mb-2">Technologies</h5>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <Badge variant="secondary" key={`${t}-${i}`}>
                    {t}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h5 className="font-semibold text-base mb-2">URL</h5>
              {hasUrl ? (
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  {url}
                </Link>
              ) : (
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {/* No project URL was provided */}
                  No project URL was provided.
                </span>
              )}
            </section>

            <div className="pt-2">
              <SheetClose asChild>
                <button className="text-xs font-bold underline">Close</button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // default: web preview in Dialog
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          {CardBody}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-zinc-900 dark:text-zinc-100">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-zinc-800 dark:text-zinc-200">
          {gif && (
            <Image
              src={gif}
              alt={description}
              width={800}
              height={600}
              className="mx-auto max-h-[600px] object-contain"
            />
          )}

          <section>
            <h5 className="font-semibold text-base">About</h5>
            <p className="mt-2 leading-6">{description}</p>
          </section>

          <section>
            <h5 className="font-semibold text-base mb-2">Technologies</h5>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <Badge variant="secondary" key={`${t}-${i}`}>
                  {t}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h5 className="font-semibold text-base mb-2">URL</h5>
            {hasUrl ? (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                {url}
              </Link>
            ) : (
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {/* No project URL was provided */}
                No project URL was provided
              </span>
            )}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
