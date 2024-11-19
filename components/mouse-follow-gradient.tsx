"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseFollowGradient() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("button, a, input").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("button, a, input").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50
          mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background: isHovering ? "rgba(255, 255, 255, 0.2)" : "transparent",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          scale: isHovering ? 1.5 : 1,
          transition: "scale 0.2s ease-out, background 0.2s ease-out",
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isHovering ? 0 : 1,
          transition: "opacity 0.2s ease-out",
        }}
      />

      {/* Gradient follow effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `radial-gradient(
            600px circle at ${cursorXSpring.get() + 16}px ${cursorYSpring.get() + 16}px,
            rgba(29, 78, 216, 0.15),
            transparent 80%
          )`,
        }}
      />
    </>
  );
}
