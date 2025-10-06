"use client";
import Image from "next/image";
import { connect, timeline } from "@/lib/me";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout";
import { Accordion } from "@/components/ui";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LuInfo } from "react-icons/lu";
import { motion } from "motion/react";
import ResumeDownloadButton from "@/components/common/resume-download";
// import Testimonials from "@/components/common/testimonials";

export default function Home() {
  const [active, setActive] = useState<number | null>(0);
  const trunkExp = timeline.slice(0, 3);

  const handleToggle = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <Container className="pt-12 pb-24 text-zinc-800 dark:text-zinc-200 relative overflow-hidden">
      <motion.div
        className="flex items-start justify-between"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-8/12 space-y-10">
          <div className="intro">
            <h2 className="text-3xl md:text-3xl font-medium mb-4 text-zinc-900 dark:text-zinc-100">
              Hello, I&apos;m <br /> Cornerstone Ephraim.
            </h2>
          </div>

          <div className="text-sm leading-loose space-y-3 text-justify">
            <p>
              <span className="font-semibold text-blue-800 dark:text-blue-400">
                Your goto frontend engineer.
              </span>{" "}
              I’ve worked across startups and large teams, contributing to
              design systems, building reusable UI components, and automating
              testing pipelines to keep products stable and scalable. Whether
              collaborating with designers, mentoring peers, or debugging late
              into the night, I enjoy solving problems that make interfaces feel
              effortless.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 my-4">
            <ResumeDownloadButton />
            <div className="flex items-center gap-4 my-4">
              {connect.map((el, index) => {
                const Icon = el.icon;
                const href =
                  el.social === "Email"
                    ? "mailto:fortunecornerstone@gmail.com"
                    : `https://${el.url}`;

                return (
                  <Link
                    key={`connect-${index}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:opacity-80 dark:text-blue-400 transition-opacity"
                  >
                    <Icon size={36} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-3/12 hidden md:contents">
          <Image
            src="/images/cornerstone.jpg"
            className="rounded-lg ring-1 ring-zinc-200 dark:ring-zinc-800 aspect-square"
            alt="Cornerstone Ephraim avatar"
            width={160}
            height={160}
            priority
          />
        </div>
      </motion.div>
      {/* <Testimonials/> */}

      <motion.div
        className="my-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Recent experiences
          </h3>
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <LuInfo className="w-4 h-4 text-zinc-500 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Click a box to see more</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="my-4">
          {trunkExp.map((exp, index) => (
            <div key={index} className="py-2">
              <Accordion
                active={active === index}
                handleToggle={() => handleToggle(index)}
                exp={exp}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
