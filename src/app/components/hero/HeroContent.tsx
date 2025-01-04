"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { scrollToSection } from "@/app/utils/scroll";
import { useScrollAnimation } from "./animations/useScrollAnimation";

type ButtonProps = {
  title: string;
  href?: string;
  onClick?: () => void;
};

export type HeroContentProps = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export const HeroContent = ({
  heading,
  description,
  buttons,
}: HeroContentProps) => {
  const { ref, translateY, opacity } = useScrollAnimation();

  const handleClick = () => {
    scrollToSection("cta");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        translateY,
        opacity,
        willChange: "transform, opacity",
      }}
      className="mb-12 text-center md:mb-18 lg:mb-20"
    >
      <div className="mx-auto w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-x-4 md:mt-10"
        >
          <Button variant="gradient" onClick={handleClick}>
            {buttons[0].title}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
