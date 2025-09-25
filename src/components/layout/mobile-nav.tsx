"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { menuitems } from "@/lib/me";
import Link from "next/link";

export default function MobileNav() {
  const pathname = usePathname();

  useEffect(() => {});
  return (
    <div className="w-full fixed flex flex-col items-center bottom-6 z-10 md:hidden">
      <div className="flex space-x-0.5 p-1.5 pb-1 bg-zinc-100 rounded-3xl dark:bg-[#141516] dark:border-2 dark:border-zinc-800 drop-shadow-md backdrop-filter backdrop-blur-xl dark:bg-opacity-30">
        {menuitems.map((item) => {
          return (
            <button
              key={item.path}
              className={`rounded-2xl px-5 py-2 font-lighter transition outline-none ${
                item.path === pathname && "bg-white text-red-500"
              }`}
            >
              {/* ✅ Use placeholder for mobile nav links */}
              <Link href={item.path}>{item.name}</Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}
