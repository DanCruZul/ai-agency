import { Github, Twitter } from "lucide-react";
import type { FooterProps } from "./types";

export const footerDefaults: FooterProps = {
  logo: "AI Platform",
  description:
    "Harness the power of artificial intelligence to automate tasks, gain insights, and boost productivity across your organization.",
  columns: [
    {
      title: "Navigation",
      links: [
        { title: "Features", href: "features" },
        { title: "Solutions", href: "solutions" },
        { title: "Benefits", href: "benefits" },
        { title: "Testimonials", href: "testimonials" },
        { title: "FAQ", href: "faq" },
      ],
    },
  ],
  socialLinks: [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ],
  copyright: "© 2024 AI Platform. All rights reserved.",
};
