import type { CtaProps } from './types';

export const ctaDefaults: CtaProps = {
  headers: ["Transform your business", "starting today"],
  description: "Join 10,000+ companies already using our AI platform to drive growth and efficiency",
  benefits: [
    {
      title: "Immediate Cost Savings",
      description: "Average 40% reduction in operational costs within first 3 months"
    },
    {
      title: "Quick Implementation",
      description: "Full platform deployment in 48 hours or less"
    },
    {
      title: "Guaranteed ROI",
      description: "3x return on investment within first year or money back"
    },
    {
      title: "Enterprise Support",
      description: "24/7 dedicated support team with 1-hour response time"
    }
  ],
  buttons: [
    { 
      title: "Start Free Trial", 
      variant: "primary"
    },
    { 
      title: "Schedule Demo", 
      variant: "secondary"
    }
  ],
  trial: {
    duration: "30-day",
    features: [
      "Full access to all AI automation features",
      "Unlimited users and workflows",
      "Premium support and training",
      "Custom integration assistance",
      "ROI assessment and optimization"
    ]
  }
};