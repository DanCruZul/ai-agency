"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="max-w-[1200px] mx-auto text-center relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(123,44,191,0.15)_0%,rgba(32,227,178,0.15)_100%)]
          opacity-50 blur-xl"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore the Possibilities
          <br />
          of AI Chatting with{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                bg-clip-text text-transparent animate-gradient-x"
            >
              Brainwave
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-full h-full bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                  rounded-full opacity-75 blur-sm"
              />
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-quantum via-ai-mint
                  to-electric-cyan rounded-full opacity-90"
              />
            </motion.div>
          </span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <Button
            variant="ai"
            className="text-lg px-12 py-6 relative overflow-hidden group"
          >
            <span className="relative z-10 font-medium">Get Started</span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-cyan/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Neural Network Lines */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-quantum/20 via-ai-mint/20
              to-electric-cyan/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
              transformOrigin: "left",
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
