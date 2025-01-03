import type { ButtonProps } from '../ui/Button';
import type { LucideIcon } from 'lucide-react';

export type Feature = {
  number: string;
  tagline: string;
  heading: string;
  description: string;
  buttons: (ButtonProps & {
    title: string;
    iconRight?: LucideIcon;
  })[];
};

export type Layout486Props = {
  features: Feature[];
};

export type Layout486ComponentProps = React.ComponentPropsWithoutRef<"section"> & 
  Partial<Layout486Props>;