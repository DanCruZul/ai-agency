import { PricingCard } from "./PricingCard";
import type { PricingTier } from "./types";

type PricingTiersProps = {
  tiers: PricingTier[];
};

export const PricingTiers = ({ tiers }: PricingTiersProps) => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {tiers.map((tier, index) => (
      <PricingCard key={index} tier={tier} />
    ))}
  </div>
);