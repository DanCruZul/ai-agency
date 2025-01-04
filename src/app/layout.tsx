import type { Metadata } from "next";
import "./globals.css";
import { GrainEffect } from "@/app/components/ui/GrainEffect";
import { Navbar } from "@/app/components/navbar/Navbar";
import { Footer } from "@/app/components/footer/Footer";

export const metadata: Metadata = {
  title: "AI Platform",
  description: "Enterprise AI automation platform",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AI Platform",
    description: "Enterprise AI automation platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen fade-in">
          <GrainEffect />
          <div className="relative">
            <Navbar />
            <link
              rel="preload"
              href="https://example.com/path-to-hero-image.jpg"
              as="image"
              crossOrigin="anonymous"
            />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
