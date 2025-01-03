import { Cpu, BarChart3, Shield, Layers } from 'lucide-react';
import type { LayoutProps } from './types';

export const layoutDefaults: LayoutProps = {
  tagline: "Key Features",
  heading: "Everything you need to transform your workflow",
  description:
    "Our platform provides comprehensive features designed to streamline your operations and boost productivity.",
  leftSections: [
    {
      number: "01",
      icon: {
        icon: Cpu,
      },
      heading: "AI-Powered Automation",
      description:
        "Automate complex workflows with our advanced AI engine that learns and adapts to your specific needs, reducing manual tasks by up to 80%.",
    },
    {
      number: "02",
      icon: {
        icon: BarChart3,
      },
      heading: "Real-time Analytics",
      description:
        "Get instant insights with our powerful analytics dashboard. Track KPIs, identify trends, and make data-driven decisions in real-time.",
    },
  ],
  rightSections: [
    {
      number: "03",
      icon: {
        icon: Shield,
      },
      heading: "Enterprise Security",
      description:
        "Bank-grade encryption and compliance monitoring ensure your data stays protected. Regular security audits and updates maintain top-tier protection.",
    },
    {
      number: "04",
      icon: {
        icon: Layers,
      },
      heading: "Seamless Integration",
      description:
        "Connect with your existing tools through our extensive API. Support for major platforms ensures smooth integration with your tech stack.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    alt: "AI Platform Dashboard",
  },
};