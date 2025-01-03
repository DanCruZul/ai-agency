import type { PricingProps } from './types';

export const PricingHeader = ({ tagline, heading, description }: Partial<PricingProps>) => (
  <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16">
    <p className="mb-4 font-semibold text-primary md:mb-6">{tagline}</p>
    <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
      {heading}
    </h2>
    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
      {description}
    </p>
  </div>
);