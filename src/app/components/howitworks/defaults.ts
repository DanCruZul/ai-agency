import { ChevronRight } from 'lucide-react';
import type { Layout486Props } from './types';

export const layout486Defaults: Layout486Props = {
  features: [
    {
      number: "01",
      tagline: "Connect",
      heading: "Set up in minutes",
      description: "Quick and easy integration with your existing tools and systems. No complex setup required - just connect and go.",
      buttons: [
        { title: "Get Started", variant: "secondary" },
        { title: "Learn More", variant: "link", iconRight: ChevronRight },
      ],
    },
    {
      number: "02",
      tagline: "Configure",
      heading: "Customize your workflow",
      description: "Define your automation rules and preferences. Our AI learns your processes and adapts to your specific needs.",
      buttons: [
        { title: "View Demo", variant: "secondary" },
        { title: "Learn More", variant: "link", iconRight: ChevronRight },
      ],
    },
    {
      number: "03",
      tagline: "Launch",
      heading: "Go live with confidence",
      description: "Start automating with real-time monitoring and insights. Our platform ensures smooth operations from day one.",
      buttons: [
        { title: "Launch Now", variant: "secondary" },
        { title: "Learn More", variant: "link", iconRight: ChevronRight },
      ],
    },
  ],
};