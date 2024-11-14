'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, FileText, Search, PlusSquare } from 'lucide-react'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-6 h-[84px] bg-black/40 backdrop-blur-md">
        <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A3D4E] to-[#292B36]">
              <div className="w-full h-full rounded-xl bg-[#AC6AFF] bg-opacity-50" />
            </div>
            <span className="text-white text-xl font-medium">Brainwave</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium">Features</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium">Pricing</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium">How to Use</Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium">Roadmap</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium">New Account</Link>
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE]" />
              <Button variant="outline" className="relative px-6 py-2 text-sm font-medium text-white border-0 bg-black rounded-xl">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-[84px]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Center Gradient Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#4B3AB1] via-[#3B1D60] to-[#09062B] opacity-60 blur-3xl" />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-20 w-3 h-3 bg-[#FF5733] rounded-full animate-float" />
          <div className="absolute top-1/3 right-32 w-2 h-2 bg-[#89F9E8] rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FACB7B] rounded-full animate-float" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[992px] mx-auto px-4 pt-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore the Possibilities<br />
            of AI Chatting with{" "}
            <span className="relative inline-block">
              Brainwave
              <div className="absolute -bottom-2 left-0 w-full">
                <svg className="w-full" height="12" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 6C20 0 50 0 100 6L100 12C50 12 20 12 0 12Z" className="fill-[url(#gradient)]" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0">
                      <stop offset="0%" stopColor="#89F9E8" />
                      <stop offset="50%" stopColor="#FACB7B" />
                      <stop offset="100%" stopColor="#D87CEE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </span>
          </h1>
          <p className="text-[#CACACA] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE]" />
            <Button size="lg" className="relative px-8 py-3 text-base font-medium text-[#0B0B0F] bg-white hover:bg-white/90 rounded-xl border-0">
              Get Started
            </Button>
          </div>
        </div>

        {/* Browser Demo */}
        <div className="relative max-w-[1024px] mx-auto mt-16 px-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            {/* Browser Header */}
            <div className="h-[40px] bg-[#1A1A1F] flex items-center px-4 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
            </div>
            
            {/* Browser Content */}
            <div className="relative h-[512px] bg-[#0B0B0F] overflow-hidden">
              <Image
                src="/placeholder.svg?height=1511&width=1034"
                alt="AI Assistant"
                width={1034}
                height={1511}
                className="absolute left-1/2 -translate-x-1/2 -top-[357px] opacity-70"
              />
              
              {/* Chat Input */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[488px] h-[54px] bg-[#1A1A1F] rounded-xl px-6 py-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D97BF3] to-[#9C55F6] animate-pulse" />
                  <span className="text-white text-sm">AI is generating...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute left-[-88px] top-[318px] w-[264px] h-[72px] bg-[#1A1A1F]/80 backdrop-blur-xl border border-white/5 rounded-2xl px-4 py-4">
            <div className="flex justify-between">
              <button className="p-2"><Home className="w-6 h-6 text-white" /></button>
              <button className="p-2"><FileText className="w-6 h-6 text-white" /></button>
              <button className="p-2"><Search className="w-6 h-6 text-white" /></button>
              <button className="p-2"><PlusSquare className="w-6 h-6 text-white" /></button>
            </div>
          </div>

          {/* Chat Generation Popup */}
          <div className="absolute right-[-20px] top-[249px] w-[294px] h-[84px] bg-[#1A1A1F]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#3A3D4E] to-[#292B36] rounded-xl flex items-center justify-center">
                <Image src="/placeholder.svg?height=40&width=40" alt="AI" width={40} height={40} className="rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">Code generation</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gray-300 border-2 border-[#0B0B0F]" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-[#6C7275] text-xs">1m ago</span>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-32 py-16 text-center">
          <p className="text-white/60 text-sm mb-10">
            HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
          </p>
          <div className="flex justify-center items-center gap-20">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-8 bg-white/5 rounded-lg" />
            ))}
          </div>
        </div>
      </main>

      <style jsx global>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 92% 100%, 0% 100%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}