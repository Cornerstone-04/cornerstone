"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { LuCheck, LuDownload } from "react-icons/lu";

export default function ResumeDownloadButton() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/CORNERSTONE_EPHRAIM_RESUME.pdf";
    link.download = "Cornerstone_Ephraim_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success state
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-800 hover:bg-blue-900 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-medium transition-all ease-linear shadow-sm hover:shadow-md w-full md:w-fit justify-center cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {downloaded ? (
        <>
          <LuCheck size={20} />
          <span>Downloaded!</span>
        </>
      ) : (
        <>
          <LuDownload size={20} />
          <span>Download Resume</span>
        </>
      )}
    </motion.button>
  );
}
