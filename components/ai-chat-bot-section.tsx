"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import connectSectionImage from "../assets/connect section.png";

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
                className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent
                  to-blue-600/20 rounded-[32px] blur-xl"
              />
              <div className="relative bg-[#13131A] rounded-[32px] p-8 border border-white/10">
                {/* Image Section */}
                <div className="relative w-full aspect-square mb-8">
                  <Image
                    src={connectSectionImage}
                    alt="AI Chat Interface"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 550px"
                    priority
                  />
                </div>

                {/* Chat Input */}
                <div className="relative mt-auto">
                  <div className="flex items-center gap-3 bg-[#1E1E26] rounded-xl px-4 py-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <input
                      type="text"
                      placeholder="Ask anything"
                      className="flex-1 bg-transparent text-white/70 text-sm outline-none
                        placeholder:text-white/40"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white/40 hover:text-white"
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
              <p className="text-white/60 text-sm tracking-wider">
                HOW IT WORKS - 02
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Connect with AI chat bot
              </h2>
              <p className="text-white/60">
                Connect with the AI chatbot to start the conversation. The
                chatbot uses natural language processing to understand your
                queries and provide relevant responses.
              </p>
              <Button
                className="bg-gradient-to-r from-[#3E3E45] to-[#202024] text-white rounded-full px-6
                  hover:opacity-90 transition-opacity border border-white/10"
              >
                CONNECT NOW
              </Button>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 gap-6 mt-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-white/30 font-mono text-sm">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-white font-medium mb-2">
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
