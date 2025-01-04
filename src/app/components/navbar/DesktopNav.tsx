"use client"; // Mark this component as a Client Component

import { Button } from "../ui/Button";
import Link from "next/link"; // Replace react-router-dom's Link with next/link
import { usePathname, useRouter } from "next/navigation"; // Replace react-router-dom with next/navigation
import { scrollToSection } from "@/app/utils/scroll";
import type { NavLink } from "./types";
import type { ButtonProps } from "../ui/Button";

type DesktopNavProps = {
  links: NavLink[];
  buttons: (ButtonProps & { title: string })[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onCtaClick: () => void;
};

export const DesktopNav = ({ links, buttons, onCtaClick }: DesktopNavProps) => {
  const pathname = usePathname(); // Replace useLocation with usePathname
  const router = useRouter(); // Replace useNavigate with useRouter

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      // If on the home page, scroll to the section
      scrollToSection(href);
    } else {
      // If not on the home page, navigate to the home page and scroll to the section
      router.push("/"); // Navigate to the home page
      setTimeout(() => {
        scrollToSection(href); // Scroll to the section after navigation
      }, 100); // Add a small delay to ensure the page has loaded
    }
  };

  return (
    <>
      <div className="hidden md:flex md:items-center md:space-x-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`#${link.href}`} // Use href for the link destination
            onClick={(e) => handleClick(e, link.href)} // Handle click for smooth scrolling
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white duration-150"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex md:items-center md:space-x-4">
        {buttons.map((button, index) => (
          <Button key={index} {...button} onClick={onCtaClick}>
            {button.title}
          </Button>
        ))}
      </div>
    </>
  );
};
