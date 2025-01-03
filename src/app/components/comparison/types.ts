import type { LucideIcon } from 'lucide-react';
import type { ButtonProps } from '@/components/ui/Button';

export type ComparisonFeature = {
  text: string;
  items: (string | boolean)[];
};

export type ComparisonProduct = {
  name: string;
  logo: {
    icon: LucideIcon;
    label: string;
  };
};

export type ComparisonProps = {
  tagline: string;
  heading: string;
  description: string;
  products: ComparisonProduct[];
  features: ComparisonFeature[];
  buttons: (ButtonProps & { title: string })[];
};