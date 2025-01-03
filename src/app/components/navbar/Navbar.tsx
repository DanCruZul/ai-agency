"use client"; // Mark this component as a Client Component

import { useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { navbarDefaults } from "./defaults";
import { scrollToSection } from "@/app/utils/scroll";
import { Logo } from "../ui/Logo";
import { useRouter } from "next/navigation"; // Replace react-router-dom with next/navigation
import Link from "next/link"; // Replace react-router-dom's Link with next/link
import type { NavbarComponentProps } from "./types";

export const Navbar = (props: NavbarComponentProps) => {
  const { logo, links, buttons, className, ...rest } = {
    ...navbarDefaults,
    ...props,
  };

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Replace useNavigate with useRouter

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href); // Scroll to the section
    setIsOpen(false); // Close the mobile menu
  };

  const handleCtaClick = () => {
    router.push("/"); // Navigate to the home page
    setTimeout(() => {
      scrollToSection("cta"); // Scroll to the CTA section after navigation
    }, 100); // Add a small delay to ensure the page has loaded
    setIsOpen(false); // Close the mobile menu
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/"); // Navigate to the home page
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/10 backdrop-blur-lg"
      {...rest}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="/" // Use href for the link destination
            onClick={handleLogoClick}
            className="flex items-center space-x-2"
          >
            <Logo />
          </Link>
        </div>

        <DesktopNav
          links={links}
          buttons={buttons}
          onNavClick={handleNavClick}
          onCtaClick={handleCtaClick}
        />
        <MobileNav
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          links={links}
          buttons={buttons}
          onNavClick={handleNavClick}
          onCtaClick={handleCtaClick}
        />
      </div>
    </nav>
  );
};
