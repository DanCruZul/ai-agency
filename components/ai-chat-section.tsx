"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ParticleCanvas } from "./particle-canvas";

const features = [
  "Seamless Integration",
  "Smart Automation",
  "Top-notch Security",
];

export function AiChatSection() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">
              AI chat app for{" "}
              <span
                className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                  text-transparent"
              >
                seamless collaboration
              </span>
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-quantum mr-3">
                    <Check className="w-4 h-4 text-background" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="ai">TRY IT NOW</Button>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative">
            <motion.p
              className="text-white/60 mb-12 text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              With smart automation and top-notch security, it&apos;s the
              perfect solution for teams looking to work smarter.
            </motion.p>

            <div className="relative w-full aspect-square flex items-center justify-center">
              <div
                className="absolute inset-0 bg-gradient-to-br from-quantum/10 via-ai-mint/10
                  to-electric-cyan/10 rounded-lg opacity-30 blur-xl"
              />
              <div className="relative w-full h-full">
                <ParticleCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
