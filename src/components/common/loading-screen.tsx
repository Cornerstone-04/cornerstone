"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loading-screen.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2500); // 2.5s total
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0A0A0A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="loader-text text-blue-600">
            {/* Left word: Cornerstone -> Frontend (swipe up) */}
            <span className="word-wrap up">
              <span className="word">Cornerstone</span>
              <span className="word">Frontend</span>
            </span>

            {/* space between words */}
            <span className="word-gap">&nbsp;</span>

            {/* Right word: Ephraim -> Engineer (wipe down) */}
            <span className="word-wrap down">
              <span className="word">Ephraim</span>
              <span className="word">Engineer</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
