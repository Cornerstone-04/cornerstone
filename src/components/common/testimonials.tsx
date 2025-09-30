"use client";

import { motion } from "framer-motion";
import { LuQuote } from "react-icons/lu";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Senior Product Manager",
    company: "TechCorp",
    content:
      "Cornerstone is an exceptional frontend engineer. His attention to detail and ability to translate complex designs into pixel-perfect implementations is outstanding. He consistently delivers high-quality work on time.",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    company: "DesignHub",
    content:
      "Working with Cornerstone has been a pleasure. He bridges the gap between design and development seamlessly, always asking the right questions and suggesting improvements that enhance the user experience.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Cornerstone's technical skills are impressive, but what sets him apart is his problem-solving approach. He doesn't just write code; he thinks about scalability, performance, and maintainability from day one.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 text-center">
          Testimonials
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mb-12">
          What people say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow"
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
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold text-lg">
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
