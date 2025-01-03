import { ChevronRight } from 'lucide-react';
import type { BenefitsProps } from './types';

export const benefitsDefaults: BenefitsProps = {
  tagline: "Key Benefits",
  heading: "Transform Your Business with AI",
  description: "Experience the power of artificial intelligence with tangible benefits that drive real business value.",
  cards: [
    {
      tagline: "Efficiency",
      image: {
        src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1000&q=80",
        alt: "AI-powered automation",
      },
      heading: "Automate Complex Tasks",
      description: "Reduce manual work by up to 80% with intelligent automation that learns and adapts to your processes.",
      button: {
        title: "Learn More",
        variant: "link",
        iconRight: ChevronRight,
      },
    },
    {
      tagline: "Intelligence",
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
        alt: "Data insights dashboard",
      },
      heading: "Data-Driven Insights",
      description: "Transform raw data into actionable insights with advanced analytics and predictive modeling.",
      button: {
        title: "Explore Analytics",
        variant: "link",
        iconRight: ChevronRight,
      },
    },
    {
      tagline: "Security",
      image: {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
        alt: "Enterprise security",
      },
      heading: "Enterprise-Grade Security",
      description: "Protect your data with bank-grade encryption and comprehensive compliance monitoring.",
      button: {
        title: "View Security Features",
        variant: "link",
        iconRight: ChevronRight,
      },
    },
  ],
};