"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 h-[84px] backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="text-2xl font-medium bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
              bg-clip-text text-transparent"
          >
            Brainwave
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-white/60 hover:text-electric-cyan transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-white/60 hover:text-electric-cyan transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#how-to-use"
            className="text-white/60 hover:text-electric-cyan transition-colors"
          >
            How to Use
          </Link>
          <Link
            href="#roadmap"
            className="text-white/60 hover:text-electric-cyan transition-colors"
          >
            Roadmap
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-white/60 hover:text-electric-cyan transition-colors"
          >
            New Account
          </Link>
          <Button variant="ai">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
