import type { FooterColumn } from "./types";

type FooterNavProps = {
  columns: FooterColumn[];
  onNavClick: (href: string) => void;
};

export const FooterNav = ({ columns, onNavClick }: FooterNavProps) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
      {columns.map((column, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-foreground">
            {column.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a
                  href={`#${link.href}`}
                  className="text-muted-foreground transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.href);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
