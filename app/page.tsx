"use client";
import { LandingPageComponent } from "@/components/landing-page";
import { FeatureCarouselComponent } from "@/components/feature-carousel";
import { ServicesCarouselComponent } from "@/components/services-carousel";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPageComponent />
      <ServicesCarouselComponent />
      <FeatureCarouselComponent />
    </main>
  );
}
