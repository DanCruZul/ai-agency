"use client";

import { LandingPageComponent } from "@/components/landing-page";
import { ServicesCarouselComponent } from "@/components/services-carousel";
import { FeatureCarouselComponent } from "@/components/feature-carousel";
import { AiChatSection } from "@/components/ai-chat-section";
import { AiChatBotSection } from "@/components/ai-chat-bot-section";
import { AiCreativeToolUi } from "@/components/ai-creative-tool-ui";
import { PricingSectionComponent } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { BackgroundElements } from "@/components/background-elements";
import { Footer } from "@/components/footer-section";

export default function HomePage() {
  return (
    <div>
      <BackgroundElements />
      <main className="flex min-h-screen flex-col">
        <LandingPageComponent />
        <ServicesCarouselComponent />
        <AiChatSection />
        <AiChatBotSection />
        <AiCreativeToolUi />
        <PricingSectionComponent />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
