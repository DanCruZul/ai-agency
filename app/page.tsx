"use client";

import { LandingPageComponent } from "@/components/landing-page";
import { ServicesCarouselComponent } from "@/components/services-carousel";
import { FeatureCarouselComponent } from "@/components/feature-carousel";
import { AiChatSection } from "@/components/ai-chat-section";
import { AiChatBotSection } from "@/components/ai-chat-bot-section";
import { AiCreativeToolUi } from "@/components/ai-creative-tool-ui";
import { PricingSectionComponent } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { ContactSection } from "@/components/contact-section";
import { BackgroundElements } from "@/components/background-elements";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F]">
      <BackgroundElements />
      <div className="relative z-10">
        <LandingPageComponent />
        <ServicesCarouselComponent />
        <FeatureCarouselComponent />
        <AiChatSection />
        <AiChatBotSection />
        <AiCreativeToolUi />
        <PricingSectionComponent />
        <TestimonialSection />
        <ContactSection />
      </div>
    </main>
  );
}
