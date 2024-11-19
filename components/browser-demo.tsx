"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Image as ImageIcon, Search, MessageSquare } from "lucide-react";

export function BrowserDemo() {
  return (
    <motion.div
      className="max-w-[1200px] mx-auto mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0B0F]">
        {/* Browser Header */}
        <div className="h-[40px] bg-[#1A1A1F] flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center mx-auto gap-6">
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Home className="w-4 h-4 text-white/60" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <ImageIcon className="w-4 h-4 text-white/60" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Search className="w-4 h-4 text-white/60" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <MessageSquare className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>

        {/* Browser Content */}
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src="/robot.webp"
            alt="AI Robot"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]" />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-8 right-8 bg-black/50 backdrop-blur-xl rounded-xl p-3 border
              border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5F57] to-[#FF3B30]" />
              <div className="text-white text-sm">Code generation</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-8 bg-black/50 backdrop-blur-xl rounded-xl p-3 border
              border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#89F9E8] to-[#64C4BC]" />
              <div className="text-white text-sm">AI is generating...</div>
            </div>
          </motion.div>

          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[480px] bg-[#1A1A1F]/80
              backdrop-blur-xl rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D97BF3] to-[#9C55F6] animate-pulse" />
              <span className="text-white text-sm">AI is generating...</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
