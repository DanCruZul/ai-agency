"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
    buttonText: "Get Started",
    buttonStyle: "bg-white text-black hover:bg-gray-100",
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
    buttonText: "Get Started",
    buttonStyle: "bg-white text-black hover:bg-gray-100",
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
    buttonText: "Contact Us",
    buttonStyle:
      "border border-purple-500 text-white hover:bg-gradient-to-r from-purple-500 to-blue-500",
  },
];

export function PricingSectionComponent() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {/* Animated Gradient Sphere */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx="100"
                cy="100"
                r={40 + i * 5}
                fill="none"
                stroke="url(#gradientStroke)"
                strokeWidth="0.5"
                className="opacity-20"
              />
            ))}
            <defs>
              <linearGradient
                id="gradientStroke"
                gradientTransform="rotate(90)"
              >
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#FF00FF" />
                <stop offset="100%" stopColor="#FFFF00" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Floating Spheres */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-purple-500/50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm text-gray-400 tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get Started With Standard
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pay once, use forever
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative p-6 md:p-8 bg-[#0A0A0F]/60 rounded-2xl border border-gray-800
                hover:border-purple-500 transition-all duration-300"
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
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-6xl font-bold text-white">
                  {plan.price}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300
                  ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
