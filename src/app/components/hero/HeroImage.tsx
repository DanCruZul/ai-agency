"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./animations/useScrollAnimation";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

// Memoize the component to prevent unnecessary re-renders
export const HeroImage = memo(({ src }: ImageProps) => {
  const { ref, translateY, opacity } = useScrollAnimation(true);

  return (
    <motion.div
      ref={ref}
      style={{ translateY, opacity }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-5xl"
    >
      <Image
        src={src}
        alt="Enterprise AI Dashboard with real-time analytics"
        width={1200}
        height={800}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        priority
        loading="eager"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </motion.div>
  );
});

HeroImage.displayName = "HeroImage";
