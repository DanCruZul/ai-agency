"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, Volume2, Play, ImageIcon, Maximize2 } from "lucide-react";
import { Button } from "./ui/button";

// Design System
const designSystem = {
  colors: {
    primary: {
      gradient: "from-[#1A1A1F] via-[#0F0F13] to-[#0B0B0F]",
      accent: "from-quantum via-ai-mint to-electric-cyan",
    },
    text: {
      primary: "text-white",
      secondary: "text-white/70",
      accent: "text-electric-cyan",
    },
    background: {
      card: "bg-[#0B0B0F]",
      overlay: "bg-black/50",
    },
    border: {
      default: "border-white/5",
      hover: "border-electric-cyan/30",
    },
  },
  animations: {
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  },
  shadows: {
    sm: "shadow-[0_2px_10px_rgba(32,227,178,0.07)]",
    md: "shadow-[0_4px_20px_rgba(32,227,178,0.1)]",
    lg: "shadow-[0_8px_30px_rgba(32,227,178,0.15)]",
  },
};

const features = [
  {
    title: "Smartest AI",
    description: "Experience the power of AI",
    features: ["Smart Learning", "Neural Net", "Computer Vision"],
    gradient: "from-[#1A1A1F] via-[#0F0F13] to-[#0B0B0F]",
    accentGradient: "from-quantum via-ai-mint to-electric-cyan",
  },
  {
    title: "Photo editing",
    description:
      "Automatically enhance your photos using our AI app's photo editing feature",
    gradient: "from-[#1A1A1F] via-[#0F0F13] to-[#0B0B0F]",
    accentGradient: "from-quantum via-ai-mint to-electric-cyan",
  },
  {
    title: "Video generation",
    description:
      "The world's most powerful AI photo and video art generation engine",
    gradient: "from-[#1A1A1F] via-[#0F0F13] to-[#0B0B0F]",
    accentGradient: "from-quantum via-ai-mint to-electric-cyan",
    controls: [Mic, Volume2, Play, ImageIcon, Maximize2],
  },
];

export function AiCreativeToolUi() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Gradients */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={designSystem.animations.transition}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
            rounded-full bg-gradient-radial from-electric-cyan/5 via-transparent
            to-transparent opacity-20 blur-3xl"
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 max-w-[1280px] relative z-10"
        style={{ scale }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={designSystem.animations.transition}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={designSystem.animations.transition}
        >
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Generative{" "}
            <span
              className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                text-transparent"
            >
              AI
            </span>{" "}
            made for creators.
          </h1>
          <p className={designSystem.colors.text.secondary}>
            Brainwave unlocks the potential of AI-powered applications
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${index === 0 ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ...designSystem.animations.transition,
                delay: index * 0.2,
              }}
            >
              <motion.div
                className={`relative h-[400px] rounded-3xl overflow-hidden p-8 bg-[#0B0B0F] border
                border-white/5 shadow-[0_4px_20px_rgba(32,227,178,0.1)] backdrop-blur-sm
                hover:border-electric-cyan/30 transition-all duration-500`}
                whileHover={designSystem.animations.hover}
                whileTap={designSystem.animations.tap}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90
                  transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={designSystem.animations.transition}
                />
                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ...designSystem.animations.transition,
                      delay: 0.2,
                    }}
                  >
                    <h2
                      className="text-2xl font-medium bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                        bg-clip-text text-transparent mb-4"
                    >
                      {feature.title}
                    </h2>
                    <p className="text-white/70 mb-8">{feature.description}</p>
                    {feature.features && (
                      <div className="space-y-4">
                        {feature.features.map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              ...designSystem.animations.transition,
                              delay: i * 0.1,
                            }}
                          >
                            <div className="w-2 h-2 rounded-full bg-electric-cyan" />
                            <span className="text-white/70">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {feature.controls ? (
                    <motion.div
                      className="flex justify-between mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...designSystem.animations.transition,
                        delay: 0.4,
                      }}
                    >
                      {feature.controls.map((Icon, i) => (
                        <motion.button
                          key={i}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-quantum/10 to-electric-cyan/10
                            backdrop-blur-sm border border-white/5 flex items-center justify-center
                            hover:border-electric-cyan/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-5 h-5 text-electric-cyan" />
                        </motion.button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...designSystem.animations.transition,
                        delay: 0.4,
                      }}
                    >
                      <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                        <p className="text-white/70 font-mono">
                          {index === 0
                            ? "Start creating with AI"
                            : "Hey Brainwave, enhance this content"}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
