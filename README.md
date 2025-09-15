# Timobo Safaris Ltd Website

A modern, responsive website for Timobo Safaris Ltd, showcasing 18+ years of expertise in African safari planning and MICE services across Eastern and Southern Africa.

## 🌍 About Timobo Safaris Ltd

Timobo Safaris Ltd specializes in purpose-driven safaris in Kenya and tailor-made African safari tours across Eastern and Southern Africa. Our journeys take you deep into Africa's untamed wilderness, offering authentic wildlife encounters while championing wildlife conservation, cultural preservation, and community empowerment.

## 🚀 Tech Stack

- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Static Site Generation** for optimal performance
- **Responsive Design** for all devices
- **SEO Optimized** with proper metadata and semantic HTML

## 📁 Project Structure

```
timobo/
├── app/                    # Next.js App Router pages
│   ├── destinations/       # Destination pages
│   │   ├── [slug]/        # Dynamic destination routes
│   │   └── page.tsx       # Destinations listing
│   ├── about/             # About us page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable UI components
│   ├── Hero.tsx          # Hero section component
│   ├── Section.tsx       # Layout section wrapper
│   ├── DestinationCard.tsx # Destination preview card
│   ├── Itinerary.tsx     # Itinerary display component
│   ├── ServiceCard.tsx   # Service information card
│   ├── ContactCard.tsx   # Contact information card
│   └── ContactForm.tsx   # Contact form component
├── lib/                   # Utility functions and types
│   └── content.ts        # Content management system
├── docs/                  # Content source files
│   └── TSL_website_content_full.json
└── public/               # Static assets
```

## 🎯 Features

### Pages & Routes
- **Homepage** (`/`) - Welcome message, company overview, and call-to-actions
- **Destinations** (`/destinations`) - Showcase of Eastern and Southern Africa destinations
- **Dynamic Destination Pages** (`/destinations/[slug]`) - Detailed destination information with itineraries
- **About** (`/about`) - Company story, mission, vision, values, and impact
- **Services** (`/services`) - Comprehensive service offerings including MICE solutions
- **Contact** (`/contact`) - Contact form and business information

### Key Components

#### Content Management
- **Structured Content System**: JSON-based content management with TypeScript interfaces
- **Dynamic Route Generation**: Automatic creation of destination pages from content data
- **SEO Optimization**: Comprehensive metadata and Open Graph tags

#### UI Components
- **Hero Component**: Reusable hero sections with background image support
- **Destination Cards**: Interactive cards showcasing destinations with key attractions
- **Itinerary Component**: Detailed day-by-day itinerary display
- **Service Cards**: Alternating layout showcasing different service categories
- **Contact Form**: Full-featured contact form with validation and API integration

#### Accessibility & SEO
- **WCAG AA Compliance**: Semantic HTML, proper ARIA labels, and keyboard navigation
- **SEO Optimized**: Proper meta tags, structured data, and semantic markup
- **Performance Optimized**: Static generation and optimized images

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd timobo
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

### Adding/Editing Content

The website content is managed through the structured JSON file located at `docs/TSL_website_content_full.json`. The content is parsed and typed through the `lib/content.ts` system.

### Adding New Destinations

1. Add destination data to the JSON file following the existing structure
2. The system will automatically generate routes and pages
3. Update destination images in the `public/images/destinations/` directory

### Updating Content Types

Content types are defined in `lib/content.ts`. When adding new content structures:

1. Update the TypeScript interfaces
2. Modify the parsing functions
3. Update components to handle new content types

## 🎨 Design System

### Color Palette
- **Primary**: Amber/Gold tones (`amber-500`, `amber-600`)
- **Neutral**: Stone grays (`stone-50` to `stone-900`)
- **Accent**: Natural earth tones

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body Text**: Readable line heights and spacing
- **Interactive Elements**: Clear visual hierarchy

## 📧 Contact Form

The contact form (`/contact`) includes:
- **Form Fields**: Name, email, phone, subject, travel dates, group size, message
- **Validation**: Client and server-side validation
- **API Integration**: POST endpoint at `/api/contact`
- **User Feedback**: Loading states and success/error messages

### Contact Form API

The contact form submits to `/api/contact` with the following data structure:

```typescript
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  travelDates?: string;
  groupSize?: string;
}
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

### Static Export (if needed)

```bash
npm run build && npm run export
# or
yarn build && yarn export
```

## 📊 Performance & SEO

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### SEO Features
- **Dynamic Metadata**: Page-specific titles and descriptions
- **Open Graph Tags**: Social media optimization
- **Structured Data**: JSON-LD for business information
- **Sitemap**: Automatic sitemap generation
- **Semantic HTML**: Proper heading hierarchy and markup

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Timobo Safaris Ltd.

## 📞 Support

For technical support or questions about the website:
- Email: tech@timobosafaris.com
- Phone: +254 720 091 713

---

**Timobo Safaris Ltd** - *Experiences of Africa*
