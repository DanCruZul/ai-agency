"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MessageSquare, Zap, Globe, Timer, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const features = [
    {
      title: "Ask anything",
      description:
        "Lets users quickly find answers to their questions without having to search through multiple sources.",
      icon: MessageSquare,
      iconBg: "#6C4AFF",
      iconColor: "#AC6AFF",
      gradientStart: "rgba(108, 74, 255, 0.5)",
      gradientEnd: "rgba(172, 106, 255, 0.2)",
    },
    {
      title: "Improve everyday",
      description:
        "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      icon: Zap,
      iconBg: "#FF9776",
      iconColor: "#FFCB6A",
      gradientStart: "rgba(255, 151, 118, 0.5)",
      gradientEnd: "rgba(255, 203, 106, 0.2)",
    },
    {
      title: "Connect everywhere",
      description:
        "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      icon: Globe,
      iconBg: "#3ABE86",
      iconColor: "#7ADB78",
      gradientStart: "rgba(58, 190, 134, 0.5)",
      gradientEnd: "rgba(122, 219, 120, 0.2)",
    },
    {
      title: "Fast responding",
      description:
        "Lets users quickly find answers to their questions without having to search through multiple sources.",
      icon: Timer,
      iconBg: "#FF4B4B",
      iconColor: "#FF776F",
      gradientStart: "rgba(255, 75, 75, 0.5)",
      gradientEnd: "rgba(255, 119, 111, 0.2)",
    },
  ];

  return (
    <section className="w-full bg-[#0B0B0F] py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          Chat Smarter, Not Harder
          <br />
          with Brainwave
        </h2>

        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_400px]
                  min-h-[400px] px-4"
                role="group"
                aria-label={feature.title}
              >
                <div
                  className="relative h-full rounded-[40px] p-8 overflow-hidden"
                  style={{
                    background: `linear-gradient(167.96deg, ${feature.gradientStart}, transparent),
                               linear-gradient(167.96deg, transparent, ${feature.gradientEnd})`,
                    backgroundBlendMode: "overlay",
                  }}
                >
                  <div className="absolute inset-[1px] rounded-[39px] bg-[#0E0C15]/90 z-0" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                      style={{ backgroundColor: feature.iconBg }}
                    >
                      <feature.icon
                        className="w-8 h-8"
                        style={{ color: feature.iconColor }}
                      />
                    </div>

                    {/* Text Content */}
                    <h3 className="text-white text-2xl font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-[#757185] text-base mb-auto">
                      {feature.description}
                    </p>

                    {/* Explore More Link */}
                    <div className="flex items-center mt-8">
                      <span className="text-white text-sm font-medium tracking-wider uppercase mr-4">
                        EXPLORE MORE
                      </span>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/20 hover:bg-white/40",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
