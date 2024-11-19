"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    brand: "fusionone",
    author: "Jane Smith",
    role: "UX Designer",
    content:
      "I was blown away by the accuracy and speed of the AI chatbot on BrainWave. It was able to understand my queries and provide comprehensive solutions in seconds.",
    logoUrl: "/fusion-one-logo.svg",
  },
  {
    id: 2,
    brand: "fusiontwo",
    author: "John Doe",
    role: "Product Manager",
    content:
      "BrainWave has revolutionized the way I interact with digital assistants. The AI chatbot understands my preferences and provides customized suggestions tailored to my needs.",
    logoUrl: "/fusion-two-logo.svg",
  },
  {
    id: 3,
    brand: "fusionthree",
    author: "Sarah Johnson",
    role: "Tech Lead",
    content:
      "The AI capabilities of BrainWave have transformed our workflow. The intelligent suggestions and quick responses have significantly improved our team's productivity.",
    logoUrl: "/fusion-three-logo.svg",
  },
];

function TestimonialCard({ author, role, content, logoUrl }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[480px] h-[320px] bg-neural/5 backdrop-blur-xl rounded-2xl border
        border-white/10 p-8 overflow-hidden group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-quantum/10 via-ai-mint/10
          to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity
          duration-500 -z-10`}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-quantum via-ai-mint to-electric-cyan
              p-[1px]"
          >
            <div className="w-full h-full rounded-xl bg-neural/80 backdrop-blur-xl relative overflow-hidden">
              <Image
                src={logoUrl}
                alt={author}
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{author}</h3>
            <p className="text-sm text-white/60">{role}</p>
          </div>
        </div>

        {/* Content */}
        <p className="mt-6 text-white/80 leading-relaxed">{content}</p>

        {/* Action Button */}
        <button
          className="mt-auto px-4 py-2 text-sm text-white/80 border border-white/10 rounded-lg
            group-hover:border-electric-cyan/50 group-hover:text-white transition-all
            duration-300 bg-neural/5 backdrop-blur-sm"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
}

export function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative w-full py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-electric-cyan text-sm tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                  bg-clip-text text-transparent animate-gradient-x"
              >
                What our users are saying
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
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 ml-[-1rem]">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_auto] pl-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4
              pointer-events-none"
          >
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-neural/50 border border-white/10 flex items-center
                justify-center hover:border-electric-cyan/50 transition-all duration-300
                pointer-events-auto backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-neural/50 border border-white/10 flex items-center
                justify-center hover:border-electric-cyan/50 transition-all duration-300
                pointer-events-auto backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
