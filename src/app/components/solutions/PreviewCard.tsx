import { motion } from "framer-motion";
import { MetricsDisplay } from "./MetricsDisplay";
import type { TabContent } from "./types";

export const PreviewCard = ({ content }: { content: TabContent }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card text-card-foreground border border-border p-8 backdrop-blur-sm">
      <div className="mb-8 space-y-4">
        <h3 className="text-2xl font-bold md:text-3xl text-foreground">
          {content.title}
        </h3>
        <p className="text-gray-400">{content.description}</p>
        <ul className="space-y-3">
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-primary">
                {index + 1}
              </span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video overflow-hidden rounded-xl"
      >
        <img
          src={content.preview.image}
          alt={content.preview.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute hidden lg:block inset-0 bg-gradient-to-t from-background/90 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-6">
            <MetricsDisplay metrics={content.preview.metrics} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
