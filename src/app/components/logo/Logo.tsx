"use client";

import { motion } from "framer-motion";
import { logoDefaults } from "./defaults";
import { LogoImage } from "./LogoImage";
import type { LogoComponentProps } from "./types";

export const Logo = (props: LogoComponentProps) => {
  const { heading, logos } = {
    ...logoDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-10 w-full max-w-lg text-center text-lg font-semibold text-muted-foreground md:text-xl">
          {heading}
        </h2>
        <div className="relative">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

          {/* Logos grid - Now using 2 columns on mobile and 4 on larger screens */}
          <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                viewport={{ once: true }}
                className="group relative flex justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl transition-all duration-500 group-hover:bg-primary/10" />
                <LogoImage {...logo} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
