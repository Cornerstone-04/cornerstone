"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { timeline, connect } from "@/lib/me";
import { Container } from "@/components/layout";
import { Timeline } from "@/components/common";
import { LuArrowUpRight } from "react-icons/lu";
import TechStack from "@/components/common/tech-stack";
import ConnectSection from "@/components/contact/connect-section";

export default function About() {
  return (
    <Container className="my-12 text-zinc-800 dark:text-zinc-200">
      {/* About Me Section */}
      <motion.div
        className="w-full mb-16"
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
            About me
          </motion.h2>

          <motion.div
            className="w-full md:w-4/5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <p className="leading-relaxed text-justify">
                I&apos;m a Frontend Engineer with 3 years of experience building
                scalable, responsive web applications with ReactJS, NextJS, and
                TypeScript. I enjoy crafting clean, testable code and
                implementing modern design systems so that products feel
                seamless, accessible, and performant.
              </p>
            </div>

            <div>
              <h5 className="mb-2 font-semibold">Challenge</h5>
              <p className="leading-relaxed text-justify">
                For me, every project is a chance to push boundaries. I&apos;ve
                worked on everything from UI libraries and e-commerce modules to
                academic platforms and blockchain integrations. Along the way,
                I&apos;ve deepened my skills with tools like TailwindCSS,
                Zustand, and Playwright, and I&apos;m now expanding into backend
                collaboration with .NET to strengthen my full-stack perspective.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row align-baseline md:space-x-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="w-full md:w-1/5 font-semibold text-lg text-zinc-900 dark:text-zinc-100"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="w-full md:w-4/5 ml-0 md:ml-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {timeline.map((tl, index) => (
            <motion.div
              key={`timeline-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Timeline active={tl.endDate == null} timeline={tl} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <TechStack />
      <ConnectSection items={connect} className="mb-16 mt-12" />
    </Container>
  );
}
