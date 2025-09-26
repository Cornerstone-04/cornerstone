"use client";

import React, { ReactNode, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // if you don't have cn(), replace cn(...) with a template string

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  titleId?: string; // optional: id of a heading inside for aria-labelledby
}

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  titleId,
}: ModalProps) {
  const closeOnOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  // lock body scroll + esc handling
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 dark:bg-black/50"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "relative w-[92vw] max-w-5xl max-h-[85vh] overflow-y-auto rounded-lg border",
              "bg-white text-zinc-900 border-zinc-200",
              "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800",
              "shadow-xl p-6 sm:p-8",
              className
            )}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 text-xs font-semibold underline text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Close modal"
            >
              Close
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
