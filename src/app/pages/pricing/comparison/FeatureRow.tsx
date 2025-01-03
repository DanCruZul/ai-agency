import { Check, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { ComparisonFeature } from './types';

type FeatureRowProps = {
  feature: ComparisonFeature;
};

export const FeatureRow = ({ feature }: FeatureRowProps) => {
  return (
    <div className="grid grid-cols-1 border-b border-border last:border-b-0 sm:grid-cols-3">
      {/* Feature name */}
      <div className="border-b border-border p-4 font-medium text-foreground sm:border-b-0 sm:p-6 sm:font-normal sm:text-muted-foreground">
        {feature.text}
      </div>
      
      {/* AI Platform vs Competitors */}
      <div className="grid grid-cols-2 sm:contents">
        <div className="flex items-center justify-center bg-primary/5 p-4 sm:p-6">
          {typeof feature.items[0] === 'boolean' ? (
            feature.items[0] ? (
              <Check className="h-5 w-5 text-primary" />
            ) : (
              <X className="h-5 w-5 text-muted-foreground" />
            )
          ) : (
            <span className="font-medium">{feature.items[0]}</span>
          )}
        </div>
        <div className="flex items-center justify-center p-4 sm:p-6">
          {typeof feature.items[1] === 'boolean' ? (
            feature.items[1] ? (
              <Check className="h-5 w-5 text-primary" />
            ) : (
              <X className="h-5 w-5 text-muted-foreground" />
            )
          ) : (
            <span className="font-medium">{feature.items[1]}</span>
          )}
        </div>
      </div>
    </div>
  );
};