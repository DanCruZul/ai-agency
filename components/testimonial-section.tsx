"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  brand: string;
  author: string;
  role: string;
  content: string;
  logoUrl: string;
}

function TestimonialCard({
  brand,
  author,
  role,
  content,
  logoUrl,
}: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[480px] h-[320px] bg-[#0A0A0F]/60 rounded-2xl border border-white/10
        p-8 overflow-hidden hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0" }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10
            to-transparent blur-xl"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Brand/Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <Image src={logoUrl} alt={brand} fill className="object-contain" />
          </div>
          <div>
            <h3 className="text-[18px] font-medium text-white">{author}</h3>
            <p className="text-[14px] text-[#6B7280]">{role}</p>
          </div>
        </div>

        {/* Content */}
        <p className="mt-6 text-[16px] leading-[1.6] text-[#E5E7EB] max-w-[360px]">
          {content}
        </p>

        {/* Start Link Button */}
        <button
          className="mt-auto px-4 py-2 text-[14px] text-white border border-white/10 rounded-lg
            hover:bg-white/5 hover:border-white/20 transition-all duration-300"
        >
          START LINK
        </button>
      </div>
    </motion.div>
  );
}

interface CarouselNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  prevBtnEnabled: boolean;
  nextBtnEnabled: boolean;
}

function CarouselNavigation({
  onPrev,
  onNext,
  prevBtnEnabled,
  nextBtnEnabled,
}: CarouselNavigationProps) {
  return (
    <div
      className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4
        pointer-events-none"
    >
      <button
        onClick={onPrev}
        className={`w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center
          justify-center hover:scale-105 transition-transform pointer-events-auto
          ${!prevBtnEnabled && "opacity-50 cursor-not-allowed hover:scale-100"}`}
        aria-label="Previous testimonial"
        disabled={!prevBtnEnabled}
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={onNext}
        className={`w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center
          justify-center hover:scale-105 transition-transform pointer-events-auto
          ${!nextBtnEnabled && "opacity-50 cursor-not-allowed hover:scale-100"}`}
        aria-label="Next testimonial"
        disabled={!nextBtnEnabled}
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

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
    role: "UX Designer",
    content:
      "BrainWave has revolutionized the way I interact with digital assistants. The AI chatbot understands my preferences and provides customized suggestions tailored to my needs.",
    logoUrl: "/fusion-two-logo.svg",
  },
  {
    id: 3,
    brand: "fusionthree",
    author: "Sarah Johnson",
    role: "Product Manager",
    content:
      "The AI capabilities of BrainWave have transformed our workflow. The intelligent suggestions and quick responses have significantly improved our team's productivity.",
    logoUrl: "/fusion-three-logo.svg",
  },
];

export function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-block text-[14px] text-[#6B7280] tracking-[1px] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            READY TO GET STARTED
          </motion.span>
          <motion.h2
            className="text-[32px] font-medium text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What the community is saying
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

          {/* Navigation */}
          <CarouselNavigation
            onPrev={scrollPrev}
            onNext={scrollNext}
            prevBtnEnabled={prevBtnEnabled}
            nextBtnEnabled={nextBtnEnabled}
          />
        </div>
      </div>
    </section>
  );
}
