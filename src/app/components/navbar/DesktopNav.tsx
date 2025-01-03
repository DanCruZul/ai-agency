import { Button } from "../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll";
import type { NavLink } from "./types";
import type { ButtonProps } from "../ui/Button";

type DesktopNavProps = {
  links: NavLink[];
  buttons: (ButtonProps & { title: string })[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onCtaClick: () => void;
};

export const DesktopNav = ({ links, buttons, onNavClick, onCtaClick }: DesktopNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection(href);
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
  };

  return (
    <>
      <div className="hidden md:flex md:items-center md:space-x-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.href}`}
            onClick={(e) => handleClick(e, link.href)}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-white duration-150"
          >
            {link.title}
          </a>
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
}