import type { ButtonProps } from '../ui/Button';

export type NavLink = {
  title: string;
  href: string;
};

export type NavbarProps = {
  logo: string;
  links: NavLink[];
  buttons: (ButtonProps & { title: string })[];
};

export type NavbarComponentProps = React.ComponentPropsWithoutRef<"nav"> & Partial<NavbarProps>;