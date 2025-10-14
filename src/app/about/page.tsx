"use client";

import React from "react";
import { motion } from "motion/react";
import { timeline, connect } from "@/lib/me";
import { Container } from "@/components/layout";
import { Timeline } from "@/components/common";
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
                Hi, I’m Cornerstone, and I’ve always been the guy who can’t
                stand clunky websites. So, I decided to build better ones:{" "}
                <span className="font-semibold text-blue-800 dark:text-blue-400">
                  fast, intuitive, and easy to use.
                </span>
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-justify">
                I&apos;ve worked with startups and teams to build scalable,
                user-focused products using React, Next.js, TailwindCSS, and
                Git. What I enjoy most about frontend engineering is how it
                blends logic with creativity &#8212; every project is a puzzle
                waiting to be solved with code that not only works well but
                looks great.
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-justify">
                My love for the web started young, fueled by curiosity about how
                websites actually worked. That curiosity turned into a drive to
                build interfaces that feel natural to use. One of my proudest
                moments was developing a web app for a master&apos;s student
                that was later selected among the best in her class.
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-justify">
                When I&apos;m not coding, you&apos;ll probably find me watching
                Liverpool (YNWA), playing Scrabble (still undefeated), or
                listening to lo-fi beats while working through my next idea.
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-justify">
                So… if you&apos;re looking for a frontend developer who builds
                clean, scalable, and user-friendly experiences &#8212;
                let&apos;s create something great together.
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
