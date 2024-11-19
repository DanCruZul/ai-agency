import type { Metadata } from "next";
import { Inter } from "@next/font/google";
import { Providers } from "@/components/ui/providers";
import { Toaster } from "@/components/ui/toaster";
import { MouseFollowGradient } from "@/components/mouse-follow-gradient";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Agency - Next Generation AI Solutions",
  description: "Transforming businesses with cutting-edge AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseFollowGradient />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
