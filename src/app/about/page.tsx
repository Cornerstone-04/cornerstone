"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { timeline, connect } from "@/lib/me";
import { Container } from "@/components/layout";
import { Timeline } from "@/components/app";
import { LuArrowUpRight } from "react-icons/lu";

const containerVariants = {
  init: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 0.3 } },
};

export default function About() {
  return (
    <Container className="my-12 text-zinc-800 dark:text-zinc-200">
      <motion.div
        className="w-full mb-16"
        initial="init"
        whileInView="final"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
          <h2 className="w-full md:w-1/5 font-semibold text-lg text-zinc-900 dark:text-zinc-100">
            About me
          </h2>

          <div className="w-full md:w-4/5 space-y-6">
            <div>
              <p className="leading-relaxed">
                The art of frontend development lights me up — blending clean,
                accessible UI with smooth, meaningful interactions. I focus on
                reusable components, performance, and modern standards so that
                products feel fast, stable, and intuitive.
              </p>
            </div>

            <div>
              <h5 className="mb-2 font-semibold">Challenge</h5>
              <p className="leading-relaxed">
                Every project is a chance to level up. I’m exploring C#/.NET and
                backend fundamentals (streams, threads, networking), and I’m
                currently cooking with Python (Flask) to deepen my full-stack
                intuition.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row align-baseline md:space-x-6">
        <h2 className="w-full md:w-1/5 font-semibold text-lg text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>

        <div className="w-full md:w-4/5 ml-0 md:ml-2">
          {timeline.map((tl, index) => (
            <div
              key={`timeline-${index}`}
              // className="border-b border-zinc-200/70 dark:border-zinc-800/70 last:border-0"
            >
              <Timeline active={tl.endDate == null} timeline={tl} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row align-baseline md:md:space-x-6 mb-16 mt-12">
        <h2 className="w-full md:w-1/5 font-semibold text-lg text-zinc-900 dark:text-zinc-100">
          Connect
        </h2>

        <div className="w-full md:w-4/5">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Reach out! I’d love to chat.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
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
                  className="w-full sm:w-[48%] p-4 rounded-lg border transition-colors
                             border-zinc-300 dark:border-zinc-800
                             hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3 text-blue-800 dark:text-blue-400">
                      <Icon size={40} />
                      <span className="font-medium">{el.social}</span>
                    </div>
                    <LuArrowUpRight
                      className="text-blue-800 dark:text-blue-400"
                      size={20}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
