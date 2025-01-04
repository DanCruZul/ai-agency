"use client";
import { memo } from "react";
import { motion } from "framer-motion";

type BenefitsHeaderProps = {
  tagline: string;
  heading: string;
  description: string;
};

export const BenefitsHeader = memo(
  ({ tagline, heading, description }: BenefitsHeaderProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20"
      >
        <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
        <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <p className="text-lg text-gray-400 md:text-xl">{description}</p>
      </motion.div>
    );
  }
);

BenefitsHeader.displayName = "BenefitsHeader";
