"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export const useScrollAnimation = (preserveOpacity = false) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollY, [0, 500], [0, -20], {
    clamp: false,
  });

  const opacity = useTransform(
    scrollY,
    [0, 500],
    [1, preserveOpacity ? 1 : 0.2],
    { clamp: false }
  );

  return { ref, translateY, opacity };
};
