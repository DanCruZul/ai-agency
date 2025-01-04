import Link from "next/link";
import type { LegalLink } from "./types";

type LegalLinksProps = {
  copyright: string;
  legalLinks?: LegalLink[];
};

export const LegalLinks = ({ copyright, legalLinks }: LegalLinksProps) => (
  <>
    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
      <p className="text-sm text-muted-foreground">{copyright}</p>
      {legalLinks && (
        <div className="flex gap-6 text-sm text-muted-foreground">
          {legalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  </>
);