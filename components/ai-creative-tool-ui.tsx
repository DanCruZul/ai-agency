'use client'

import Image from 'next/image'
import { Play, Mic, ImageIcon, Maximize2 } from 'lucide-react'

export function AiCreativeToolUi() {
  return (
    <div className="bg-[#0B0B0F] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-2">Generative AI made for creators.</h1>
      <p className="text-gray-400 text-center mb-8">Brainwave unlocks the potential of AI-powered applications</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* Smartest AI Section */}
        <div className="col-span-full bg-[#13131A] rounded-3xl p-6 relative overflow-hidden">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Smartest AI</h2>
              <p className="text-gray-400 text-sm mb-4">Brainwave unlocks the potential<br />of AI-powered applications</p>
              <ul className="space-y-2">
                {['Photo generating', 'Photo enhance', 'Seamless Integration'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="AI Generated Image"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-sm">
            AI is generating
          </div>
        </div>

        {/* Video Generation Section */}
        <div className="bg-[#13131A] rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">Video generation</h2>
          <p className="text-gray-400 text-sm mb-4">
            The world's most powerful AI photo and video art generation engine. What will you create?
          </p>
          <div className="bg-[#1E1E26] rounded-2xl p-4 mb-4">
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="Video Thumbnail"
              width={300}
              height={150}
              className="rounded-lg w-full mb-4"
            />
            <div className="flex items-center">
              <button className="bg-purple-600 rounded-full p-2 mr-4">
                <Play className="w-4 h-4" />
              </button>
              <div className="bg-gray-700 h-1 flex-grow rounded-full">
                <div className="bg-purple-600 h-1 w-1/2 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="bg-[#1E1E26] rounded-full p-2">
              <Mic className="w-4 h-4" />
            </button>
            <button className="bg-[#1E1E26] rounded-full p-2">
              <ImageIcon className="w-4 h-4" />
            </button>
            <button className="bg-[#1E1E26] rounded-full p-2">
              <Play className="w-4 h-4" />
            </button>
            <button className="bg-[#1E1E26] rounded-full p-2">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Photo Editing Section */}
        <div className="bg-[#13131A] rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">Photo editing</h2>
          <p className="text-gray-400 text-sm mb-4">
            Automatically enhance your photos using our AI app's photo editing feature. Try it now!
          </p>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Photo Editing Preview"
              width={300}
              height={200}
              className="rounded-lg w-full"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Video generated!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}