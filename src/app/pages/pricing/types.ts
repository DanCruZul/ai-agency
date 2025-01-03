import type { ButtonProps } from '@/components/ui/Button';
import { LucideIcon } from 'lucide-react';

export type PricingFeature = {
  title: string;
  description?: string;
  included: boolean;
};

export type PricingTier = {
  name: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    period: string;
  };
  features: PricingFeature[];
  button: ButtonProps & {
    title: string;
    iconRight?: LucideIcon;
  };
  highlight?: boolean;
  badge?: string;
};

export type PricingProps = {
  tagline: string;
  heading: string;
  description: string;
  tiers: PricingTier[];
};