"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export function MouseFollowGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Animate the cursor to the new position
      cursorControls.start({
        x: e.clientX - 16,
        y: e.clientY - 16,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.1,
        },
      });
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
  }, [cursorControls]);

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50
          mix-blend-difference"
        animate={cursorControls}
        style={{
          background: isHovering ? "rgba(255, 255, 255, 0.2)" : "transparent",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.1,
        }}
      />

      {/* Gradient follow effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        animate={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(29, 78, 216, 0.15),
            transparent 80%
          )`,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.1,
        }}
      />

      {/* Particle trail effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: `radial-gradient(
            8px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.3),
            transparent
          )`,
        }}
      />
    </>
  );
}
