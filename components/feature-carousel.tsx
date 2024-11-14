'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from "@/lib/utils"

export function FeatureCarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Three.js setup and animation
  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })

    renderer.setSize(553, 553)
    camera.position.z = 5

    // Create spiral geometry with more points for smoother curve
    const curve = new THREE.CatmullRomCurve3(
      Array.from({ length: 200 }, (_, i) => {
        const t = i / 200
        const angle = t * Math.PI * 12 // More rotations
        const radius = 3 * (1 - t * 0.3) // Larger radius
        return new THREE.Vector3(
          radius * Math.cos(angle),
          radius * Math.sin(angle),
          t * 3
        )
      })
    )

    const points = curve.getPoints(500)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    
    // Create gradient material with custom shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float time;
        
        vec3 colorA = vec3(0.537, 0.976, 0.910); // #89F9E8
        vec3 colorB = vec3(0.980, 0.796, 0.482); // #FACB7B
        vec3 colorC = vec3(0.847, 0.486, 0.933); // #D87CEE
        
        void main() {
          float t = (vPosition.x + vPosition.y + vPosition.z) * 0.3 + time;
          vec3 color = mix(colorA, colorB, sin(t) * 0.5 + 0.5);
          color = mix(color, colorC, cos(t) * 0.5 + 0.5);
          gl_FragColor = vec4(color, 0.8);
        }
      `,
      transparent: true,
      linewidth: 2,
    })

    const spiral = new THREE.Line(geometry, material)
    scene.add(spiral)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.005
      material.uniforms.time.value = time
      spiral.rotation.z += 0.002
      spiral.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      scene.remove(spiral)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="w-full bg-[#0B0B0F] py-24">
      <div className="container px-4 mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            <div className="relative flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-5xl font-bold text-white leading-tight">
                      Unlock the<br />power of AI
                    </h2>
                    <p className="text-lg text-[#B6B6B6]">
                      Brainwave unlocks the potential of AI-powered applications
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="h-12 px-8 relative group border-transparent bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE] p-[1px] hover:p-[2px] transition-all uppercase text-xs tracking-wider font-medium"
                  >
                    <span className="absolute inset-[1px] bg-[#0B0B0F] rounded-sm group-hover:bg-opacity-80 transition-colors" />
                    <span className="relative bg-gradient-to-r from-[#89F9E8] via-[#FACB7B] to-[#D87CEE] bg-clip-text text-transparent">
                      See how it works
                    </span>
                  </Button>
                </div>

                {/* 3D Visualization */}
                <div className="relative aspect-square">
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full" />
                  </div>
                  
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                  />
                  
                  {/* Notification Card */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[294px] bg-[#1A1A1F]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#3A3D4E] to-[#292B36] rounded-xl flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Feature icon"
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-white text-sm font-medium">Code generation</span>
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-5 h-5 rounded-full bg-gray-300 border-2 border-[#0B0B0F]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-[#6C7275] text-xs">1m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-24 left-24 flex items-center gap-4">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 text-white/50" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-white/50" />
          </button>
        </div>
      </div>
    </section>
  )
}