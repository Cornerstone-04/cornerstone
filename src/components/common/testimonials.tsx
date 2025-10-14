"use client";

import { testimonials } from "@/lib/me";
import { motion } from "motion/react";
import { LuQuote } from "react-icons/lu";

export default function Testimonials() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 text-left">
          Testimonials
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-left mb-12">
          What people say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <LuQuote
                  className="text-blue-600 dark:text-blue-400"
                  size={32}
                />
              </div>

              {/* Content */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
