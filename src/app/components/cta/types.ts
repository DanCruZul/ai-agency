import type { ButtonProps } from '../ui/Button';

export type BenefitPoint = {
  title: string;
  description: string;
};

export type CtaProps = {
  headers: string[];
  description: string;
  benefits: BenefitPoint[];
  buttons: (ButtonProps & { title: string })[];
  trial: {
    duration: string;
    features: string[];
  };
};

export type CtaComponentProps = React.ComponentPropsWithoutRef<"section"> & Partial<CtaProps>;