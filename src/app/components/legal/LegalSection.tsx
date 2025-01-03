import type { LegalSectionProps } from "./types";

export const LegalSection = ({ title, children }: LegalSectionProps) => (
  <section className="mb-8 md:mb-12">
    <h2 className="mb-4 text-2xl font-bold md:text-3xl">{title}</h2>
    <div className="space-y-4 text-muted-foreground">{children}</div>
  </section>
);
