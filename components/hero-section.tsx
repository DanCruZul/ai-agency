"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import robotImage from "../assets/robot.png";

export function HeroSection() {
  return (
    <div className="max-w-[1200px] z-10 mx-auto text-center relative">
      <motion.div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={robotImage}
          alt="AI Robot"
          width={600}
          height={600}
          className="opacity-60"
          priority
        />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore the Possibilities
        <br />
        of AI Chatting with{" "}
        <span className="relative inline-block italic">
          Brainwave
          <div className="absolute -bottom-2 left-0 w-full h-2">
            <div
              className="w-full h-full bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE]
                rounded-full opacity-75 blur-sm"
            />
            <div
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#89F9E8] via-[#FACB7B]
                to-[#D87CEE] rounded-full opacity-90"
            />
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
        <Button
          className="bg-white hover:bg-white/90 text-black rounded-full px-8 py-6 text-base
            font-medium"
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
