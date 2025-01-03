import type { LegalHeaderProps } from "./types";

export const LegalHeader = ({ title, lastUpdated }: LegalHeaderProps) => (
  <div className="mb-8 md:mb-12">
    <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
    {lastUpdated && (
      <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
    )}
  </div>
);
