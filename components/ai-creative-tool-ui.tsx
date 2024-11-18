"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Mic, ImageIcon, Maximize2, Volume2 } from "lucide-react";
import box1Image from '@/assets/box 1.png'
import box3Image from '@/assets/box 3.png'

export function AiCreativeToolUi() {
  return (
    <section className="relative w-full min-h-screen bg-[#030014] overflow-hidden py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
            rounded-full bg-gradient-radial from-[#7928CA] via-[#030014] to-transparent
            opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-medium text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Generative AI made for creators.
          </motion.h1>
          <motion.p
            className="text-white/70 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Brainwave unlocks the potential of AI-powered applications
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Smartest AI Card - Full Width */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden md:col-span-2 min-h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-between h-full">
              <div className="flex-1">
                <h2 className="text-2xl font-medium text-white mb-4">
                  Smartest AI
                </h2>
                <p className="text-white/70 text-sm mb-8">
                  Experience the power of AI
                </p>
                <div className="flex space-x-4">
                  <button className="btn-with-icon">
                    <Play className="w-4 h-4" />
                    <span>Start</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <Image
                  src={box1Image}
                  alt="Smartest AI"
                  width={400}
                  height={400}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 rounded-full h-1 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7928CA] to-[#38BDF8]"
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#7928CA] animate-pulse" />
                <span className="text-white/50 text-sm">AI is generating</span>
              </div>
            </div>
          </motion.div>

          {/* Voice Generation Card */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex justify-between h-full">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white mb-4">
                  Voice Generation
                </h3>
                <p className="text-white/70 text-sm mb-8">
                  Convert text to speech
                </p>
                <div className="flex space-x-4">
                  <button className="btn-with-icon">
                    <Mic className="w-4 h-4" />
                    <span>Record</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <Image
                  src={box3Image}
                  alt="Voice Generation"
                  width={200}
                  height={200}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
          </motion.div>

          {/* Photo Editing Card */}
          <motion.div
            className="glass-card p-8 relative min-h-[400px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white mb-2">
                Photo editing
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Automatically enhance your photos using our AI app's photo
                editing feature.
              </p>
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image
                  src="/assets/robot.png"
                  alt="Photo Edit Preview"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#0A0A0A] rounded-lg p-3 backdrop-blur-sm">
                    <code className="font-mono text-sm text-white/70">
                      Hey Brainwave, enhance this photo
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Generation Card */}
          <motion.div
            className="glass-card p-8 relative min-h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-medium text-white mb-2">
                Video generation
              </h2>
              <p className="text-white/70 text-sm mb-6">
                The world's most powerful AI photo and video art generation
                engine.
              </p>

              {/* Control Buttons */}
              <div className="flex justify-between mb-6">
                {[Mic, Volume2, Play, ImageIcon, Maximize2].map(
                  (Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                        hover:bg-white/20 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-white/70" />
                    </button>
                  ),
                )}
              </div>

              {/* Video Preview */}
              <div className="relative flex-1 rounded-xl overflow-hidden bg-[#0A0A0A]">
                <Image
                  src="/assets/robot.png"
                  alt="Video Preview"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-[#7928CA] animate-pulse" />
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
