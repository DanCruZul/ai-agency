"use client";
import { memo } from "react";
import { motion } from "framer-motion";

type SolutionsHeaderProps = {
  tagline: string;
  heading: string;
  description: string;
};

export const SolutionsHeader = memo(
  ({ tagline, heading, description }: SolutionsHeaderProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16"
      >
        <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
        <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
          {description}
        </p>
      </motion.div>
    );
  }
);

SolutionsHeader.displayName = "SolutionsHeader";
