"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { gsap } from "@/lib/gsap"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const destinations = [
  {
    title: "Eastern Africa",
    href: "/destinations/eastern",
    description: "Kenya, Tanzania, Rwanda, Uganda, Ethiopia — the birthplace of safari.",
    countries: [
      { name: "Kenya", href: "/destinations/kenya" },
      { name: "Tanzania", href: "/destinations/tanzania" },
      { name: "Rwanda", href: "/destinations/rwanda" },
      { name: "Uganda", href: "/destinations/uganda" },
      { name: "Ethiopia", href: "/destinations/ethiopia" },
    ]
  },
  {
    title: "Southern Africa",
    href: "/destinations/southern",
    description: "South Africa, Zimbabwe, Zambia, Botswana, Namibia — dramatic landscapes and wildlife.",
    countries: [
      { name: "South Africa", href: "/destinations/south-africa-and-cape-town" },
      { name: "Zimbabwe", href: "/destinations/zimbabwe" },
      { name: "Zambia", href: "/destinations/zambia" },
      { name: "Botswana", href: "/destinations/botswana" },
      { name: "Namibia", href: "/destinations/namibia" },
    ]
  },
]

const services = [
  {
    title: "Safari Experiences",
    href: "/services/safari-experiences",
    description: "Wildlife safaris, cultural safaris, photography tours, conservation experiences."
  },
  {
    title: "MICE Solutions",
    href: "/services/mice-solutions",
    description: "Corporate conferences, incentive travel, workshops and special events."
  },
  {
    title: "Adventure Travel",
    href: "/services/adventure-travel",
    description: "Northern Kenya expeditions, Ethiopia discoveries, gorilla & chimpanzee treks."
  },
]

const navLinkClass = (isActive: boolean) =>
  cn(
    "font-sofia-pro text-[11px] tracking-[0.1em] uppercase inline-flex h-10 items-center px-4 py-2 transition-colors duration-200 rounded-sm",
    isActive ? "text-amber-400" : "text-stone-600 hover:text-amber-400"
  )

const triggerClass = (isActive: boolean) =>
  cn(
    "font-sofia-pro text-[11px] tracking-[0.1em] uppercase !h-10 !px-4 transition-colors duration-200 !rounded-sm",
    "!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent",
    isActive ? "!text-amber-400" : "!text-stone-600 hover:!text-amber-400"
  )

