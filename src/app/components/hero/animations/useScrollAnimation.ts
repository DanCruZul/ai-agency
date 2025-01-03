"use client";
import { useEffect, useRef } from "react";

export const useScrollAnimation = (preserveOpacity = false) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if ("animate" in element && "timeline" in window) {
      const scrollTimeline = new ScrollTimeline({
        source: document.documentElement,
        axis: "block",
      });

      element.animate(
        {
          transform: ["translateY(0)", "translateY(-20%)"],
          ...(preserveOpacity ? {} : { opacity: [1, 0.2] }),
        },
        {
          duration: 1,
          timeline: scrollTimeline,
          fill: "both",
        }
      );
    } else {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const rate = Math.min(scrolled / 500, 1);
        if (element) {
          element.style.transform = `translateY(-${rate * 20}%)`;
          if (!preserveOpacity) {
            element.style.opacity = `${1 - rate * 0.8}`;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [preserveOpacity]);

  return ref;
};
