"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./animations/useScrollAnimation";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

export const HeroImage = ({ src }: ImageProps) => {
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
      <Image
        src={src}
        alt="Enterprise AI Dashboard with real-time analytics"
        width={1200}
        height={800}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        priority // Ensures the image is prioritized for loading
      />
    </motion.div>
  );
};
