"use client"

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { MessageSquare, Zap, Globe, Timer, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

export function ServicesCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const features = [
    {
      title: "Ask anything",
      description: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      icon: MessageSquare,
      iconBg: "bg-gradient-to-br from-[#AC6AFF] to-[#6C4AFF]",
      cardGradient: "from-[#89F9E8] via-[#FACB7B] to-[#D87CEE]",
      glowGradient: "from-[#AC6AFF]/20 to-[#6C4AFF]/20"
    },
    {
      title: "Improve everyday",
      description: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      icon: Zap,
      iconBg: "bg-gradient-to-br from-[#FFCB6A] to-[#FF9776]",
      cardGradient: "from-[#FFCB6A] via-[#FF9776] to-[#FF9776]",
      glowGradient: "from-[#FFCB6A]/20 to-[#FF9776]/20"
    },
    {
      title: "Connect everywhere",
      description: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      icon: Globe,
      iconBg: "bg-gradient-to-br from-[#7ADB78] to-[#3ABE86]",
      cardGradient: "from-[#7ADB78] via-[#3ABE86] to-[#3ABE86]",
      glowGradient: "from-[#7ADB78]/20 to-[#3ABE86]/20"
    },
    {
      title: "Fast responding",
      description: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      icon: Timer,
      iconBg: "bg-gradient-to-br from-[#FF776F] to-[#FF4B4B]",
      cardGradient: "from-[#FF776F] via-[#FF4B4B] to-[#FF4B4B]",
      glowGradient: "from-[#FF776F]/20 to-[#FF4B4B]/20"
    }
  ]

  return (
    <section className="w-full bg-[#0B0B0F] py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          Chat Smarter, Not Harder<br />
          with Brainwave
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex-[0_0_384px] min-h-[366px]"
                role="group"
                aria-label={feature.title}
              >
                <div className="absolute inset-0 rounded-[32px] p-[1px] bg-gradient-to-b hover:bg-gradient-to-r transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))`
                  }}
                >
                  <div className="relative h-full bg-[#0E0C15] rounded-[32px] p-8 overflow-hidden group">
                    {/* Gradient Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{
                        background: `linear-gradient(to right, ${feature.glowGradient})`
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-8",
                        feature.iconBg
                      )}>
                        <feature.icon className="w-6 h-6 text-[#0E0C15]" />
                      </div>

                      <h3 className="text-white text-xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-white/70 text-sm mb-8 flex-grow">{feature.description}</p>

                      <div className="flex items-center text-white group/link">
                        <span className="text-sm font-medium mr-5">explore more</span>
                        <ChevronRight className="w-6 h-6 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-all",
                selectedIndex === index ? "bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE]" : ""
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                selectedIndex === index ? "bg-white" : "bg-white/50"
              )} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}