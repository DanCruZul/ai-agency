import { PricingHeader } from "@/components/sections/pricing/PricingHeader";
import { PricingTiers } from "@/components/sections/pricing/PricingTiers";
import { LogoSection } from "@/components/sections/pricing/logo/LogoSection";
import { Comparison } from "@/components/sections/pricing/comparison/Comparison";
import { PricingFaq } from "@/components/sections/pricing/PricingFaq";
import { pricingDefaults } from "@/components/sections/pricing/defaults";

export default function PricingPage() {
  return (
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
  );
}