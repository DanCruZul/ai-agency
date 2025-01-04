"use client"; // Mark this component as a Client Component

import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Replace react-router-dom's Link with next/link
import { usePathname, useRouter } from "next/navigation"; // Replace react-router-dom with next/navigation
import { scrollToSection } from "@/app/utils/scroll";
import type { NavLink } from "./types";
import type { ButtonProps } from "../ui/Button";

type MobileNavProps = {
  isOpen: boolean;
  onToggle: () => void;
  links: NavLink[];
  buttons: (ButtonProps & { title: string })[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onCtaClick: () => void;
};

export const MobileNav = ({
  isOpen,
  onToggle,
  links,
  buttons,
  onCtaClick,
}: MobileNavProps) => {
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
    onToggle(); // Close the mobile menu
  };

  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-primary/10"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full mt-2 bg-card p-4 shadow-lg border border-border backdrop-blur-sm"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={`#${link.href}`} // Use href for the link destination
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleClick(e, link.href)} // Handle click for smooth scrolling
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    {...button}
                    className="w-full"
                    onClick={onCtaClick}
                  >
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
