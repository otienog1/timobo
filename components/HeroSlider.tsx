"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface HeroSliderProps {
  className?: string
}

export default function HeroSlider({ className = "" }: HeroSliderProps) {
  return (
    <section
      className={cn("relative h-[88vh] overflow-hidden", className)}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="relative h-full w-full">
        <Image
          src="/images/homepage/homepage-hero.jpg"
          alt="Safari vehicle among buffalo herd in African savanna"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-freight-display-pro text-5xl text-white leading-tight max-w-5xl mx-auto">
              Purpose-driven safaris connecting travelers to Africa&apos;s untamed wilderness while championing conservation and cultural preservation
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}