"use client";

import { motion } from "motion/react";
import { LuCalendar, LuClock, LuVideo, LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

export default function BookDiscoveryCall() {
  const appointmentUrl = "https://calendar.app.google/yYN9v7aAhbpiV9uG8";

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row align-baseline md:space-x-6 mb-16 mt-12"
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
        Schedule a Call
      </motion.h2>

      <motion.div
        className="w-full md:w-4/5"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          Book a discovery call to discuss your project
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          Let&apos;s talk about your ideas and how I can help. Schedule a free
          30-minute consultation.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
            <LuClock size={20} className="text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm font-medium">30 Minutes</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Free consultation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
            <LuVideo size={20} className="text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm font-medium">Video Call</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Google Meet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
            <LuCalendar
              size={20}
              className="text-blue-600 dark:text-blue-400"
            />
            <div>
              <p className="text-sm font-medium">Flexible Times</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Choose what works
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={appointmentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-colors"
        >
          <LuCalendar size={20} />
          Schedule Your Call
          <LuArrowUpRight size={16} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
