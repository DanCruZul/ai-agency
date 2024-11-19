"use client";

import React from "react";
import { NavBar } from "./nav-bar";
import { HeroSection } from "./hero-section";
import { BrowserDemo } from "./browser-demo";
import { ClientLogos } from "./client-logos";
import { BackgroundElements } from "./background-elements";

export function LandingPageComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NavBar />
      <div className="relative pt-[140px] pb-[80px] px-4">
        <HeroSection />
        <BrowserDemo />
        <ClientLogos />
      </div>
    </div>
  );
}
