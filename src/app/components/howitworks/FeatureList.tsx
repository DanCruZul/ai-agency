import { FeatureCard } from './FeatureCard';
import type { Feature } from './types';

type FeatureListProps = {
  features: Feature[];
};

export const FeatureList = ({ features }: FeatureListProps) => (
  <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
    {features.map((feature, index) => (
      <FeatureCard key={index} {...feature} />
    ))}
  </div>
);