"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { connect, menuitems } from "@/lib/me";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updatePosition = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <header
      className={`backdrop-blur-md w-full sticky top-0 z-10 transition ease-in-out ${
        scrollPosition > 20 ? "shadow-md" : ""
      }`}
    >
      <motion.nav
        className="w-11/12 flex items-center justify-between max-w-4xl py-5 mx-auto"
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <Link
          className="block font-semibold text-zinc-900 dark:text-zinc-100 transition-colors"
          href="/"
        >
          Cornerstone E.
        </Link>

        <div className="hidden md:flex items-center relative">
          <div className="flex items-center space-x-2 rounded-full py-1.5 px-2 bg-gray-200/40 dark:bg-gray-800/40">
            {menuitems.map((item) => {
              const isActive = item.path === pathname;
              return (
                <div key={item.path} className="relative">
                  <AnimatePresence initial={false} mode="popLayout">
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
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
                    className={`relative block transition-colors ease rounded-2xl px-4 py-1.5 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
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

        <div className="flex items-center space-x-2">
          {connect.map((el, index) => {
            const Icon = el.icon;
            return (
              <Link
                key={`connect-${index}`}
                href={
                  el.social === "Email"
                    ? "mailto:fortunecornerstone@gmail.com"
                    : `https://${el.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:opacity-80 dark:text-zinc-300 dark:hover:opacity-80 transition-colors"
              >
                <Icon size={20} />
              </Link>
            );
          })}

          {/* Theme toggle */}
          {mounted && (
            <button
              className="outline-none p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <FaSun size={20} className="text-yellow-400" />
              ) : (
                <FaMoon size={20} className="text-zinc-700" />
              )}
            </button>
          )}
        </div>
      </motion.nav>
    </header>
  );
}
