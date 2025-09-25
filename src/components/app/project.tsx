"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Link2 } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { ProjectTypes } from "@/lib/me";

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
  const hasRepo = Boolean(repo);

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
        label === "repo" ? "PUT REPO LINK HERE" : "PUT PROJECT URL HERE";
      return (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-disabled
                className="inline-flex items-center opacity-40 cursor-not-allowed"
                title={placeholderTitle}
              >
                <Icon className="size-6" />
              </button>
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
        className="inline-flex items-center rounded-lg transition-opacity hover:opacity-70"
      >
        <Icon className="size-6" />
      </Link>
    );
  };

  const CardBody = (
    <div
      className="w-full h-auto rounded border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-[0_2px_4px_rgba(0,0,0,0.05)]
      p-5 transition-all ease-in-out group hover:cursor-pointer mb-8"
    >
      <div className="w-full flex justify-between items-start min-h-16 gap-5">
        <div className="hidden w-1/12 md:block">
          <Image
            src={image}
            alt={`${title} logo`}
            width={60}
            height={60}
            className="rounded"
          />
        </div>

        <div className="w-10/12">
          <div className="flex items-center">
            <h3 className="text-md lg:text-lg font-medium mb-2 mr-2">
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
                className="text-zinc-500"
              >
                <ExternalLink className="size-4 relative bottom-0.5" />
              </Link>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      className="text-zinc-400 inline-flex"
                      aria-disabled
                      title="PUT PROJECT URL HERE"
                    >
                      <ExternalLink className="size-4 relative bottom-0.5" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>PUT PROJECT URL HERE</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <p className="text-xs md:text-xs">{description}</p>
        </div>

        <div className="flex justify-end items-end gap-3">
          <LinkIconBtn href={repo} label="repo" Icon={Github} />
          <LinkIconBtn href={url} label="url" Icon={Link2} />
        </div>
      </div>
    </div>
  );

  // Web => Dialog; Mobile => Sheet (drawer)
  if (isMobileType) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button type="button" className="w-full text-left">
            {CardBody}
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[520px] p-0">
          <SheetHeader className="p-4">
            <SheetTitle>{title} Mobile Application</SheetTitle>
          </SheetHeader>
          <div className="p-4 space-y-6">
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
                <span className="text-sm text-muted-foreground">
                  {/* PUT PROJECT URL HERE */}
                  PUT PROJECT URL HERE
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
        <button type="button" className="w-full text-left">
          {CardBody}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
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
              <span className="text-sm text-muted-foreground">
                {/* PUT PROJECT URL HERE */}
                PUT PROJECT URL HERE
              </span>
            )}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
