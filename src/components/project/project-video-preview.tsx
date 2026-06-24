"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ProjectContent } from "@/lib/types";

export function ProjectVideoPreview({
  preview,
  title,
}: {
  preview: NonNullable<ProjectContent["interactionPreview"]>;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleToggle = async () => {
    if (!active) {
      setActive(true);
      setPlaying(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group/video overflow-hidden rounded-[28px] border border-ink-primary/10 bg-canvas-dark text-ink-inverse">
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
        {active ? (
          <video
            ref={videoRef}
            src={preview.video}
            poster={preview.poster}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="size-full object-cover"
            aria-label={`${title} interaction preview`}
          />
        ) : (
          <>
            <Image
              src={preview.poster}
              alt={`${title} video poster`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover/video:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-primary/10 via-ink-primary/25 to-ink-primary/75" />
          </>
        )}

        <button
          type="button"
          onClick={handleToggle}
          className="absolute cursor-pointer left-5 top-5 inline-flex items-center gap-2 rounded-full bg-surface-light px-4 py-2 text-sm font-medium text-ink-primary transition-transform duration-300 hover:-translate-y-0.5 sm:left-8 sm:top-8"
          aria-label={
            active && playing
              ? "Pause interaction preview"
              : "Watch interaction preview"
          }
        >
          {active && playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )}
          {active && playing ? "Pause" : "Watch interaction"}
        </button>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-[0.8fr_1.2fr] sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-inverse/45">
          {preview.label ?? "Interaction preview"}
        </p>
        {preview.caption ? (
          <p className="max-w-2xl text-base leading-7 text-ink-inverse/65">
            {preview.caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
