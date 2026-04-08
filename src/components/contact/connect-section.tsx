"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ComponentType } from "react";

type ConnectItem = {
  id: number;
  social: string;
  url: string;
  icon: ComponentType<{ size?: number }>;
};

export default function ConnectSection({
  items,
  className = "",
}: {
  items: ConnectItem[];
  className?: string;
}) {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="w-full font-black text-4xl text-foreground mb-12 border-b-2 border-accent pb-4 flex items-baseline gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-mono text-accent">—</span>
        Connect
      </motion.h2>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-bold text-lg text-foreground mb-8">
          Reach out! I&apos;d love to chat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((el, index) => {
            const Icon = el.icon;
            const href =
              el.social === "Email"
                ? "mailto:fortunecornerstone@gmail.com"
                : `https://${el.url}`;

            return (
              <motion.div
                key={`connect-${el.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-2 border-foreground transition-all
                             hover:bg-foreground hover:text-background
                             focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={32} className="flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-bold text-base block">{el.social}</span>
                      <span className="text-xs font-mono text-foreground/70">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
