"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign up",
    description:
      "Create an account with Brainwave - AI chat app by providing your name, email",
  },
  {
    number: "02",
    title: "Connect with AI Chatbot",
    description: "Connect with the AI chatbot to start the conversation",
  },
  {
    number: "03",
    title: "Get Personalized Recommendations",
    description: "Get personalized recommendations based on your preferences",
  },
  {
    number: "04",
    title: "Explore and Engage",
    description: "Explore all features and engage with the AI assistant",
  },
];

export function AiChatBotSection() {
  return (
    <section className="w-full z-10 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Chat Interface */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-[550px] mx-auto">
              {/* Background Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-quantum/20 via-ai-mint/20
                  to-electric-cyan/20 rounded-[32px] blur-xl"
              />
              <div className="relative bg-neural/5 rounded-[32px] p-8 border border-white/10 backdrop-blur-xl">
                {/* Image Section */}
                <div className="relative w-full aspect-square mb-8">
                  <Image
                    src="/connect section.png"
                    alt="AI Chat Interface"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 550px"
                    priority
                  />
                </div>

                {/* Chat Input */}
                <div className="relative mt-auto">
                  <div className="flex items-center gap-3 bg-neural/30 rounded-xl px-4 py-3 border border-white/5">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" />
                    <input
                      type="text"
                      placeholder="Ask anything"
                      className="flex-1 bg-transparent text-white/70 text-sm outline-none
                        placeholder:text-white/40"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white/40 hover:text-electric-cyan transition-colors"
                    >
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-electric-cyan text-sm tracking-wider uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                HOW IT WORKS - 02
              </motion.p>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="relative inline-block">
                  <span
                    className="relative z-10 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                      bg-clip-text text-transparent animate-gradient-x"
                  >
                    Connect with AI chat bot
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
              </motion.h2>
              <p className="text-white/60">
                Connect with the AI chatbot to start the conversation. The
                chatbot uses natural language processing to understand your
                queries and provide relevant responses.
              </p>
              <Button variant="ai" className="group">
                <span className="relative z-10">CONNECT NOW</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Button>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 gap-6 mt-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-electric-cyan font-mono text-sm group-hover:text-quantum transition-colors">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-white font-medium mb-2 group-hover:text-electric-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
