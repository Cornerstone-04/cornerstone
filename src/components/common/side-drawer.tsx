"use client";

import React, { ReactNode, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  titleId?: string; // optional: pass id of a heading inside for aria-labelledby
}

export function SideDrawer({
  isOpen,
  onClose,
  children,
  titleId,
}: SideDrawerProps) {
  const closeOnOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  // lock scroll + esc handling
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeOnOverlayClick}
          className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/20 dark:bg-black/40"
        >
          <motion.div
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative h-full w-full max-w-[520px] sm:max-w-[560px] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xl border-l border-zinc-200 dark:border-zinc-800 overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex justify-end gap-2 p-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
              <button
                onClick={onClose}
                className="text-zinc-600 dark:text-zinc-300 text-sm px-3 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>

            <div className="p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
