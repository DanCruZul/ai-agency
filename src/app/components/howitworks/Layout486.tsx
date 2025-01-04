"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { layout486Defaults } from "./defaults";
import { FeatureList } from "./FeatureList";
import { NumberTracker } from "./NumberTracker";
import { useTabletMediaQuery } from "./hooks/useTabletMediaQuery";
import type { Layout486ComponentProps } from "./types";

export const Layout486 = (props: Layout486ComponentProps) => {
  const { features, ...rest } = {
    ...layout486Defaults,
    ...props,
  };

  const ref = useRef<HTMLDivElement>(null);
  const isTablet = useTabletMediaQuery();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const numbers = Array.from(
    { length: features.length },
    (_, index) => index + 1
  );

  return (
    <section ref={ref} className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container mx-auto">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <NumberTracker
            numbers={numbers}
            scrollProgress={scrollYProgress}
            isTablet={isTablet}
          />
          <FeatureList features={features} />
        </div>
      </div>
    </section>
  );
};
