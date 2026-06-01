"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { gsap } from "@/lib/gsap"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

export default function PageHero({ title, subtitle, backgroundImage, className = "" }: PageHeroProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15, defaults: { ease: "power3.out" } })
      tl.fromTo("[data-ph='heading']",
          { opacity: 0, y: 24, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.85 })
        .fromTo("[data-ph='divider']",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.inOut", transformOrigin: "center" },
          "-=0.60")

      const subtitleEl = containerRef.current?.querySelector("[data-ph='subtitle']")
      if (subtitleEl) {
        tl.fromTo(subtitleEl,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.35")
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className={cn("relative h-[65vh] min-h-[520px] overflow-hidden", className)}
      aria-label="Page hero"
    >
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-stone-800" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/65" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl text-center">
          <h1 data-ph="heading" className="font-freight-display-pro text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-white leading-[1.25] max-w-4xl mx-auto">
            {title}
          </h1>

          <div data-ph="divider" className="flex items-center justify-center gap-3 my-7">
            <span className="h-px w-14 bg-amber-200/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-200/80 inline-block shrink-0" />
            <span className="h-px w-14 bg-amber-200/60" />
          </div>

          {subtitle && (
            <p data-ph="subtitle" className="font-sofia-pro text-base sm:text-lg text-stone-200/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
