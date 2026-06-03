'use client'

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"

const services = [
  {
    num: "01",
    title: "Safari Experiences",
    description: "Custom-designed safari itineraries connecting you to Africa's most iconic destinations — from luxury lodge stays and wildlife encounters to photography tours and conservation experiences.",
    image: "/images/homepage/homepage-safari-experiences.jpg",
    alt: "Wildlife safari experience",
    link: "/services/safari-experiences"
  },
  {
    num: "02",
    title: "Adventure Travel",
    description: "Off-the-beaten-path expeditions across Northern Kenya, Ethiopia, Rwanda, and Tanzania — gorilla treks, cultural discoveries, and wilderness journeys for the true explorer.",
    image: "/images/homepage/homepage-adventure-travel.jpg",
    alt: "Adventure travel in Africa",
    link: "/services/adventure-travel"
  },
  {
    num: "03",
    title: "MICE Solutions",
    description: "End-to-end corporate event services across Eastern and Southern Africa — conferences, incentive travel, workshops, and special events planned and executed flawlessly.",
    image: "/images/homepage/homepage-mice-solutions.jpg",
    alt: "Corporate meetings and events in Africa",
    link: "/services/mice-solutions"
  },
  {
    num: "04",
    title: "Holiday Getaways",
    description: "Luxury holidays across Africa's most beautiful destinations. Perfect for honeymoons, family escapes, and romantic retreats — each one crafted with personal attention.",
    image: "/images/services/service-holiday-getaways.jpg",
    alt: "Luxury holiday getaways in Africa",
    link: "/services/holiday-getaways"
  },
  {
    num: "05",
    title: "Transport Solutions",
    description: "Reliable, comfortable transport throughout your African journey. From airport pickups to safari game drives and inter-lodge transfers — handled with professionalism.",
    image: "/images/services/service-transport-solutions.jpg",
    alt: "Transport solutions across Africa",
    link: "/services/transport-solutions"
  },
  {
    num: "06",
    title: "Outbound Travel",
    description: "Plan your international trips with confidence. Comprehensive outbound services — flights, visas, insurance, and expert guidance for destinations worldwide.",
    image: "/images/services/services-hero.jpg",
    alt: "International outbound travel services",
    link: "/services/outbound-travel"
  }
]

export default function ExpertiseCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)
  const [current, setCurrent] = useState(0)
  const [maxIndex, setMaxIndex] = useState(services.length - 1)
  const timerRef = useRef<ReturnType<typeof gsap.delayedCall> | null>(null)
  const isVisibleRef = useRef(false)

  const cardWidth = () =>
    trackRef.current
      ? (trackRef.current.children[0] as HTMLElement).offsetWidth
      : 0

  const visibleCount = () =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1

  const maxIdx = () => services.length - visibleCount()

  const animateTo = useCallback((idx: number) => {
    if (!trackRef.current) return
    gsap.to(trackRef.current, {
      x: -idx * cardWidth(),
      duration: 0.65,
      ease: "power2.inOut"
    })
  }, [])

  const goTo = useCallback(
    (idx: number) => {
      indexRef.current = idx
      setCurrent(idx)
      animateTo(idx)
    },
    [animateTo]
  )

  const resetTimer = useCallback(() => {
    if (timerRef.current) timerRef.current.kill()
    timerRef.current = gsap.delayedCall(4.5, () => {
      const max = maxIdx()
      const next = indexRef.current >= max ? 0 : indexRef.current + 1
      goTo(next)
      resetTimer()
    })
  }, [goTo])

  useEffect(() => {
    const updateMax = () => {
      const m = maxIdx()
      setMaxIndex(m)
      const clamped = Math.min(indexRef.current, m)
      if (clamped !== indexRef.current) {
        goTo(clamped)
      } else {
        animateTo(indexRef.current)
      }
    }

    updateMax()

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          resetTimer()
        } else {
          if (timerRef.current) timerRef.current.kill()
        }
      },
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)

    window.addEventListener("resize", updateMax)
    return () => {
      window.removeEventListener("resize", updateMax)
      if (timerRef.current) timerRef.current.kill()
      observer.disconnect()
    }
  }, [resetTimer, goTo, animateTo])

  const prev = () => {
    if (timerRef.current) timerRef.current.kill()
    goTo(current > 0 ? current - 1 : maxIndex)
    if (isVisibleRef.current) resetTimer()
  }

  const next = () => {
    if (timerRef.current) timerRef.current.kill()
    goTo(current < maxIndex ? current + 1 : 0)
    if (isVisibleRef.current) resetTimer()
  }

  const dot = (i: number) => {
    if (timerRef.current) timerRef.current.kill()
    goTo(i)
    if (isVisibleRef.current) resetTimer()
  }

  const handleMouseEnter = () => {
    if (timerRef.current) timerRef.current.kill()
  }

  const handleMouseLeave = () => {
    if (isVisibleRef.current) resetTimer()
  }

  return (
    <div ref={containerRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden border border-stone-200">
        <div ref={trackRef} className="flex will-change-transform divide-x divide-stone-200">
          {services.map((s, i) => (
            <div
              key={i}
              data-s="services-card"
              className="group flex flex-col flex-shrink-0 w-full lg:w-1/3"
            >
              <Link href={s.link} className="relative h-72 overflow-hidden block">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <span className="absolute top-4 left-4 font-freight-display-pro text-5xl text-white/20 leading-none select-none">
                  {s.num}
                </span>
              </Link>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-freight-display-pro text-2xl text-stone-800 mb-3">
                  {s.title}
                </h3>
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <Link
                  href={s.link}
                  className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 transition-colors"
                >
                  Discover More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => dot(i)}
              aria-label={`Go to service ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-1.5 bg-amber-400"
                  : "w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="w-10 h-10 border border-stone-200 hover:border-amber-300 hover:bg-amber-50 flex items-center justify-center transition-all duration-200 text-stone-600 hover:text-stone-900"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="w-10 h-10 border border-stone-200 hover:border-amber-300 hover:bg-amber-50 flex items-center justify-center transition-all duration-200 text-stone-600 hover:text-stone-900"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
