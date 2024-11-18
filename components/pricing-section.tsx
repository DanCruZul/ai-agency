"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "$0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    buttonText: "Get Started",
    buttonStyle: "border border-white/20",
  },
  {
    name: "Premium",
    description: "Advanced AI features, priority support",
    price: "$9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "Analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-gradient-to-r from-[#7928CA] to-[#38BDF8]",
  },
  {
    name: "Enterprise",
    description: "Custom AI solutions, dedicated support",
    price: "Contact us",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to access the app and all its features without any cost",
    ],
    buttonText: "Contact Us",
    buttonStyle: "border border-white/20",
  },
];

export function PricingSectionComponent() {
  return (
    <section className="relative w-full bg-[#030014] py-12 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
            rounded-full bg-gradient-radial from-[#7928CA] via-[#030014] to-transparent
            opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Gradient Circle Logo */}
            <div className="w-20 h-20 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-spin-slow"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#7928CA" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Pay once, use forever
            </h2>
            <p className="text-white/70 text-lg">Get started with Brainwave</p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="glass-card relative p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-xl text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-6xl font-bold text-white">
                  {plan.price}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full bg-[#7928CA]/20 flex items-center justify-center
                          flex-shrink-0 mt-0.5"
                      >
                        <Check className="w-3 h-3 text-[#7928CA]" />
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  className={`w-full py-3 px-6 rounded-full text-white text-base font-medium transition-all
                  duration-200 hover:scale-[1.02] hover:shadow-lg ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#"
            className="text-[#7928CA] hover:text-[#38BDF8] transition-colors"
          >
            See the full details
          </a>
        </motion.div>
      </div>
    </section>
  );
}
