"use client";

import React from "react";
import { motion } from "motion/react";
import { timeline, connect } from "@/lib/me";
import { Container } from "@/components/layout";
import { Timeline } from "@/components/common";
import TechStack from "@/components/common/tech-stack";
import ConnectSection from "@/components/contact/connect-section";
import { aboutMe } from "@/lib/me";

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

            {aboutMe.map(({ id, text }) => (
              <div key={id}>
                <p className="leading-relaxed text-justify">{text}</p>
              </div>
            ))}
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
