"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { menuitems } from "@/lib/me";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="w-full fixed flex flex-col items-center bottom-6 z-10 md:hidden">
      <div className="flex space-x-0.5 p-1.5 pb-1 bg-zinc-100 rounded-3xl drop-shadow-md backdrop-filter backdrop-blur-xl dark:bg-[#141516] dark:border-2 dark:border-zinc-800 dark:bg-opacity-30">
        {menuitems.map((item) => {
          const isActive = item.path === pathname;
          return (
            <div key={item.path} className="relative">
              <AnimatePresence initial={false} mode="popLayout">
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-active-pill"
                    className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                    }}
                  />
                )}
              </AnimatePresence>

              <Link
                href={item.path}
                className={`relative block rounded-2xl px-5 py-2 text-sm font-medium transition-colors ease ${
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                  }}
                >
                  {item.name}
                </motion.span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
