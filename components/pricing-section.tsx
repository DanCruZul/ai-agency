'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: '$0',
    features: [
      'An AI chatbot that can understand your queries',
      'Personalized recommendations based on your preferences',
      'Ability to explore the app and its features without any cost'
    ]
  },
  {
    name: 'Premium',
    description: 'Advanced AI features, priority support, analytics dashboard',
    price: '$9.99',
    features: [
      'An advanced AI chatbot that can understand complex queries',
      'Personalized recommendations with higher accuracy',
      'Priority support to solve issues quickly',
      'Analytics dashboard to track your usage'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: 'Contact us',
    features: [
      'A custom AI chatbot tailored to your business needs',
      'Advanced analytics with custom reporting',
      'Dedicated account manager',
      'Custom integrations with your existing tools'
    ]
  }
]

export function PricingSectionComponent() {
  return (
    <section className="bg-[#0B0B0F] text-white py-24 relative overflow-hidden">
      {/* Gradient sphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pay once, use forever</h2>
          <p className="text-xl text-gray-400">Get started with Brainwave</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`bg-[#13131A] rounded-3xl p-8 border border-gray-800 ${
                index === 1 ? 'md:-mt-8' : ''
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <button 
                className={`w-full py-3 rounded-full mb-8 ${
                  index === 2 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'bg-white text-black'
                }`}
              >
                {index === 2 ? 'Contact us' : 'Get started'}
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="text-purple-500 hover:underline">See the full details</a>
        </div>
      </div>
    </section>
  )
}