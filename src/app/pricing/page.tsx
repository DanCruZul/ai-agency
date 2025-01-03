import { Pricing } from "@/app/components/pricing/Pricing";
import { Logo } from "@/app/components/logo/Logo";
import { Comparison } from "@/app/components/comparison/Comparison";
import { Faq } from "@/app/components/faq/Faq";

export default function PricingPage() {
  return (
    <main>
      <Pricing />
      <Logo />
      <Comparison />
      <Faq />
    </main>
  );
}
