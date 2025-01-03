export type LegalHeaderProps = {
  title: string;
  lastUpdated?: string;
};

export type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export type LegalLayoutProps = {
  children: React.ReactNode;
};