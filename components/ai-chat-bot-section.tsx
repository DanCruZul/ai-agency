"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const steps = [
  "Sign up",
  "Connect with AI Chatbot",
  "Get Personalized Recommendations",
  "Explore and Engage",
];

export function AiChatBotSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-full bg-[#0B0B0F] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square max-w-[550px] mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20
                  via-transparent to-blue-600/20 backdrop-blur-3xl"
              ></div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="AI Chat Bot"
                width={550}
                height={550}
                className="rounded-3xl"
              />
              <div
                className="absolute bottom-4 left-4 right-4 bg-[#1A1A1F]/80 backdrop-blur-md rounded-xl p-4
                  flex items-center"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                <p className="text-white/70 text-sm">AI is typing...</p>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-white/70"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <p className="text-purple-500 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                HOW IT WORKS - 02
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Connect with AI chat bot
              </h2>
              <p className="text-gray-400 text-lg">
                Connect with the AI chatbot to start the conversation. The
                chatbot uses natural language processing to understand your
                queries and provide relevant responses.
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
              CONNECT NOW
            </Button>

            {/* Progress bar */}
            <div className="pt-12">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center
                      ${index <= activeStep ? "bg-purple-600" : "bg-gray-700"}`}
                    >
                      {index < activeStep ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <div
                          className={`w-3 h-3 rounded-full ${index === activeStep ? "bg-white" : "bg-gray-500"}`}
                        ></div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center max-w-[100px]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-purple-600 rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    width: `${(activeStep / (steps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
