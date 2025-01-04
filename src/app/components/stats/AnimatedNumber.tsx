"use client";
import { memo, useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
};

// Memoize the component to prevent unnecessary re-renders
export const AnimatedNumber = memo(
  ({ value, duration = 1000 }: AnimatedNumberProps) => {
    const [displayValue, setDisplayValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    useEffect(() => {
      if (isInView && !hasAnimated) {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Use a more performant easing function
          const easedProgress =
            progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentValue = Math.round(easedProgress * value);

          setDisplayValue(currentValue);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
            setHasAnimated(true);
          }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }
    }, [isInView, value, duration, hasAnimated]);

    return (
      <span ref={ref} className="inline-block tabular-nums">
        {displayValue}%
      </span>
    );
  }
);

AnimatedNumber.displayName = "AnimatedNumber";
