'use client'

import React from 'react'
import { NavBar } from './navigation/nav-bar'
import { HeroSection } from './hero/hero-section'
import { BrowserDemo } from './browser/browser-demo'
import { ClientLogos } from './client-logos/client-logos'
import { BackgroundElements } from './background/background-elements'

export function LandingPageComponent() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] overflow-hidden">
      <NavBar />
      <div className="relative pt-[140px] pb-[80px] px-4">
        <HeroSection />
        <BrowserDemo />
        <ClientLogos />
        <BackgroundElements />
      </div>
    </div>
  )
}