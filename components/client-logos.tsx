"use client";

import { motion } from "framer-motion";

export function ClientLogos() {
  return (
    <motion.div
      className="max-w-[1200px] mx-auto mt-32 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
    >
      <p className="text-white/40 text-sm mb-10 tracking-wider">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </p>
      <div className="flex justify-center items-center gap-16">
        {["fusionone", "techno", "yourlogo", "openai", "openai"].map(
          (logo, index) => (
            <div key={index} className="w-32 h-8 bg-white/5 rounded-lg" />
          ),
        )}
      </div>
    </motion.div>
  );
}
