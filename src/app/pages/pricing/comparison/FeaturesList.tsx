import { Check, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { ComparisonFeature } from './types';

type FeaturesListProps = {
  features: ComparisonFeature[];
};

export const FeaturesList = ({ features }: FeaturesListProps) => (
  <div>
    {features.map((feature, index) => (
      <div
        key={index}
        className="grid grid-cols-[1fr_1fr] border-b border-border last:border-b-0 sm:grid-cols-[1.75fr_1fr_1fr]"
      >
        <div className="col-span-2 border-b border-border p-4 font-medium sm:col-span-1 sm:border-none sm:p-6 sm:font-normal sm:text-muted-foreground">
          {feature.text}
        </div>
        {feature.items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "flex items-center justify-center p-4 text-center sm:p-6",
              idx === 0 && "bg-primary/5"
            )}
          >
            {typeof item === 'boolean' ? (
              item ? (
                <Check className="h-5 w-5 text-primary" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground" />
              )
            ) : (
              <span className="font-medium">{item}</span>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
);