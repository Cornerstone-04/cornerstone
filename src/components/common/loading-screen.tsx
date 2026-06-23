"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import "@/styles/loading-screen.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(progressInterval);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, interval);

    const t = setTimeout(() => setIsLoading(false), 2500);

    return () => {
      clearTimeout(t);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-light dark:bg-canvas-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="loader-container">
            <h1 className="loader-name text-blue-600 dark:text-blue-400">
              Cornerstone Ephraim
            </h1>
            <p className="loader-subtitle text-blue-600 dark:text-blue-400">
              Frontend Engineer
            </p>
            <div className="loader-progress-wrapper">
              <div className="loader-progress">
                <div className="loader-progress-fill"></div>
              </div>
              <span className="loader-progress-number text-blue-600 dark:text-blue-400">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
