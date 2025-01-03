import type { LucideIcon } from 'lucide-react';

export type FooterLink = {
  title: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export type LegalLink = {
  title: string;
  href: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  address: string[];
};

export type FooterProps = {
  logo: string;
  description: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
  legalLinks: LegalLink[];
  copyright: string;
  certifications: string[];
};