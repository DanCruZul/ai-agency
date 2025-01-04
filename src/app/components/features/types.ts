import { LucideIcon } from "lucide-react";

export type IconProps = {
  icon: LucideIcon;
};

export type SectionProps = {
  number: string;
  icon: IconProps;
  heading: string;
  description: string;
};

export type LayoutProps = {
  tagline: string;
  heading: string;
  description: string;
  leftSections: SectionProps[];
  rightSections: SectionProps[];
  image: {
    src: string;
    alt?: string;
  };
};

export type LayoutSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<LayoutProps>;

// Add the Tab type
export type Tab = {
  value: string;
  trigger: string;
};
