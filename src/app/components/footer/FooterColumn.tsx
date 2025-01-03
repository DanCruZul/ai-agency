import type { FooterColumn } from "./types";

type FooterColumnProps = FooterColumn & {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export const FooterColumnComponent = ({
  title,
  links,
  onNavClick,
}: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link.href}`}
              className="text-gray-600 transition-colors hover:text-indigo-600"
              onClick={(e) => onNavClick(e, link.href)}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
