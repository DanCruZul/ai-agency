import type { LegalLink } from './types';

type LegalSectionProps = {
  legalLinks: LegalLink[];
  copyright: string;
  certifications: string[];
};

export const LegalSection = ({ legalLinks, copyright, certifications }: LegalSectionProps) => (
  <div className="mt-12 border-t border-gray-200 pt-8">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
        {legalLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {certifications.map((cert, index) => (
          <span key={index} className="text-sm text-gray-500">
            {cert}
          </span>
        ))}
      </div>
    </div>
    <p className="mt-6 text-sm text-gray-600">{copyright}</p>
  </div>
);