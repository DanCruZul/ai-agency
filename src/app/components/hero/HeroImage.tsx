"use client"; // Mark this as a Client Component

import { motion } from "framer-motion";
import { useScrollAnimation } from "./animations/useScrollAnimation";
import type { ImageProps } from "./types";

export const HeroImage = ({ src, alt }: ImageProps) => {
  const imageRef = useScrollAnimation(true); // Pass true to preserve opacity

  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full max-w-5xl"
    >
      <img
        src={src}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        alt={alt}
      />
    </motion.div>
  );
};
