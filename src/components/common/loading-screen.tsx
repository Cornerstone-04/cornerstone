"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loading-screen.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0A0A0A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="loader-container">
            <h1 className="loader-name text-blue-600 dark:text-blue-400">Cornerstone Ephraim</h1>
            <p className="loader-subtitle text-blue-600 dark:text-blue-400">Frontend Engineer</p>
            <div className="loader-progress">
              <div className="loader-progress-fill"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
