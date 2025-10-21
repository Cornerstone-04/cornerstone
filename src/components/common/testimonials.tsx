"use client";

import { testimonials } from "@/lib/me";
import { motion } from "motion/react";
import { LuQuote, LuChevronDown } from "react-icons/lu";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="w-full my-8 md:my-16"
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
          className="w-full md:w-4/5 space-y-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;

            return (
              <TestimonialAccordion
                key={index}
                testimonial={testimonial}
                isActive={isActive}
                onToggle={() => toggleAccordion(index)}
                delay={0.3 + index * 0.1}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

function TestimonialAccordion({
  testimonial,
  isActive,
  onToggle,
  delay,
}: {
  testimonial: { name: string; role: string; company: string; content: string };
  isActive: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => setMaxHeight(el.scrollHeight));
    ro.observe(el);
    setMaxHeight(el.scrollHeight);

    return () => ro.disconnect();
  }, [testimonial.content]);

  return (
    <motion.div
      className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
    >
      {/* Accordion Trigger */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors rounded-lg cursor-pointer"
        aria-expanded={isActive}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <LuChevronDown
            className="text-zinc-600 dark:text-zinc-400"
            size={20}
          />
        </motion.div>
      </button>

      {/* Accordion Content */}
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isActive ? maxHeight : 0 }}
      >
        <div ref={contentRef} className="px-4 pb-4">
          <div className="flex gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <LuQuote
              className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
              size={20}
            />
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {testimonial.content}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
