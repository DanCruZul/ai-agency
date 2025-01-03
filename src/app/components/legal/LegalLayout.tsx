import type { LegalLayoutProps } from "./types";

export const LegalLayout = ({ children }: LegalLayoutProps) => (
  <div className="min-h-screen text-foreground">
    <div className="relative">
      <main className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  </div>
);
