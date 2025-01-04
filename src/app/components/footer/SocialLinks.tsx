import type { SocialLink } from "./types";

type SocialLinksProps = {
  links: SocialLink[];
};

export const SocialLinks = ({ links }: SocialLinksProps) => (
  <div className="mt-8 flex gap-4">
    {links.map((social, index) => {
      const Icon = social.icon;
      return (
        <a
          key={index}
          href={social.href}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-5 w-5" />
        </a>
      );
    })}
  </div>
);
