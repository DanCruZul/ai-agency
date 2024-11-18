"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Jane Smith",
    role: "UX Designer",
    company: "fusionone",
    text: "I was blown away by the accuracy and speed of the AI chatbot on Brainwave. It was able to understand my queries and provide relevant recommendations in seconds.",
    image: "/testimonial-1.webp",
  },
  {
    id: 2,
    name: "John Doe",
    role: "UX Designer",
    company: "fusiontwo",
    text: "Brainwave has revolutionized the way I interact with digital assistants. The AI chatbot is able to understand my preferences and provide customized suggestions that are tailored to my needs. The app is user-friendly and intuitive, making it a joy to use.",
    image: "/testimonial-2.webp",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "fusionthree",
    text: "The AI capabilities of Brainwave have transformed our workflow. The intelligent suggestions and quick responses have significantly improved our team's productivity.",
    image: "/testimonial-3.webp",
  },
];

export function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="w-full max-w-[1600px] mx-auto py-24 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          className="text-[#AFAFC2] text-xs font-medium tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          READY TO GET STARTED
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What the community is saying
        </motion.h2>
      </div>

      {/* Testimonial Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_739px] px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-[472px] rounded-[24px] overflow-hidden">
                {/* Background Image with Gradient */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0E0C15]/80 to-[#0E0C15]" />
                </div>

                {/* Content */}
                <div className="relative h-full p-12 flex flex-col">
                  {/* Company Logo and Name */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#89F9E8] to-[#FACB7B] p-[1px]">
                      <div className="w-full h-full rounded-full bg-[#0E0C15]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-[600px]">
                    {testimonial.text}
                  </p>

                  {/* Visit Link Button */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="border-white/10 hover:border-white/20 text-white"
                    >
                      VISIT LINK
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center
            hover:bg-white/5 transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5 text-white/50" />
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center
            hover:bg-white/5 transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5 text-white/50" />
        </button>
      </div>
    </section>
  );
}
