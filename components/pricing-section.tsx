"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Basic",
    description: "AI-powered personalized recommendations",
    price: "$0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features with our AI bot",
    ],
    gradient: "from-quantum/20 via-ai-mint/20 to-electric-cyan/20",
  },
  {
    name: "Premium",
    description: "Advanced AI chatbot, priority support",
    price: "$9.99",
    features: [
      "Advanced AI chatbot with priority support and extra features",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
    gradient: "from-quantum/40 via-ai-mint/40 to-electric-cyan/40",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Custom AI solutions, dedicated support",
    price: "Contact us",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
    gradient: "from-quantum/20 via-ai-mint/20 to-electric-cyan/20",
  },
];

export function PricingSectionComponent() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div
            className="absolute inset-0 rounded-full
              bg-[radial-gradient(ellipse_at_center,rgba(123,44,191,0.15)_0%,rgba(32,227,178,0.15)_100%)]
              blur-3xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm text-electric-cyan tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                  bg-clip-text text-transparent animate-gradient-x"
              >
                Choose your perfect plan
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div
                  className="w-full h-full bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                    rounded-full opacity-75 blur-sm"
                />
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-quantum via-ai-mint
                    to-electric-cyan rounded-full opacity-90"
                />
              </motion.div>
            </span>
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-xl
              hover:border-electric-cyan/50 transition-all duration-300 group
              ${plan.featured ? "bg-neural/10" : "bg-neural/5"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-white/60">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-5xl font-bold">
                  <span
                    className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                      text-transparent"
                  >
                    {plan.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-quantum to-electric-cyan flex
                          items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button variant="ai" className="w-full group">
                  <span className="relative z-10">Get Started</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Button>
              </div>

              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0
                group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
