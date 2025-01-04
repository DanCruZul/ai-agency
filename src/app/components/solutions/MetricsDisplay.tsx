"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import type { Metric } from "./types";

export const MetricsDisplay = memo(({ metrics }: { metrics: Metric[] }) => (
  <div className="mt-6 grid grid-cols-3 gap-4">
    {metrics.map((metric, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm"
      >
        <p className="text-sm text-gray-100">{metric.label}</p>
        <p className="mt-1 text-2xl font-bold text-white tabular-nums">
          {metric.prefix}
          {metric.value}
          {metric.suffix}
        </p>
      </motion.div>
    ))}
  </div>
));

MetricsDisplay.displayName = "MetricsDisplay";
