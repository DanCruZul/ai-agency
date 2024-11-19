"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {/* Animated Gradient Sphere */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 rounded-full
                bg-[radial-gradient(ellipse_at_center,rgba(123,44,191,0.15)_0%,rgba(32,227,178,0.15)_100%)]
                blur-3xl"
            />
          </motion.div>

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-electric-cyan/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Be part of the future of{" "}
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
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-neural/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-neural/5 border border-white/10 rounded-lg px-4 py-3 text-white
                    placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-quantum/50
                    transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neural/5 border border-white/10 rounded-lg px-4 py-3 text-white
                    placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-quantum/50
                    transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-neural/5 border border-white/10 rounded-lg px-4 py-3 text-white
                    placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-quantum/50
                    transition-all resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <Button variant="ai" className="w-full group">
                <span className="relative z-10">Send Message</span>
                <Send className="w-4 h-4 ml-2 relative z-10" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
