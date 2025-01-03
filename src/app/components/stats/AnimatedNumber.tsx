import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
};

export const AnimatedNumber = ({
  value,
  duration = 1500,
}: AnimatedNumberProps) => {
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

        // Calculate the current value using linear interpolation
        const currentValue = Math.round(progress * value);
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
    <span ref={ref} className="inline-block">
      {displayValue}%
    </span>
  );
};
