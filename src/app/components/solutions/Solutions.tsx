"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutionsDefaults } from "./defaults";
import { PreviewCard } from "./PreviewCard";
import type { SolutionsComponentProps, SolutionTab } from "./types";

export const Solutions = (props: SolutionsComponentProps) => {
  const { tagline, heading, description, tabs } = {
    ...solutionsDefaults,
    ...props,
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16">
          <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
            {description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                    activeTab === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-white hover:bg-primary/5"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      activeTab === index
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PreviewCard content={tabs[activeTab].content} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