const mobileLinkClass = (isActive: boolean) =>
  cn(
    "font-sofia-pro text-sm block py-2.5 transition-colors duration-200",
    isActive ? "text-amber-200" : "text-stone-300 hover:text-amber-200"
  )

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [hoveredDestination, setHoveredDestination] = React.useState<string | null>(null)
  const [hoveredService, setHoveredService] = React.useState<string | null>(null)
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)
  const prevValueRef = React.useRef("")

  const handleMenuChange = React.useCallback((value: string) => {
    const wasEmpty = !prevValueRef.current
    prevValueRef.current = value

    const wrapper = document.querySelector("[data-nav-viewport]") as HTMLElement | null
    if (!wrapper) return

    if (!value) {
      gsap.killTweensOf(wrapper)
      gsap.to(wrapper, { opacity: 0, y: -4, duration: 0.15, ease: "power2.in" })
      return
    }

    if (wasEmpty) {
      gsap.killTweensOf(wrapper)
      gsap.fromTo(wrapper,
        { opacity: 0, y: -10, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" }
      )
    }

    requestAnimationFrame(() => {
      const items = Array.from(document.querySelectorAll("[data-nav-item]")).filter(
        (el) => (el as HTMLElement).getBoundingClientRect().height > 0
      )
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.28, ease: "power2.out", stagger: 0.06, delay: 0.06, overwrite: true }
        )
      }
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-stone-200/80">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/_Logo.svg"
            alt="Timobo Safaris"
            width={56}
            height={56}
            className="h-12 md:h-14 w-auto"
          />
          <span className="hidden sm:block font-freight-display-pro text-xl text-stone-800 leading-none">
            Timobo Safaris
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <NavigationMenu className="hidden lg:flex self-stretch" onValueChange={handleMenuChange}>
          <NavigationMenuList className="gap-1">

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={navLinkClass(pathname === "/")}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Destinations dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass(pathname.startsWith("/destinations"))}>
                Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex gap-0 w-[660px]">
                  {/* Image preview panel */}
                  <div className="relative w-56 shrink-0 overflow-hidden p-3">
                    <NavigationMenuLink asChild>
                      <Link href="/destinations" className="block h-full relative rounded-sm overflow-hidden select-none no-underline outline-none">
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredDestination === 'Eastern Africa' ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/destinations/sub-menu/eastern-africa.jpg)' }} />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredDestination === 'Southern Africa' ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/destinations/sub-menu/southern-africa.jpg)' }} />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${!hoveredDestination ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/destinations/sub-menu/all-destinations.jpg)' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sofia-pro text-[9px] tracking-[0.25em] uppercase text-amber-200 mb-1">Explore</p>
                          <p className="font-freight-display-pro text-lg text-white leading-tight">All Destinations</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Regions grid */}
                  <div className="flex-1 grid grid-cols-2 gap-0">
                    {destinations.map((region) => (
                      <div
                        key={region.title}
                        data-nav-item
                        className="p-5"
                        onMouseEnter={() => setHoveredDestination(region.title)}
                        onMouseLeave={() => setHoveredDestination(null)}
                      >
                        <Link href={region.href} className="block mb-3">
                          <p className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-stone-500 hover:text-amber-400 transition-colors pb-2">
                            {region.title}
                          </p>
                        </Link>
                        <ul className="space-y-0.5">
                          {region.countries.map((country) => (
                            <li key={country.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={country.href}
                                  className="font-sofia-pro text-sm text-stone-600 hover:text-amber-400 transition-colors block py-1"
                                >
                                  {country.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                        <NavigationMenuLink asChild>
                          <Link
                            href={region.href}
                            className="font-sofia-pro-bold text-[10px] tracking-[0.15em] uppercase text-amber-400 hover:text-amber-300 transition-colors mt-3 block"
                          >
                            View All &rarr;
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Services dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass(pathname.startsWith("/services"))}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex gap-0 w-[520px]">
                  {/* Image preview panel */}
                  <div className="relative w-52 shrink-0 overflow-hidden p-3">
                    <NavigationMenuLink asChild>
                      <Link href="/services" className="block h-full min-h-[220px] relative rounded-sm overflow-hidden select-none no-underline outline-none">
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredService === 'Safari Experiences' ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/services/sub-menu/safari-experiences.jpg)' }} />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredService === 'MICE Solutions' ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/services/sub-menu/mice-solutions.jpg)' }} />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredService === 'Adventure Travel' ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/services/sub-menu/adventure-travel.jpg)' }} />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${!hoveredService ? 'opacity-100' : 'opacity-0'}`}
                             style={{ backgroundImage: 'url(/images/services/sub-menu/all-services.jpg)' }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-sofia-pro text-[9px] tracking-[0.25em] uppercase text-amber-200 mb-1">Discover</p>
                          <p className="font-freight-display-pro text-lg text-white leading-tight">All Services</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  {/* Services list */}
                  <div className="flex-1 py-2">
                    {services.map((service) => (
                      <NavigationMenuLink asChild key={service.title}>
                        <Link
                          href={service.href}
                          data-nav-item
                          className="group block px-5 py-3.5 transition-colors hover:bg-amber-50/60"
                          onMouseEnter={() => setHoveredService(service.title)}
                          onMouseLeave={() => setHoveredService(null)}
                        >
                          <p className="font-sofia-pro-bold text-sm text-stone-800 group-hover:text-amber-500 transition-colors mb-0.5">
                            {service.title}
                          </p>
                          <p className="font-sofia-pro text-xs text-stone-500 leading-snug line-clamp-2">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={navLinkClass(pathname === "/about" || pathname.startsWith("/about/"))}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={navLinkClass(pathname === "/contact" || pathname.startsWith("/contact/"))}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* ── Right: CTA + Mobile trigger ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.15em] uppercase px-6 py-3 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-200 rounded-sm"
          >
            Plan Your Safari
          </Link>

          {/* Mobile hamburger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            {/* ── Mobile drawer (dark) ── */}
            <SheetContent
              side="right"
              className="w-80 bg-stone-900 border-l border-stone-700/50 p-0 flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-700/60">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  <Image src="/_Logo.svg" width={36} height={36} alt="Timobo Safaris" className="h-9 w-auto" />
                  <span className="font-freight-display-pro text-white text-base leading-none">
                    Timobo Safaris
                  </span>
                </Link>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <nav className="space-y-0.5">

                  <Link href="/" className={mobileLinkClass(pathname === "/")} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>

                  {/* Destinations accordion */}
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/destinations"
                        className={mobileLinkClass(pathname.startsWith("/destinations"))}
                        onClick={() => setIsOpen(false)}
                      >
                        Destinations
                      </Link>
                      <button
                        onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                        className="p-2 -mr-2 text-stone-500 hover:text-stone-300 transition-colors"
                        aria-label="Toggle destinations"
                      >
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileDestinationsOpen && "rotate-180")} />
                      </button>
                    </div>
                    {mobileDestinationsOpen && (
                      <div className="mt-1 ml-3 border-l border-stone-700 pl-4 pb-2 space-y-3">
                        {destinations.map((region) => (
                          <div key={region.title}>
                            <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-200 mb-1.5 mt-2">
                              {region.title}
                            </p>
                            {region.countries.map((country) => (
                              <Link
                                key={country.name}
                                href={country.href}
                                className={cn(
                                  "font-sofia-pro block text-sm py-1 transition-colors",
                                  pathname === country.href ? "text-amber-400" : "text-stone-400 hover:text-white"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {country.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Services accordion */}
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/services"
                        className={mobileLinkClass(pathname.startsWith("/services"))}
                        onClick={() => setIsOpen(false)}
                      >
                        Services
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-2 -mr-2 text-stone-500 hover:text-stone-300 transition-colors"
                        aria-label="Toggle services"
                      >
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <div className="mt-1 ml-3 border-l border-stone-700 pl-4 pb-2 space-y-0.5">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className={cn(
                              "font-sofia-pro block text-sm py-1.5 transition-colors",
                              pathname === service.href ? "text-amber-400" : "text-stone-400 hover:text-white"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href="/about" className={mobileLinkClass(pathname === "/about")} onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/contact" className={mobileLinkClass(pathname === "/contact")} onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>

                </nav>

                {/* Mobile contact info */}
                <div className="mt-8 pt-6 border-t border-stone-700/60">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-stone-500 mb-3">Get In Touch</p>
                  <a href="tel:+254104560540" className="font-sofia-pro text-sm text-stone-400 hover:text-amber-400 transition-colors block mb-1">
                    +254 104 560 540
                  </a>
                  <a href="mailto:karibu@timobosafaris.com" className="font-sofia-pro text-sm text-stone-400 hover:text-amber-400 transition-colors block">
                    karibu@timobosafaris.com
                  </a>
                </div>
              </div>

              {/* CTA at bottom */}
              <div className="px-5 py-5 border-t border-stone-700/60">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full font-sofia-pro-bold text-[11px] tracking-[0.15em] uppercase py-3.5 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-200 rounded-sm"
                >
                  Plan Your Safari
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}

