"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const useScrollAnimation = (preserveOpacity = false) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Create a smooth spring animation for the scroll value
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  // Transform the scroll value into opacity and translateY values
  const translateY = useTransform(smoothScrollY, 
    [0, 500], 
    [0, -20],
    { clamp: true }
  );

  const opacity = useTransform(smoothScrollY,
    [0, 500],
    [1, preserveOpacity ? 1 : 0.2],
    { clamp: true }
  );

  return { ref, translateY, opacity };
};