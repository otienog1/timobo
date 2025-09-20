"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const destinations = [
  {
    title: "Eastern Africa",
    href: "/destinations/eastern",
    description: "Kenya, Tanzania, Rwanda, Uganda, Ethiopia - The birthplace of safari.",
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
    description: "South Africa, Zimbabwe, Zambia, Botswana, Namibia - Dramatic landscapes and wildlife.",
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

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [hoveredDestination, setHoveredDestination] = React.useState<string | null>(null)
  const [hoveredService, setHoveredService] = React.useState<string | null>(null)
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/_Logo.svg"
              alt="Timobo Safaris Logo"
              width={60}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
            <span className="hidden font-bold sm:inline-block text-lg" style={{fontFamily: '"sofia-pro", sans-serif', fontWeight: 400, fontStyle: 'normal'}}>
              Timobo Safaris
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    pathname === "/" && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  pathname.startsWith("/destinations") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3 relative overflow-hidden">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-sm p-6 no-underline outline-none transition-all duration-500 hover:shadow-lg focus:shadow-md relative z-10"
                        href="/destinations"
                      >
                        {/* Background Images */}
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          hoveredDestination === 'Eastern Africa' ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/destinations/sub-menu/eastern-africa.jpg)'
                             }}
                        />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          hoveredDestination === 'Southern Africa' ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/destinations/sub-menu/southern-africa.jpg)'
                             }}
                        />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          !hoveredDestination ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/destinations/sub-menu/all-destinations.jpg)'
                             }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="mb-2 mt-4 text-lg font-medium text-white relative z-10">
                          All Destinations
                        </div>
                        <p className="text-sm leading-tight text-white/80 relative z-10">
                          Discover Africa&apos;s most incredible places across Eastern and Southern Africa.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  {destinations.map((region) => (
                    <div
                      key={region.title}
                      onMouseEnter={() => setHoveredDestination(region.title)}
                      onMouseLeave={() => setHoveredDestination(null)}
                    >
                      <ListItem
                        title={region.title}
                        href={region.href}
                      >
                        {region.description}
                      </ListItem>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                  pathname.startsWith("/services") && "!bg-amber-100 !text-amber-800 font-semibold"
                )}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3 relative overflow-hidden">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-sm p-6 no-underline outline-none transition-all duration-500 hover:shadow-lg focus:shadow-md relative z-10"
                        href="/services"
                      >
                        {/* Background Images */}
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          hoveredService === 'Safari Experiences' ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/services/sub-menu/safari-experiences.jpg)'
                             }}
                        />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          hoveredService === 'MICE Solutions' ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/services/sub-menu/mice-solutions.jpg)'
                             }}
                        />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          hoveredService === 'Adventure Travel' ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/services/sub-menu/adventure-travel.jpg)'
                             }}
                        />
                        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                          !hoveredService ? 'opacity-100' : 'opacity-0'
                        }`}
                             style={{
                               backgroundImage: 'url(/images/services/sub-menu/all-services.jpg)'
                             }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="mb-2 mt-4 text-lg font-medium text-white relative z-10">
                          All Services
                        </div>
                        <p className="text-sm leading-tight text-white/80 relative z-10">
                          From luxury safaris to MICE solutions, we craft unforgettable African experiences.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {services.map((service) => (
                    <li
                      key={service.title}
                      onMouseEnter={() => setHoveredService(service.title)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <ListItem
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    (pathname === "/about" || pathname.startsWith("/about/")) && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 active:bg-amber-100 focus-visible:bg-amber-50 focus-visible:text-amber-700",
                    (pathname === "/contact" || pathname.startsWith("/contact/")) && "!bg-amber-100 !text-amber-800 font-semibold"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full h-full max-w-none pr-0 bg-white/100 backdrop-blur-none">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/_Logo.svg"
                    width={40}
                    height={40}
                    alt="Timobo Safaris Ltd"
                    className="h-8 w-auto"
                  />
                  <span style={{fontFamily: '"sofia-pro", sans-serif', fontWeight: 400, fontStyle: 'normal'}}>Timobo Safaris</span>
                </Link>
              </SheetTitle>
              <SheetDescription className="text-left">
                Experiences of Africa - 18+ years of safari excellence
              </SheetDescription>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 px-6">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    pathname === "/" && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/destinations"
                      className={cn(
                        "text-foreground/70 transition-all duration-200 hover:text-foreground font-medium rounded-md px-3 py-2 hover:bg-amber-50",
                        pathname.startsWith("/destinations") && "!text-amber-800 !bg-amber-100 font-semibold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Destinations
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                    >
                      <svg
                        className={cn("h-4 w-4 transition-transform", mobileDestinationsOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </div>
                  {mobileDestinationsOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {destinations.map((region) => (
                        <div key={region.title}>
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {region.title}
                          </div>
                          {region.countries.map((country) => (
                            <Link
                              key={country.name}
                              href={country.href}
                              className={cn(
                                "block text-sm text-foreground/60 hover:text-foreground ml-2 py-1 px-2 rounded transition-all duration-200 hover:bg-amber-50",
                                pathname === country.href && "!text-amber-800 !bg-amber-100 font-medium"
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
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/services"
                      className={cn(
                        "text-foreground/70 transition-all duration-200 hover:text-foreground font-medium rounded-md px-3 py-2 hover:bg-amber-50",
                        pathname.startsWith("/services") && "!text-amber-800 !bg-amber-100 font-semibold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <svg
                        className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className={cn(
                            "block text-sm text-foreground/60 hover:text-foreground py-1 px-2 rounded transition-all duration-200 hover:bg-amber-50",
                            pathname === service.href && "!text-amber-800 !bg-amber-100 font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/about"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    (pathname === "/about" || pathname.startsWith("/about/")) && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-foreground/70 transition-all duration-200 hover:text-foreground rounded-md px-3 py-2 hover:bg-amber-50",
                    (pathname === "/contact" || pathname.startsWith("/contact/")) && "!text-amber-800 !bg-amber-100 font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-100 focus:text-amber-800 active:bg-amber-100",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  )
})
ListItem.displayName = "ListItem"