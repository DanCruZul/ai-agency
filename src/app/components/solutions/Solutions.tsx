"use client";
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutionsDefaults } from "./defaults";
import { PreviewCard } from "./PreviewCard";
import { SolutionsHeader } from "./SolutionsHeader";
import { TabButton } from "./TabButton";
import type { SolutionsComponentProps } from "./types";

export const Solutions = memo((props: SolutionsComponentProps) => {
  const { tagline, heading, description, tabs } = {
    ...solutionsDefaults,
    ...props,
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <SolutionsHeader
          tagline={tagline}
          heading={heading}
          description={description}
        />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-2">
            {tabs.map((tab, index) => (
              <TabButton
                key={index}
                icon={tab.icon}
                label={tab.label}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
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
});

Solutions.displayName = "Solutions";
