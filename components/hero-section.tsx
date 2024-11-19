"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <div className="max-w-[1200px] mx-auto text-center relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore the Possibilities
        <br />
        of AI Chatting with{" "}
        <span className="relative inline-block">
          <span className="gradient-text">Brainwave</span>
          <div className="absolute -bottom-2 left-0 w-full h-2">
            <div className="w-full h-full bg-button-gradient rounded-full opacity-75 blur-sm" />
            <div className="absolute inset-0 w-full h-full bg-button-gradient rounded-full opacity-90" />
          </div>
        </span>
      </motion.h1>

      <motion.p
        className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button variant="ai" className="text-lg px-8 py-6">
          Get Started
        </Button>
      </motion.div>

      {/* Neural network background effect */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-quantum/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}
