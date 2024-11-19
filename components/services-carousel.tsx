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
    iconBg: "#6C4AFF",
    iconColor: "#AC6AFF",
    gradientStart: "rgba(108, 74, 255, 0.5)",
    gradientEnd: "rgba(172, 106, 255, 0.2)",
  },
  {
    title: "Improve everyday",
    description:
      "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    icon: Zap,
    iconBg: "#FF9776",
    iconColor: "#FFCB6A",
    gradientStart: "rgba(255, 151, 118, 0.5)",
    gradientEnd: "rgba(255, 203, 106, 0.2)",
  },
  {
    title: "Connect everywhere",
    description:
      "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    icon: Globe,
    iconBg: "#3ABE86",
    iconColor: "#7ADB78",
    gradientStart: "rgba(58, 190, 134, 0.5)",
    gradientEnd: "rgba(122, 219, 120, 0.2)",
  },
  {
    title: "Fast responding",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    icon: Timer,
    iconBg: "#FF4B4B",
    iconColor: "#FF776F",
    gradientStart: "rgba(255, 75, 75, 0.5)",
    gradientEnd: "rgba(255, 119, 111, 0.2)",
  },
  {
    title: "Advanced Learning",
    description:
      "Adaptive AI system that learns from interactions to provide increasingly personalized and relevant responses.",
    icon: Brain,
    iconBg: "#9C27B0",
    iconColor: "#E1BEE7",
    gradientStart: "rgba(156, 39, 176, 0.5)",
    gradientEnd: "rgba(225, 190, 231, 0.2)",
  },
  {
    title: "Secure Chat",
    description:
      "End-to-end encryption and advanced security measures to protect your conversations and personal data.",
    icon: Lock,
    iconBg: "#2196F3",
    iconColor: "#90CAF9",
    gradientStart: "rgba(33, 150, 243, 0.5)",
    gradientEnd: "rgba(144, 202, 249, 0.2)",
  },
];

export function ServicesCarouselComponent() {
  return (
    <section className="w-full bg-[#0B0B0F] py-24">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chat Smarter, Not Harder
          <br />
          with Brainwave
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-[#0F0F13] rounded-3xl overflow-hidden border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-50"
                style={{
                  background: `linear-gradient(167.96deg, ${feature.gradientStart}, transparent),
                             linear-gradient(167.96deg, transparent, ${feature.gradientEnd})`,
                }}
              />
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: feature.iconColor }}
                    />
                  </div>
                  <button
                    className="flex items-center gap-2 text-[12px] font-mono text-white/60 hover:text-white
                      transition-colors tracking-wider"
                  >
                    EXPLORE MORE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[#757185] text-sm leading-relaxed">
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
