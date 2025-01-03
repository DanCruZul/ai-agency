import type { Metadata } from "next";
import "./globals.css";
import { GrainEffect } from "@/app/components/ui/GrainEffect";
import { Navbar } from "@/app/components/navbar/Navbar";
import { Footer } from "@/app/components/footer/Footer";

export const metadata: Metadata = {
  title: "AI Platform",
  description: "Enterprise AI automation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen text-foreground">
          <GrainEffect />
          <div className="relative">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
