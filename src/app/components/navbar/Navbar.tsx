import { useState } from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { navbarDefaults } from './defaults';
import { scrollToSection } from '@/utils/scroll';
import { Logo } from '../ui/Logo';
import { useNavigate } from 'react-router-dom';
import type { NavbarComponentProps } from './types';

export const Navbar = (props: NavbarComponentProps) => {
  const { logo, links, buttons, className, ...rest } = {
    ...navbarDefaults,
    ...props,
  };

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate('/', { state: { scrollTo: 'cta' } });
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/10 backdrop-blur-lg"
      {...rest}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2">
            <Logo />
          </a>
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