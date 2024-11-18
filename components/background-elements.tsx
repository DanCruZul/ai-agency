'use client'

import { motion } from "framer-motion"

export function BackgroundElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#4B3AB1] via-[#3B1D60] to-[#09062B] opacity-30 blur-3xl" />
      <motion.div 
        className="absolute top-1/4 left-20 w-3 h-3 bg-[#FF5733] rounded-full"
        animate={{ y: [-10, 10] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute top-1/3 right-32 w-2 h-2 bg-[#89F9E8] rounded-full"
        animate={{ y: [-15, 15] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FACB7B] rounded-full"
        animate={{ y: [-20, 20] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
    </div>
  )
}