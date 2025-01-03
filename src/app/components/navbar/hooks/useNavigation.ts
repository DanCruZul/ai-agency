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
    scrollToSection(href);
    onMenuClose?.();
  };

  const handleCtaClick = () => {
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollToSection("cta");
      }, 100);
    } else {
      scrollToSection("cta");
    }
    onMenuClose?.();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return {
    handleNavClick,
    handleCtaClick,
    handleLogoClick,
  };
};
