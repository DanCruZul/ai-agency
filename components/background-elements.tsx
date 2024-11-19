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
      {/* Base Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.15)_0%,transparent_70%)]"
          />
        </div>
      </div>

      {/* Animated Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-electric-cyan/30"
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

      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(46,196,182,0.1) 0%, rgba(0,0,0,0) 70%)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          opacity,
        }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-quantum/10 rounded-full blur-3xl"
        style={{ y: y1, x: "25%" }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-ai-mint/10 rounded-full blur-3xl"
        style={{ y: y2, right: "25%" }}
      />

      {/* Neural Grid Pattern */}
      <div
        className="absolute inset-0
          bg-[linear-gradient(rgba(123,44,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(123,44,191,0.05)_1px,transparent_1px)]
          bg-[size:100px_100px]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />
    </div>
  );
}
