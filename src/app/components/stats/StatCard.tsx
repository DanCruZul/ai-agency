"use client";

import { AnimatedNumber } from "./AnimatedNumber";
import { motion } from "framer-motion";
import type { StatsProps } from "./types";

export const StatCard = ({ percentage, heading, description }: StatsProps) => {
  const numericValue = parseFloat(percentage);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-card text-card-foreground border border-border p-8  transition-colors backdrop-blur-sm"
    >
      <p className="mb-8 text-6xl font-bold leading-none tracking-tight text-primary md:mb-10 md:text-7xl lg:mb-12">
        <AnimatedNumber value={numericValue} />
      </p>
      <h3 className="text-xl font-bold leading-tight md:text-2xl text-foreground">
        {heading}
      </h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </motion.div>
  );
};
