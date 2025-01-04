import type { HeroProps } from "./types";

export const heroDefaults: HeroProps = {
  heading: "10x Your Productivity with Enterprise AI",
  description:
    "Join 10,000+ companies saving $2M+ annually with our AI platform. Get started in 48 hours with zero disruption to existing workflows. Enterprise-grade security with 99.99% uptime guaranteed.",
  buttons: [
    {
      title: "Start Free Trial",
      variant: "primary",
    },
    {
      title: "Watch Demo",
      variant: "secondary",
    },
  ],
  image: {
    src: "https://cdn.prod.website-files.com/5db1c0d5ca3871e8fd1a7b66/5f63b11306f1836426846360_0*6_IW_DdVcs4J1dmx.png",
  },
};
