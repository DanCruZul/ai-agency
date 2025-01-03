import { Cpu, Layers } from 'lucide-react';
import type { ComparisonProps } from './types';

export const comparisonDefaults: ComparisonProps = {
  tagline: "Compare Plans",
  heading: "Find your perfect fit",
  description: "See how our plans stack up and choose the one that's right for your needs",
  products: [
    {
      name: "AI Platform",
      logo: {
        icon: Cpu,
        label: "AI Platform"
      }
    },
    {
      name: "Competitors",
      logo: {
        icon: Layers,
        label: "Others"
      }
    }
  ],
  features: [
    {
      text: "AI-Powered Automation",
      items: ["Unlimited", "Limited to 100/month"]
    },
    {
      text: "Real-time Analytics",
      items: [true, true]
    },
    {
      text: "Custom Integrations",
      items: [true, true]
    },
    {
      text: "Enterprise Security",
      items: [true, false]
    },
    {
      text: "24/7 Priority Support",
      items: [true, false]
    }
  ],
  buttons: [
    {
      title: "Get Started",
      variant: "gradient"
    },
    {
      title: "Contact Sales",
      variant: "secondary"
    }
  ]
};