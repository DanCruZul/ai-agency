"use client";

import { pricingDefaults } from "./defaults";
import { PricingCard } from "./PricingCard";
import type { PricingComponentProps } from "./types";

export const Pricing = (props: PricingComponentProps) => {
  const { tagline, heading, description, tiers, ...rest } = {
    ...pricingDefaults,
    ...props,
  };

  return (
    <section id="pricing" className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16">
          <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};
