"use client";

import { useRouter } from "next/navigation";
import { scrollToSection } from "@/app/utils/scroll";

export const useNavigation = (onMenuClose?: () => void) => {
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    onMenuClose?.();

    // Use RAF to ensure DOM updates complete
    requestAnimationFrame(() => {
      scrollToSection(href);
    });
  };

  const handleCtaClick = () => {
    onMenuClose?.();
    
    if (window.location.pathname !== "/") {
      router.push("/");
      // Wait for page load before scrolling
      setTimeout(() => scrollToSection("cta"), 100);
    } else {
      scrollToSection("cta");
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onMenuClose?.();
    router.push("/");
  };

  return {
    handleNavClick,
    handleCtaClick,
    handleLogoClick,
  };
};