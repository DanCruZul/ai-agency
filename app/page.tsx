"use client";
import { LandingPageComponent } from "@/components/landing-page";
import { FeatureCarouselComponent } from "@/components/feature-carousel";
import { ServicesCarouselComponent } from "@/components/services-carousel";
import { PricingSectionComponent } from "@/components/pricing-section";
import { AiCreativeToolUi } from "@/components/ai-creative-tool-ui";
import { AiChatBotSection } from "@/components/ai-chat-bot-section";
import { AiChatSection } from "@/components/ai-chat-section";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPageComponent />
      <ServicesCarouselComponent />
      <FeatureCarouselComponent />
      <AiChatSection />
      <AiChatBotSection />
      <AiCreativeToolUi />
      <PricingSectionComponent />
    </main>
  );
}
