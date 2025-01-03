import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import type { NavLink } from './types';
import type { ButtonProps } from '../ui/Button';

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  links: NavLink[];
  buttons: (ButtonProps & { title: string })[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export const MobileMenu = ({ isOpen, onToggle, links, buttons, onNavClick }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={`#${link.href}`}
                className="text-gray-700 hover:text-indigo-600"
                onClick={(e) => onNavClick(e, link.href)}
              >
                {link.title}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              {buttons.map((button, index) => (
                <Button key={index} {...button} className="w-full">
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};