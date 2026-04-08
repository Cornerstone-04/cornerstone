"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { connect, menuitems } from "@/lib/me";

export default function Navbar() {
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
      className={`w-full sticky top-0 z-10 transition ease-in-out border-b-2 border-current ${
        scrollPosition > 20 ? "bg-foreground/5 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <motion.nav
        className="w-11/12 flex items-center justify-between max-w-5xl py-6 mx-auto"
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <Link
          className="block font-black text-lg tracking-wider text-foreground hover:opacity-70 transition-opacity"
          href="/"
        >
          CE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuitems.map((item) => {
            const isActive = item.path === pathname;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  isActive
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {connect.slice(0, 3).map((el) => {
            const Icon = el.icon;
            return (
              <Link
                key={`connect-${el.id}`}
                href={
                  el.social === "Email"
                    ? "mailto:fortunecornerstone@gmail.com"
                    : `https://${el.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Icon size={18} />
              </Link>
            );
          })}

          {mounted && (
            <button
              type="button"
              className="outline-none hover:text-accent transition-colors cursor-pointer"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <FaSun size={18} />
              ) : (
                <FaMoon size={18} />
              )}
            </button>
          )}
        </div>
      </motion.nav>
    </header>
  );
}
