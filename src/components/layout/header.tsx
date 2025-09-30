"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { connect, menuitems } from "@/lib/me";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

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
      <nav className="w-11/12 flex items-center justify-between max-w-4xl py-5 mx-auto">
        <Link
          className="block font-semibold text-zinc-900 dark:text-zinc-100 transition-colors"
          href="/"
        >
          Cornerstone E.
        </Link>

        <div className="hidden items-center space-x-4 rounded-full py-1.5 px-2 bg-gray-200 bg-opacity-40 dark:bg-gray-800 dark:bg-opacity-40 md:flex">
          {menuitems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block transition ease rounded-2xl px-4 py-1.5 ${
                item.path === pathname
                  ? "bg-white text-blue-500 font-semibold dark:bg-gray-900 dark:text-blue-400"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
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
      </nav>
    </header>
  );
}
