import { motion, MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

type NumberTrackerProps = {
  numbers: number[];
  scrollProgress: MotionValue<number>;
  isTablet: boolean;
};

export const NumberTracker = ({
  numbers,
  scrollProgress,
  isTablet,
}: NumberTrackerProps) => {
  const y = useTransform(
    scrollProgress,
    [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
    isTablet
      ? ["0%", "-25%", "-25%", "-50%", "-50%", "-75%"]
      : ["0%", "0%", "-25%", "-35%", "-50%", "-75%"]
  );

  return (
    <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
      <h1 className="text-[6rem] font-bold leading-[1] text-primary md:text-[14rem]">
        0
      </h1>
      <motion.div className="text-center" style={{ y }}>
        {numbers.map((number, index) => (
          <h1
            key={index}
            className="text-[6rem] font-bold leading-[1] text-primary md:text-[14rem]"
          >
            {number}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};
