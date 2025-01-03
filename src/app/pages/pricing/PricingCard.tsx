import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import type { PricingTier } from './types';

export const PricingCard = ({ tier }: { tier: PricingTier }) => {
  const IconRight = tier.button.iconRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-2xl bg-card text-card-foreground border border-border p-8 backdrop-blur-sm",
        tier.highlight && "border-primary/50 shadow-[0_0_30px_-5px_hsl(var(--primary))]"
      )}
    >
      {tier.badge && (
        <div className="absolute -top-3 right-6">
          <div className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
            {tier.badge}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold">{tier.name}</h3>
        <p className="mt-2 text-muted-foreground">{tier.description}</p>
        <div className="mt-6">
          <span className="text-5xl font-bold">
            {tier.price.currency}{tier.price.amount}
          </span>
          <span className="text-muted-foreground">/{tier.price.period}</span>
        </div>
      </div>

      <div className="space-y-4">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <div className="mt-1 rounded-full bg-primary/20 p-1 text-primary">
                <Check className="size-4" />
              </div>
            ) : (
              <div className="mt-1 rounded-full bg-muted p-1 text-muted-foreground">
                <X className="size-4" />
              </div>
            )}
            <div>
              <p className="text-foreground">{feature.title}</p>
              {feature.description && (
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button 
          className="w-full"
          {...tier.button}
          variant={tier.highlight ? "gradient" : tier.button.variant}
          iconRight={IconRight}
        >
          {tier.button.title}
        </Button>
      </div>
    </motion.div>
  );
};