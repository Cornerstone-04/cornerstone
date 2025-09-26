"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { menuitems } from "@/lib/me";
import Link from "next/link";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="w-full fixed flex flex-col items-center bottom-6 z-10 md:hidden">
      <div className="flex space-x-0.5 p-1.5 pb-1 bg-zinc-100 rounded-3xl drop-shadow-md backdrop-filter backdrop-blur-xl dark:bg-[#141516] dark:border-2 dark:border-zinc-800 dark:bg-opacity-30">
        {menuitems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`rounded-2xl px-5 py-2 text-sm font-medium transition-colors ${
              item.path === pathname
                ? "bg-white text-blue-500 dark:bg-gray-900 dark:text-blue-400"
                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
