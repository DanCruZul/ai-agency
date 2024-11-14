'use client'

import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import Image from 'next/image'

const appIcons = [
  { name: 'Figma', src: '/placeholder.svg?height=40&width=40&text=Figma', position: 'top' },
  { name: 'Notion', src: '/placeholder.svg?height=40&width=40&text=N', position: 'top-right' },
  { name: 'Discord', src: '/placeholder.svg?height=40&width=40&text=Discord', position: 'right' },
  { name: 'Jira', src: '/placeholder.svg?height=40&width=40&text=Jira', position: 'bottom-right' },
  { name: 'Photoshop', src: '/placeholder.svg?height=40&width=40&text=Ps', position: 'bottom' },
  { name: 'Invision', src: '/placeholder.svg?height=40&width=40&text=In', position: 'bottom-left' },
  { name: 'Teams', src: '/placeholder.svg?height=40&width=40&text=Teams', position: 'left' },
  { name: 'Dropbox', src: '/placeholder.svg?height=40&width=40&text=Dropbox', position: 'top-left' },
]

const getIconPosition = (position) => {
  switch (position) {
    case 'top': return 'top-0 left-1/2 -translate-x-1/2';
    case 'top-right': return 'top-[15%] right-[15%]';
    case 'right': return 'top-1/2 right-0 -translate-y-1/2';
    case 'bottom-right': return 'bottom-[15%] right-[15%]';
    case 'bottom': return 'bottom-0 left-1/2 -translate-x-1/2';
    case 'bottom-left': return 'bottom-[15%] left-[15%]';
    case 'left': return 'top-1/2 left-0 -translate-y-1/2';
    case 'top-left': return 'top-[15%] left-[15%]';
    default: return '';
  }
}

export function AiChatSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative w-full bg-[#0B0B0F] overflow-hidden py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            AI chat app for<br />seamless<br />collaboration
          </h2>
          <ul className="space-y-4 mb-8">
            {['Seamless Integration', 'Smart Automation', 'Top-notch Security'].map((feature, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#AC6AFF] mr-3">
                  <Check className="w-4 h-4 text-[#0B0B0F]" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="relative inline-flex group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE] rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-sm"></div>
            <span className="relative px-8 py-3 bg-[#0B0B0F] text-[#E6E6E6] rounded-full leading-none flex items-center divide-x divide-gray-600">
              TRY IT NOW
            </span>
          </button>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 relative">
          <p className="text-[#757185] mb-8 text-center">
            With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.
          </p>
          <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Circular gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#AC6AFF] via-[#5B37B7] to-[#AC6AFF] opacity-50 blur-lg" />
            <div className="absolute inset-2 rounded-full bg-[#0B0B0F]" />

            {/* Brain icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="46" cy="46" r="46" fill="url(#paint0_linear)" />
                <path d="M71.9676 43.7065C71.9676 43.7065 66.0762 40.8131 64.3762 36.1198C62.6762 31.4265 64.3762 26.7331 64.3762 26.7331C64.3762 26.7331 58.4849 30.4598 55.0889 30.4598C51.6929 30.4598 46.9289 28.1798 46.9289 28.1798C46.9289 28.1798 44.0889 33.5998 39.8969 34.2931C35.7049 34.9865 31.5129 32.7065 31.5129 32.7065C31.5129 32.7065 31.5129 38.1265 28.6729 41.8531C25.8329 45.5798 20.0002 46.9598 20.0002 46.9598C20.0002 46.9598 25.2889 51.6531 25.8329 55.3798C26.3769 59.1065 24.1329 64.4931 24.1329 64.4931C24.1329 64.4931 29.7609 62.2131 33.4609 63.5931C37.1609 64.9731 40.3169 69.6665 40.3169 69.6665C40.3169 69.6665 44.5089 65.2465 48.7009 64.5531C52.8929 63.8598 57.6289 66.1398 57.6289 66.1398C57.6289 66.1398 59.5289 60.0265 63.4689 57.6598C67.4089 55.2931 72.9996 55.9865 72.9996 55.9865C72.9996 55.9865 70.2169 50.9598 70.7609 47.2331C71.3049 43.5065 71.9676 43.7065 71.9676 43.7065Z" fill="url(#paint1_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1="46" y1="0" x2="46" y2="92" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AC6AFF" />
                    <stop offset="1" stopColor="#6C4AFF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="20.0002" y1="47.9231" x2="72.9996" y2="47.9231" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#89F9E8" />
                    <stop offset="0.5" stopColor="#FACB7B" />
                    <stop offset="1" stopColor="#D87CEE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* App icons */}
            {appIcons.map((app, index) => (
              <div
                key={app.name}
                className={`absolute w-12 h-12 ${getIconPosition(app.position)}`}
              >
                <Image
                  src={app.src}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-50 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />
    </section>
  )
}