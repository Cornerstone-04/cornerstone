"use client";

import { testimonials } from "@/lib/me";
import { motion } from "motion/react";
import { LuQuote } from "react-icons/lu";

export default function Testimonials() {
  return (
    <motion.div
      className="w-full my-6"
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
          Testimonials
        </motion.h2>

        <motion.div
          className="w-full md:w-4/5 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex gap-3 mb-3">
                <LuQuote className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {testimonial.role}, {testimonial.company}.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
