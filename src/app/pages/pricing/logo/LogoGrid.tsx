import { motion } from "framer-motion";
import { LogoImage } from "./LogoImage";
import type { ImageProps } from "@/components/logo/types";

type LogoGridProps = {
  logos: ImageProps[];
};

export const LogoGrid = ({ logos }: LogoGridProps) => (
  <div className="relative">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

    {/* Logos grid */}
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
);