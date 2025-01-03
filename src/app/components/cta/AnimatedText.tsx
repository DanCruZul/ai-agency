import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type AnimatedTextProps = {
  text: string;
  index: number;
};

export const AnimatedText = ({ text, index }: AnimatedTextProps) => (
  <motion.span
    initial={{ x: index % 2 === 0 ? "-50%" : "50%" }}
    animate={{ x: "0%" }}
    transition={{ type: "spring", bounce: 0 }}
    className={cn(
      "block text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl",
      index !== 0 && "mb-5 md:mb-6"
    )}
  >
    {text}
  </motion.span>
);