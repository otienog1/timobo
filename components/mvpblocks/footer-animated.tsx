"use client";

import Link from "next/link";
import Image from "next/image";

const nav = [
  { name: "Destinations", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const FooterAnimated = () => (
  <footer className="bg-stone-900 text-stone-400">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">

      {/* ── Main body ── */}
      <div className="py-16 lg:py-20 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

        {/* Brand */}
        <div className="lg:max-w-xs">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <Image
              src="/_Logo.svg"
              alt="Timobo Safaris"
              width={40}
              height={40}
              className="h-10 w-auto brightness-[2.5]"
            />
            <span className="font-freight-display-pro text-white text-lg leading-none">
              Timobo Safaris
            </span>
          </Link>
          <p className="font-sofia-pro text-[10px] tracking-[0.25em] uppercase text-amber-200/70 mb-4">
            Experiences of Africa
          </p>
          <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">
            18+ years crafting purpose-driven safaris across Eastern &amp; Southern Africa.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-14">

          <div>
            <p className="font-sofia-pro-bold text-[9px] tracking-[0.3em] uppercase text-stone-600 mb-4">Explore</p>
            <ul className="space-y-3">
              {[
                { name: "Destinations", href: "/destinations" },
                { name: "Eastern Africa", href: "/destinations/eastern" },
                { name: "Southern Africa", href: "/destinations/southern" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="font-sofia-pro text-sm text-stone-500 hover:text-amber-200 transition-colors duration-200">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sofia-pro-bold text-[9px] tracking-[0.3em] uppercase text-stone-600 mb-4">Services</p>
            <ul className="space-y-3">
              {[
                { name: "Safari Experiences", href: "/services/safari-experiences" },
                { name: "Adventure Travel", href: "/services/adventure-travel" },
                { name: "MICE Solutions", href: "/services/mice-solutions" },
                { name: "Holiday Getaways", href: "/services/holiday-getaways" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="font-sofia-pro text-sm text-stone-500 hover:text-amber-200 transition-colors duration-200">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sofia-pro-bold text-[9px] tracking-[0.3em] uppercase text-stone-600 mb-4">Company</p>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="font-sofia-pro text-sm text-stone-500 hover:text-amber-200 transition-colors duration-200">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sofia-pro-bold text-[9px] tracking-[0.3em] uppercase text-stone-600 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254104560540" className="font-sofia-pro text-sm text-stone-500 hover:text-amber-200 transition-colors duration-200">
                  +254 104 560 540
                </a>
              </li>
              <li>
                <a href="mailto:karibu@timobosafaris.com" className="font-sofia-pro text-sm text-stone-500 hover:text-amber-200 transition-colors duration-200 break-all">
                  karibu@timobosafaris.com
                </a>
              </li>
              <li>
                <p className="font-sofia-pro text-sm text-stone-500">Nairobi, Kenya</p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Footer base ── */}
      <div className="border-t border-stone-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="font-sofia-pro text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Timobo Safaris Ltd. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-stone-600 hover:text-amber-200 transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="font-sofia-pro text-xs text-stone-600">
          Est. 2006 &nbsp;&middot;&nbsp; Nairobi, Kenya
        </p>

      </div>
    </div>
  </footer>
);

export default FooterAnimated;
