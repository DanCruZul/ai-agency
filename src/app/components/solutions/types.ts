import type { LucideIcon } from 'lucide-react';

export type Metric = {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
};

export type TabContent = {
  title: string;
  description: string;
  features: string[];
  preview: {
    type: 'dashboard' | 'interactive';
    image: string;
    alt: string;
    metrics: Metric[];
  };
};

export type SolutionTab = {
  icon: LucideIcon;
  label: string;
  content: TabContent;
};

export type SolutionsProps = {
  tagline: string;
  heading: string;
  description: string;
  tabs: SolutionTab[];
};

export type SolutionsComponentProps = React.ComponentPropsWithoutRef<"section"> & 
  Partial<SolutionsProps>;