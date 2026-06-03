"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { gsap } from "@/lib/gsap"

interface HeroSliderProps {
  className?: string
}

export default function HeroSlider({ className = "" }: HeroSliderProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15, defaults: { ease: "power3.out" } })

      // Each element starts 0.25s after the previous (duration 0.85 − offset 0.60 = 0.25s gap)
      tl.fromTo("[data-hero='heading']",
          { opacity: 0, y: 10, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.85 })
        .fromTo("[data-hero='copy']",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.60")
        .fromTo("[data-hero='divider']",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, transformOrigin: "center" },
          "-=0.60")
        .fromTo("[data-hero='ctas']",
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.35")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className={cn("relative h-[calc(100vh-5rem)] overflow-hidden", className)}
      aria-label="Hero section"
    >
      <Image
        src="/images/homepage/homepage-hero.jpg"
        alt="Safari vehicle among buffalo herd in African savanna"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl text-center">

          <h1 data-hero="heading" className="font-freight-display-pro text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-white leading-[1.25] max-w-4xl mx-auto">
            Purpose-driven safaris connecting travelers to Africa&apos;s untamed wilderness
          </h1>

          <p data-hero="copy" className="font-sofia-pro text-base sm:text-lg text-stone-200/80 mt-5 max-w-xl mx-auto leading-relaxed">
            Championing conservation and cultural preservation across Eastern and Southern Africa — one extraordinary journey at a time.
          </p>

          <div data-hero="divider" className="flex items-center justify-center gap-3 my-8">
            <span className="h-px w-14 bg-amber-200/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-200/80 inline-block shrink-0" />
            <span className="h-px w-14 bg-amber-200/60" />
          </div>

          <div data-hero="ctas" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm"
            >
              Plan Your Safari
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/65 hover:border-white/90 text-white hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              Explore Destinations
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
