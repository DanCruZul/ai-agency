import type { ButtonProps } from '../ui/Button';
import type { LucideIcon } from 'lucide-react';

export type BenefitCard = {
  tagline: string;
  image: {
    src: string;
    alt?: string;
  };
  heading: string;
  description: string;
  button: ButtonProps & {
    title: string;
    iconRight?: LucideIcon;
  };
};

export type BenefitsProps = {
  tagline: string;
  heading: string;
  description: string;
  cards: BenefitCard[];
};

export type BenefitsComponentProps = React.ComponentPropsWithoutRef<"section"> & 
  Partial<BenefitsProps>;