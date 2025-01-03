"use client"; // Mark this as a Client Component

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { scrollToSection } from "@/app/utils/scroll";
import { useScrollAnimation } from "./animations/useScrollAnimation";
import type { HeroContentProps } from "./types";

export const HeroContent = ({
  heading,
  description,
  buttons,
}: HeroContentProps) => {
  const contentRef = useScrollAnimation();

  const handleClick = () => {
    scrollToSection("cta");
  };

  return (
    <div ref={contentRef} className="mb-12 text-center md:mb-18 lg:mb-20">
      <div className="mx-auto w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-x-4 md:mt-10"
        >
          <Button variant="gradient" onClick={handleClick}>
            {buttons[0].title}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
