"use client";

import { motion } from "framer-motion";
import { Mic, Volume2, Play, ImageIcon, Maximize2 } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    title: "Smartest AI",
    description: "Experience the power of AI",
    features: ["Smart Learning", "Neural Net", "Computer Vision"],
    gradient: "from-purple-600/20 via-transparent to-blue-600/20",
  },
  {
    title: "Photo editing",
    description:
      "Automatically enhance your photos using our AI app's photo editing feature",
    gradient: "from-pink-600/20 via-transparent to-purple-600/20",
  },
  {
    title: "Video generation",
    description:
      "The world's most powerful AI photo and video art generation engine",
    gradient: "from-blue-600/20 via-transparent to-cyan-600/20",
    controls: [Mic, Volume2, Play, ImageIcon, Maximize2],
  },
];

export function AiCreativeToolUi() {
  return (
    <section className="relative w-full bg-[#0A0A0F] overflow-hidden py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
            rounded-full bg-gradient-radial from-purple-600/20 via-transparent
            to-transparent opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Generative AI made for creators.
          </h1>
          <p className="text-white/70 text-sm">
            Brainwave unlocks the potential of AI-powered applications
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Smartest AI - Full Width */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative h-[400px] rounded-3xl overflow-hidden p-8 bg-[#0F0F13] border
                border-white/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[0].gradient} opacity-50`}
              />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-medium text-white mb-4">
                    {features[0].title}
                  </h2>
                  <p className="text-white/70 text-sm mb-8">
                    {features[0].description}
                  </p>
                  <div className="space-y-4">
                    {features[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <Button neon>Start Generating</Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo Editing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="relative h-[400px] rounded-3xl overflow-hidden p-8 bg-[#0F0F13] border
                border-white/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[1].gradient} opacity-50`}
              />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-medium text-white mb-4">
                    {features[1].title}
                  </h2>
                  <p className="text-white/70 text-sm">
                    {features[1].description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-white/70 text-sm font-mono">
                      Hey Brainwave, enhance this photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Generation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="relative h-[400px] rounded-3xl overflow-hidden p-8 bg-[#0F0F13] border
                border-white/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[2].gradient} opacity-50`}
              />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-2xl font-medium text-white mb-4">
                    {features[2].title}
                  </h2>
                  <p className="text-white/70 text-sm mb-8">
                    {features[2].description}
                  </p>
                  <div className="flex justify-between">
                    {features[2].controls.map((Icon, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                          hover:bg-white/20 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-white/70" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-white/70 text-sm">
                      Video generated!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
