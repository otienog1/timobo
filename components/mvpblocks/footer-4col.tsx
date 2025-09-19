import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/timbosafaris',
  instaLink: 'https://instagram.com/timbosafaris',
  twitterLink: 'https://twitter.com/timbosafaris',
  linkedinLink: 'https://linkedin.com/company/timobo-safaris',
  youtubeLink: 'https://youtube.com/timbosafaris',
  destinations: {
    all: '/destinations',
    eastern: '/destinations/eastern',
    southern: '/destinations/southern',
    kenya: '/destinations/kenya',
  },
  about: {
    company: '/about',
    team: '/about#team',
    experience: '/about#experience',
    sustainability: '/about#sustainability',
  },
  services: {
    safaris: '/services#safari',
    mice: '/services#mice',
    adventure: '/services#adventure',
    custom: '/services#custom',
  },
  contact: {
    email: 'karibu@timobosafaris.com',
    phone: '+254 104 560 540',
    address: 'Nairobi, Kenya, East Africa',
  },
  company: {
    name: 'Timobo Safaris Ltd',
    description:
      'For over 18 years, Timobo Safaris has specialized in purpose-driven safaris in Kenya and tailor-made African safari tours across Eastern and Southern Africa.',
    logo: '/_Logo.svg',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Youtube, label: 'YouTube', href: data.youtubeLink },
];

const aboutLinks = [
  { text: 'Our Company', href: data.about.company },
  { text: 'Our Team', href: data.about.team },
  { text: '18+ Years Experience', href: data.about.experience },
  { text: 'Sustainability', href: data.about.sustainability },
];

const destinationLinks = [
  { text: 'All Destinations', href: data.destinations.all },
  { text: 'Eastern Africa', href: data.destinations.eastern },
  { text: 'Southern Africa', href: data.destinations.southern },
  { text: 'Kenya Safaris', href: data.destinations.kenya },
];

const serviceLinks = [
  { text: 'Safari Experiences', href: data.services.safaris },
  { text: 'MICE Solutions', href: data.services.mice },
  { text: 'Adventure Travel', href: data.services.adventure },
  { text: 'Custom Itineraries', href: data.services.custom, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-red dark:bg-secondary/20 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Destinations</p>
              <ul className="mt-8 space-y-4 text-sm">
                {destinationLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-secondary-foreground/70 hover:text-secondary-foreground transition"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={`${hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-secondary-foreground/70 hover:text-secondary-foreground transition'
                        }`}
                    >
                      <span className="text-secondary-foreground/70 hover:text-secondary-foreground transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-amber-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-amber-500 relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-secondary-foreground/70 hover:text-secondary-foreground transition"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
