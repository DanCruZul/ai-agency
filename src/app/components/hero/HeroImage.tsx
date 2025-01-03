"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "./animations/useScrollAnimation";
import { LazyImage } from "../LazyImage";
import type { ImageProps } from "./types";

export const HeroImage = ({ src, alt }: ImageProps) => {
  const { ref, translateY, opacity } = useScrollAnimation(true);

  return (
    <motion.div
      ref={ref}
      style={{ translateY, opacity }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full max-w-5xl"
    >
      <LazyImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  );
};