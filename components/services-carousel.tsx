"use client";
import {
  MessageSquare,
  Zap,
  Globe,
  Timer,
  ArrowRight,
  Brain,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Ask anything",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    icon: MessageSquare,
    iconBg: "neural",
    iconColor: "electric-cyan",
  },
  {
    title: "Improve everyday",
    description:
      "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    icon: Zap,
    iconBg: "neural",
    iconColor: "electric-cyan",
  },
  {
    title: "Connect everywhere",
    description:
      "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    icon: Globe,
    iconBg: "neural",
    iconColor: "electric-cyan",
  },
  {
    title: "Fast responding",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    icon: Timer,
    iconBg: "neural",
    iconColor: "electric-cyan",
  },
  {
    title: "Advanced Learning",
    description:
      "Adaptive AI system that learns from interactions to provide increasingly personalized and relevant responses.",
    icon: Brain,
    iconBg: "neural",
    iconColor: "electric-cyan",
  },
  {
    title: "Secure Chat",
    description:
      "End-to-end encryption and advanced security measures to protect your conversations and personal data.",
    icon: Lock,
    iconBg: "neural",
    iconColor: "electric-cyan",
  },
];

export function ServicesCarouselComponent() {
  return (
    <section className="w-full z-10 py-24">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chat Smarter, Not Harder with{" "}
          <span className="gradient-word">Brainwave</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="holo-card relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${feature.iconBg}/80`}
                  >
                    <feature.icon
                      className={`w-6 h-6 text-${feature.iconColor}`}
                    />
                  </div>
                  <button
                    className="flex items-center gap-2 text-[12px] font-mono text-electric-cyan
                      hover:text-ai-mint transition-colors tracking-wider"
                  >
                    EXPLORE MORE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
