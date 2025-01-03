"use client";

import { useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { navbarDefaults } from "./defaults";
import { Logo } from "../ui/Logo";
import { useNavigation } from "./hooks/UseNavigation";
import Link from "next/link";
import type { NavbarComponentProps } from "./types";

export const Navbar = (props: NavbarComponentProps) => {
  const { logo, links, buttons, className, ...rest } = {
    ...navbarDefaults,
    ...props,
  };

  const [isOpen, setIsOpen] = useState(false);
  const { handleNavClick, handleCtaClick, handleLogoClick } = useNavigation(
    () => setIsOpen(false)
  );

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/10 backdrop-blur-lg"
      {...rest}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="/"
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
