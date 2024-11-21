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
      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose your{" "}
            <span
              className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                text-transparent"
            >
              perfect plan
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-xl
              hover:border-electric-cyan/50 transition-all duration-300 group overflow-hidden
              ${plan.featured ? "bg-neural/10" : "bg-neural/5"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-quantum/10 via-ai-mint/10
                  to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity
                  duration-500 -z-10"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-white/60">{plan.description}</p>
                </div>

                <div className="text-5xl font-bold">
                  <span
                    className="bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan bg-clip-text
                      text-transparent"
                  >
                    {plan.price}
                  </span>
                </div>

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

                <Button variant="ai" className="w-full group">
                  <span className="relative z-10">Get Started</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-quantum via-ai-mint to-electric-cyan
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
