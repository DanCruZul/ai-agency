import { ArrowRight } from 'lucide-react';
import type { PricingProps } from './types';

export const pricingDefaults: PricingProps = {
  tagline: "Simple Pricing",
  heading: "Choose the perfect plan for your business",
  description: "Start free and scale as you grow. All plans include 14-day trial.",
  tiers: [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with AI automation",
      price: {
        amount: 49,
        currency: "$",
        period: "month"
      },
      features: [
        { title: "Up to 5 team members", included: true },
        { title: "50 AI automation workflows", included: true },
        { title: "5GB storage", included: true },
        { title: "Basic analytics", included: true },
        { title: "Email support", included: true },
        { title: "API access", included: false },
        { title: "Custom integrations", included: false },
        { title: "Advanced security", included: false }
      ],
      button: {
        title: "Start Free Trial",
        variant: "secondary",
        iconRight: ArrowRight
      }
    },
    {
      name: "Professional",
      description: "For growing businesses that need more power and flexibility",
      price: {
        amount: 99,
        currency: "$",
        period: "month"
      },
      features: [
        { title: "Up to 20 team members", included: true },
        { title: "Unlimited automation workflows", included: true },
        { title: "50GB storage", included: true },
        { title: "Advanced analytics & reporting", included: true },
        { title: "Priority email & chat support", included: true },
        { title: "API access", included: true },
        { title: "Custom integrations", included: false },
        { title: "Advanced security", included: false }
      ],
      button: {
        title: "Start Free Trial",
        variant: "gradient",
        iconRight: ArrowRight
      },
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: {
        amount: 249,
        currency: "$",
        period: "month"
      },
      features: [
        { title: "Unlimited team members", included: true },
        { title: "Unlimited automation workflows", included: true },
        { title: "Unlimited storage", included: true },
        { title: "Custom analytics & reporting", included: true },
        { title: "24/7 phone & priority support", included: true },
        { title: "Advanced API access", included: true },
        { title: "Custom integrations", included: true },
        { title: "Advanced security & compliance", included: true }
      ],
      button: {
        title: "Contact Sales",
        variant: "secondary",
        iconRight: ArrowRight
      }
    }
  ]
};