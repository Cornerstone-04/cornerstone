"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { LuArrowLeft } from "react-icons/lu";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="min-h-[70vh] flex items-center justify-center text-zinc-800 dark:text-zinc-200">
      <motion.div
        className="text-center space-y-6 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-blue-600 dark:text-blue-400">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            Page Not Found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium transition-colors"
          >
            <LuArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          className="pt-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
