import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuestionProps } from './types';

export const AccordionItem = ({ title, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left font-medium md:text-lg"
      >
        <span className="text-foreground">{title}</span>
        <Plus 
          className={cn(
            "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <p className="text-muted-foreground">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};