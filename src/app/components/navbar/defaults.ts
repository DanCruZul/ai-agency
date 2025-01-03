import type { NavbarProps } from "./types";

export const navbarDefaults: NavbarProps = {
  logo: "AI Platform",
  links: [
    { title: "Features", href: "features" },
    { title: "Solutions", href: "solutions" },
    { title: "Benefits", href: "benefits" },
    { title: "Testimonials", href: "testimonials" },
    { title: "FAQ", href: "faq" },
  ],
  buttons: [{ title: "Get Started", variant: "gradient" }],
};