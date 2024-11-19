"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundElements() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#1a1a2e] to-[#0B0B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-20" />
        </div>
      </div>

      {/* Animated Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-500/30"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [particle.y - 50, particle.y + 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Floating Elements */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(0,0,0,0) 70%)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          opacity,
        }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        style={{ y: y1, x: "25%" }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        style={{ y: y2, right: "25%" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:100px_100px]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />
    </div>
  );
}
