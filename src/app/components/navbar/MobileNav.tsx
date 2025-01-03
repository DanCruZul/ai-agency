import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '@/utils/scroll';
import type { NavLink } from './types';
import type { ButtonProps } from '../ui/Button';

type MobileNavProps = {
  isOpen: boolean;
  onToggle: () => void;
  links: NavLink[];
  buttons: (ButtonProps & { title: string })[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onCtaClick: () => void;
};

export const MobileNav = ({ isOpen, onToggle, links, buttons, onNavClick, onCtaClick }: MobileNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection(href);
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
    onToggle();
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
                <a
                  key={index}
                  href={`#${link.href}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.title}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} className="w-full" onClick={onCtaClick}>
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
}