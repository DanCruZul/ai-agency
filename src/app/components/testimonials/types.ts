import type { LucideIcon } from 'lucide-react';

export type ImageProps = {
  src: string;
  alt?: string;
};

export type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

export type TestimonialsProps = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type TestimonialsComponentProps = React.ComponentPropsWithoutRef<"section"> & 
  Partial<TestimonialsProps>;