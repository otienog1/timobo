"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tween = gsap.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 1.1, ease: "power2.out" }
    )

    return () => { tween.kill() }
  }, [pathname])

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
