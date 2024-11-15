'use client'

import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const appIcons = [
  { name: 'Figma', src: '/figma-icon.svg', position: 'top', delay: 0.2 },
  { name: 'Notion', src: '/notion-icon.svg', position: 'top-right', delay: 0.3 },
  { name: 'Discord', src: '/discord-icon.svg', position: 'right', delay: 0.4 },
  { name: 'Jira', src: '/jira-icon.svg', position: 'bottom-right', delay: 0.5 },
  { name: 'Photoshop', src: '/photoshop-icon.svg', position: 'bottom', delay: 0.6 },
  { name: 'Invision', src: '/invision-icon.svg', position: 'bottom-left', delay: 0.7 },
  { name: 'Teams', src: '/teams-icon.svg', position: 'left', delay: 0.8 },
  { name: 'Dropbox', src: '/dropbox-icon.svg', position: 'top-left', delay: 0.9 }
]

const features = [
  'Seamless Integration',
  'Smart Automation',
  'Top-notch Security'
]

const getIconPosition = (position: string) => {
  const positions = {
    'top': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'top-[15%] right-[15%]',
    'right': 'top-1/2 right-0 -translate-y-1/2',
    'bottom-right': 'bottom-[15%] right-[15%]',
    'bottom': 'bottom-0 left-1/2 -translate-x-1/2',
    'bottom-left': 'bottom-[15%] left-[15%]',
    'left': 'top-1/2 left-0 -translate-y-1/2',
    'top-left': 'top-[15%] left-[15%]'
  }
  return positions[position] || ''
}

export function AiChatSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full bg-[#0B0B0F] overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              AI chat app for<br />seamless<br />collaboration
            </h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#AC6AFF] mr-3">
                    <Check className="w-4 h-4 text-[#0B0B0F]" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className="relative inline-flex group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE] rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-sm"></div>
              <span className="relative px-8 py-3 bg-[#0B0B0F] text-[#E6E6E6] rounded-full leading-none flex items-center divide-x divide-gray-600">
                TRY IT NOW
              </span>
            </motion.button>
          </motion.div>

          {/* Right side content */}
          <div className="w-full lg:w-1/2 relative">
            <motion.p 
              className="text-[#757185] mb-12 text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.
            </motion.p>
            
            {/* Circular app icons */}
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Center circle with gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#AC6AFF] via-[#5B37B7] to-[#AC6AFF] opacity-50 blur-lg" />
                <div className="absolute inset-2 rounded-full bg-[#0B0B0F]" />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE] p-[1px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0B0B0F] flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2L21 7M16 2L11 7M16 2V22M21 7H26L23 10M21 7L16 12M11 7H6L9 10M11 7L16 12M23 10L28 15L23 20M23 10L16 12M9 10L4 15L9 20M9 10L16 12M23 20L21 25H16M23 20L16 22M9 20L11 25H16M9 20L16 22" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="4" y1="2" x2="28" y2="25" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#89F9E8"/>
                            <stop offset="0.5" stopColor="#FACB7B"/>
                            <stop offset="1" stopColor="#D87CEE"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* App icons */}
              {appIcons.map((app, index) => (
                <motion.div
                  key={app.name}
                  className={`absolute w-12 h-12 ${getIconPosition(app.position)}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: app.delay }}
                >
                  <div className="w-full h-full rounded-xl bg-[#1A1A1F] p-2 backdrop-blur-sm border border-white/10">
                    <Image
                      src={app.src}
                      alt={app.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mouse follow gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />
    </section>
  )
}