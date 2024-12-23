"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Code Generation",
    description: "Generate code automatically with AI assistance",
    gradient: "from-quantum to-ai-mint",
  },
  {
    title: "Smart Automation",
    description: "Automate your workflow with AI-powered tools",
    gradient: "from-ai-mint to-electric-cyan",
  },
  {
    title: "Natural Language",
    description: "Interact naturally with AI using plain language",
    gradient: "from-electric-cyan to-quantum",
  },
];

export function FeatureCarouselComponent() {
  const [cardsRef, cardsApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!cardsApi) return;

    cardsApi.on("select", () => {
      setActiveIndex(cardsApi.selectedScrollSnap());
    });
  }, [cardsApi]);

  // Three.js setup and animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(600, 600);
    camera.position.z = 5;

    // Create spiral geometry with gradient effect
    const points = [];
    const numPoints = 300;
    const numRotations = 15;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const angle = t * Math.PI * 2 * numRotations;
      const radius = 3 * (1 - t * 0.5);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = t * 2;
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 300, 0.02, 8, false);

    // Create gradient material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float time;
        
        vec3 colorA = vec3(0.48, 0.17, 0.75); // #7B2CBF (Quantum)
        vec3 colorB = vec3(0.18, 0.77, 0.71); // #2EC4B6 (AI Mint)
        
        void main() {
          float t = (vPosition.x + vPosition.y + vPosition.z) * 0.3 + time;
          vec3 color = mix(colorA, colorB, sin(t) * 0.5 + 0.5);
          gl_FragColor = vec4(color, 0.8);
        }
      `,
      transparent: true,
    });

    const spiral = new THREE.Mesh(geometry, material);
    scene.add(spiral);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      material.uniforms.time.value = time;
      spiral.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      scene.remove(spiral);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const scrollPrev = () => cardsApi?.scrollPrev();
  const scrollNext = () => cardsApi?.scrollNext();

  return (
    <section className="w-full bg-background py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Static Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-white leading-tight">
                Unlock the
                <br />
                power of <span className="gradient-text">AI</span>
              </h2>
              <p className="text-lg text-white/60">
                Brainwave unlocks the potential of AI-powered applications
              </p>
            </div>
            <Button variant="ai" className="h-12 px-8">
              See how it works
            </Button>
          </motion.div>

          {/* Cards Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={cardsRef}>
              <div className="flex gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 p-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="holo-card aspect-[4/3] p-8">
                      <div className="h-full flex flex-col justify-end">
                        <div
                          className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center
                          justify-center`}
                        >
                          <div className="w-6 h-6 bg-background/40 backdrop-blur rounded-lg" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-quantum/20 flex items-center justify-center
                  hover:bg-quantum/5 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5 text-electric-cyan" />
              </button>
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                    activeIndex === index
                        ? "w-8 bg-quantum"
                        : "w-2 bg-quantum/20"
                    } h-2 rounded-full`}
                  />
                ))}
              </div>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-quantum/20 flex items-center justify-center
                  hover:bg-quantum/5 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5 text-electric-cyan" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
