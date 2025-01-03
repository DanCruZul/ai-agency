"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./ui/Logo";
import { useLoading } from "./LoadingProvider";

export function InitialLoader() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size="lg" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-6 left-0 right-0 h-1 bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
