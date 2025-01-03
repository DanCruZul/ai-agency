import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { scrollToSection } from "@/utils/scroll";
import type { Feature } from "./types";

export const FeatureCard = ({
  number,
  tagline,
  heading,
  description,
  buttons,
}: Feature) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const animatedWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const width = useTransform(animatedWidth, [0, 1], ["0%", "100%"]);

  const handleCtaClick = () => {
    scrollToSection("cta");
  };

  return (
    <div className="flex flex-col items-start justify-center py-8 md:py-0">
      <div className="mt-10 flex text-[6rem] font-bold leading-[1] text-primary md:mt-0 md:hidden md:text-[14rem]">
        {number}
      </div>
      <div ref={ref} className="mb-8 mt-8 h-0.5 w-full bg-border md:mt-0">
        <motion.div
          className="h-0.5 bg-[radial-gradient(120%_120%_at_50%_100%,transparent_40%,#6633ee_70%,#ffffff_100%)]"
          style={{ width }}
        />
      </div>
      <p className="mb-3 font-semibold text-primary md:mb-4">{tagline}</p>
      <h2 className="mb-5 text-4xl font-bold leading-tight text-foreground md:mb-6 md:text-5xl lg:text-6xl">
        {heading}
      </h2>
      <p className="text-lg text-muted-foreground md:text-xl">{description}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
        {buttons.map((button, index) => {
          const IconRight = button.iconRight;
          return (
            <Button
              key={index}
              {...button}
              variant={index === 0 ? "gradient" : button.variant}
              iconRight={IconRight}
              onClick={index === 0 ? handleCtaClick : undefined}
            >
              {button.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
