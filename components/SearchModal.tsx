"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, X } from "lucide-react"
import { gsap } from "@/lib/gsap"
import { searchData, type SearchItem } from "@/lib/search-data"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim().length > 1
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
      )
    : []

  const destinations = results.filter(r => r.category === "Destination")
  const services = results.filter(r => r.category === "Service")

  useEffect(() => {
    const overlay = overlayRef.current
    const panel = panelRef.current
    if (!overlay || !panel) return

    if (isOpen) {
      gsap.set(overlay, { display: "flex" })
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" })
      gsap.fromTo(panel,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out", delay: 0.05 }
      )
      setTimeout(() => inputRef.current?.focus(), 150)
    } else {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" })
          setQuery("")
        },
      })
    }
  }, [isOpen])

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [handleEscape])

  return (
    <div
      ref={overlayRef}
      style={{ display: "none" }}
      className="fixed inset-0 z-[200] flex items-start justify-center pt-24 sm:pt-32 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="absolute inset-0 bg-stone-900/75 backdrop-blur-sm" onClick={onClose} />

      <div ref={panelRef} className="relative w-full max-w-xl bg-white border border-stone-200">

        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-100">
          <Search className="w-4 h-4 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search destinations, services…"
            className="flex-1 font-sofia-pro text-sm text-stone-800 placeholder:text-stone-400 outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 transition-colors p-0.5"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        {query.trim().length > 1 ? (
          <div className="max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-4 py-10 text-center">
                <p className="font-sofia-pro text-sm text-stone-400">
                  No results for &ldquo;{query}&rdquo;
                </p>
              </div>
            ) : (
              <>
                {destinations.length > 0 && (
                  <ResultGroup title="Destinations" items={destinations} onClose={onClose} />
                )}
                {services.length > 0 && (
                  <ResultGroup title="Services" items={services} onClose={onClose} />
                )}
              </>
            )}
          </div>
        ) : (
          <div className="px-4 py-4">
            <p className="font-sofia-pro text-xs text-stone-400">
              Start typing to search destinations and services
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function ResultGroup({
  title,
  items,
  onClose,
}: {
  title: string
  items: SearchItem[]
  onClose: () => void
}) {
  return (
    <div>
      <p className="px-4 pt-3.5 pb-1 font-sofia-pro text-[10px] tracking-[0.22em] uppercase text-amber-500">
        {title}
      </p>
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          onClick={onClose}
          className="flex items-center gap-3.5 px-4 py-2.5 hover:bg-stone-50 transition-colors group"
        >
          <div className="relative w-11 h-11 shrink-0 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <p className="font-freight-display-pro text-base text-stone-800 leading-snug group-hover:text-amber-600 transition-colors">
              {item.title}
            </p>
            <p className="font-sofia-pro text-xs text-stone-500 leading-snug line-clamp-1 mt-0.5">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
