"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuExternalLink, LuGithub } from "react-icons/lu";
import { useEffect } from "react";
import Image from "next/image";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    image?: string;
    role?: string;
    duration?: string;
  };
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <LuX size={20} className="text-zinc-900 dark:text-zinc-100" />
                </button>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                  {/* Header */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 pr-10">
                      {project.title}
                    </h2>
                    {(project.role || project.duration) && (
                      <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.role && <span>{project.role}</span>}
                        {project.role && project.duration && <span>•</span>}
                        {project.duration && <span>{project.duration}</span>}
                      </div>
                    )}
                  </div>

                  {/* Image (if available) */}
                  {project.image && (
                    <div className="w-full aspect-video rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 640px"
                        priority={false}
                      />
                    </div>
                  )}

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                        >
                          <LuExternalLink size={18} />
                          View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium transition-colors"
                        >
                          <LuGithub size={18} />
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
