import type { Metadata } from "next";
import "./globals.css";
import { GrainEffect } from "@/app/components/ui/GrainEffect";
import { Navbar } from "@/app/components/navbar/Navbar";
import { Footer } from "@/app/components/footer/Footer";
import { LoadingProvider } from "@/app/components/LoadingProvider";
import { InitialLoader } from "@/app/components/InitialLoader";
import { preloadCriticalImages } from "./utils/loadingOptimization";

export const metadata: Metadata = {
  title: "AI Platform",
  description: "Enterprise AI automation platform",
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'AI Platform',
    description: 'Enterprise AI automation platform',
    type: 'website',
  },
};

// Preload critical fonts
const preloadFonts = [
  {
    rel: 'preload',
    href: '/fonts/General Sans/GeneralSans-Medium.otf',
    as: 'font',
    type: 'font/otf',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/Quicksand/Quicksand-Medium.otf',
    as: 'font',
    type: 'font/otf',
    crossOrigin: 'anonymous',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {preloadFonts.map((font, index) => (
          <link key={index} {...font} />
        ))}
      </head>
      <body>
        <LoadingProvider>
          <InitialLoader />
          <div className="min-h-screen text-foreground">
            <GrainEffect />
            <div className="relative">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </LoadingProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${preloadCriticalImages.toString()})();`,
          }}
        />
      </body>
    </html>
  );
}