"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, Volume2, Play, ImageIcon, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

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
        transition={{ duration: 0.6 }}
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
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Generative{" "}
            <span
              className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                text-transparent"
            >
              AI
            </span>{" "}
            made for creators
          </h2>
          <p className="text-white/60">
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="holo-card h-[400px] p-8">
                {/* Background Image */}
                <Image
                  src={index === 0 ? "/assets/box 1.png" : "/assets/box 3.png"}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-50"
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-medium bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                        bg-clip-text text-transparent mb-4"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-white/70 mb-8">{feature.description}</p>
                    {feature.features && (
                      <div className="space-y-4">
                        {feature.features.map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-electric-cyan" />
                            <span className="text-white/70">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {feature.controls ? (
                    <div className="flex justify-between mt-auto">
                      {feature.controls.map((Icon, i) => (
                        <Button
                          key={i}
                          variant="ai"
                          size="icon"
                          className="hover:border-electric-cyan/30"
                        >
                          <Icon className="w-5 h-5 text-electric-cyan" />
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-auto">
                      <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                        <p className="text-white/70 font-mono">
                          {index === 0
                            ? "Start creating with AI"
                            : "Hey Brainwave, enhance this content"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
