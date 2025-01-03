"use client"; // Mark this component as a Client Component

import { footerDefaults } from "./defaults";
import { FooterNav } from "./FooterNav";
import { SocialLinks } from "./SocialLinks";
import { LegalLinks } from "./LegalLinks";
import { Logo } from "../ui/Logo";
import { usePathname, useRouter } from "next/navigation"; // Replace react-router-dom with next/navigation
import type { FooterComponentProps } from "./types";

export const Footer = (props: FooterComponentProps) => {
  const {
    logo,
    description,
    columns,
    socialLinks,
    copyright,
    className,
    ...rest
  } = {
    ...footerDefaults,
    ...props,
  };

  const pathname = usePathname(); // Use usePathname instead of useLocation
  const router = useRouter(); // Use useRouter instead of useNavigate

  const handleNavClick = (href: string) => {
    if (pathname === "/") {
      // If on the home page, scroll to the section
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on the home page, navigate to the home page and scroll to the section
      router.push("/"); // Navigate to the home page
      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Add a small delay to ensure the page has loaded
    }
  };

  return (
    <footer
      className="bg-gradient-to-b from-background/50 to-background border-t border-border"
      {...rest}
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Brand Section */}
          <div className="max-w-xl">
            <Logo size="lg" />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            <SocialLinks links={socialLinks} />
          </div>

          {/* Navigation */}
          <FooterNav columns={columns} onNavClick={handleNavClick} />
        </div>

        {/* Bottom Section */}
        <LegalLinks copyright={copyright} />
      </div>
    </footer>
  );
};
