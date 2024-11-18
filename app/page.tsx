"use client";

import { LandingPageComponent } from "@/components/landing-page";
import { ServicesCarouselComponent } from "@/components/services-carousel";
import { FeatureCarouselComponent } from "@/components/feature-carousel";
import { AiChatSection } from "@/components/ai-chat-section";
import { AiChatBotSection } from "@/components/ai-chat-bot-section";
import { AiCreativeToolUi } from "@/components/ai-creative-tool-ui";
import { PricingSectionComponent } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { MouseFollowGradient } from "@/components/mouse-follow-gradient";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0F]">
      <MouseFollowGradient>
        <LandingPageComponent />
        <ServicesCarouselComponent />
        <FeatureCarouselComponent />
        <AiChatSection />
        <AiChatBotSection />
        <AiCreativeToolUi />
        <PricingSectionComponent />
        <TestimonialSection />
      </MouseFollowGradient>
    </main>
  );
}
