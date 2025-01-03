import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GrainEffect } from "@/components/ui/GrainEffect";
import { PricingHeader } from "./PricingHeader";
import { PricingTiers } from "./PricingTiers";
import { LogoSection } from "./logo";
import { Comparison } from "./comparison/Comparison";
import { PricingFaq } from "./PricingFaq";
import { pricingDefaults } from "./defaults";

export const PricingPage = () => {
  return (
    <div className="min-h-screen text-foreground">
      <GrainEffect />
      <div className="relative">
        <Navbar />
        <main>
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
              <PricingHeader {...pricingDefaults} />
              <PricingTiers tiers={pricingDefaults.tiers} />
            </div>
          </section>
          <LogoSection />
          <Comparison />
          <PricingFaq />
        </main>
        <Footer />
      </div>
    </div>
  );
};