"use client";

import { useEffect, useRef } from "react";
import { ParticleSystem } from "./particle-system";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Initialize particle system
    particleSystemRef.current = new ParticleSystem(
      context,
      canvas.width,
      canvas.height,
    );

    // Animation loop
    const animate = () => {
      if (particleSystemRef.current) {
        particleSystemRef.current.update();
        particleSystemRef.current.addParticles(8);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={520}
      className="w-full h-full rounded-lg"
    />
  );
}
