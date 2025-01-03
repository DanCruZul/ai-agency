import Link from "next/link"; // Replace react-router-dom with next/link

type LegalLinksProps = {
  copyright: string;
};

export const LegalLinks = ({ copyright }: LegalLinksProps) => (
  <>
    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
      <p className="text-sm text-muted-foreground">{copyright}</p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-white transition-colors">
          Terms of Service
        </Link>
      </div>
    </div>
  </>
);
