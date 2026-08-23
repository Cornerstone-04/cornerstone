"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function RouteScrollManager() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const scrollToTopInstantly = () => {
      document.documentElement.classList.add("route-scroll-reset");
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const handleInternalNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor) {
        return;
      }

      if (
        (anchor.target && anchor.target !== "_self") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const nextUrl = new URL(anchor.href);
      const currentUrl = new URL(window.location.href);

      if (nextUrl.origin !== currentUrl.origin) {
        return;
      }

      const isSamePage =
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.search === currentUrl.search;

      if (isSamePage) {
        return;
      }

      scrollToTopInstantly();
    };

    document.addEventListener("click", handleInternalNavigation, {
      capture: true,
    });

    return () => {
      document.removeEventListener("click", handleInternalNavigation, {
        capture: true,
      });
    };
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.add("route-scroll-reset");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const frame = requestAnimationFrame(() => {
      document.documentElement.classList.remove("route-scroll-reset");
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
