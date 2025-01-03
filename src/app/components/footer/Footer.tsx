import { footerDefaults } from "./defaults";
import { FooterNav } from "./FooterNav";
import { SocialLinks } from "./SocialLinks";
import { LegalLinks } from "./LegalLinks";
import { Logo } from "../ui/Logo";
import { useLocation, useNavigate } from "react-router-dom";
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

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background/50 to-background border-t border-border" {...rest}>
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
}