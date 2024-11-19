"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 h-[84px] backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8">
            <Image
              src="/brainwave-icon.svg"
              alt="Brainwave"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
          <span className="text-white text-xl font-medium">Brainwave</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#how-to-use"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            How to Use
          </Link>
          <Link
            href="#roadmap"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Roadmap
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            New Account
          </Link>
          <div className="relative group">
            <div
              className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#89F9E8] via-[#FACB7B]
                to-[#D87CEE] opacity-70 blur-sm group-hover:opacity-100 transition-opacity"
            />
            <Button className="relative bg-black hover:bg-black/80 text-white border-0 rounded-xl px-6">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
