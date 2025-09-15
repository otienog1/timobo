# Claude Prompt – Timobo Safaris Website Refactor

**Goal:**  
Refactor the Timobo Safaris Ltd website codebase. Replace all site content with the provided JSON (`TSL_website_structured.json`) and supporting DOCX (`TSL_website notes_working F.docx`). Use shadcn MCP server for the UI. Follow modern best practices and produce a step-by-step TODO log.

---

## Files Provided

- `@/doc/TSL_website_structured.json` — **authoritative source** for all page content.
- `@/doc/TSL_website notes_working F.docx` — supporting content (use only to fill missing JSON pieces).

---

## Tech Stack & Constraints

- Next.js (app directory) + React + TypeScript
- Tailwind CSS (with shadcn components for UI)
- Static content generation (`getStaticProps` / static build)
- Clean semantic routes: `/`, `/destinations`, `/destinations/[country]`, `/about`, `/services`, `/contact`
- Accessibility: WCAG AA, semantic HTML, alt text
- SEO: titles, meta descriptions, JSON-LD for organization
- Tests: Jest + React Testing Library
- Version control: branch `feature/replace-content-tsl`

---

## Acceptance Criteria

1. Replace all visible text and itineraries with JSON content (verbatim).
2. Implement full page structure: Home, Destinations (+ country subpages), About, Services, Contact.
3. Create modular shadcn components (Hero, Section, DestinationCard, Itinerary, ContactCard).
4. Preserve line breaks, lists, headings.
5. Add SEO metadata and accessibility improvements.
6. Provide a TODO log (step-by-step, with statuses).
7. Output a `README.md` and `pr_description.md`.

---

## Steps (TODO List)

1. Parse and validate `TSL_website_structured.json`; fallback to DOCX only for missing data.
2. Create `lib/content.ts` with TypeScript types and a `getSiteContent()` loader.
3. Scaffold routes and pages:
   - `/` (Home)
   - `/destinations` (index) + `/destinations/[slug]` (dynamic for each country)
   - `/about`, `/services`, `/contact`
4. Build reusable components using shadcn: Hero, Section, Itinerary, DestinationCard, ContactCard.
5. Map JSON content into components; render itineraries as lists/accordions.
6. Add SEO (Next.js Metadata API) and JSON-LD organization markup.
7. Implement a contact form (`app/api/contact/route.ts`) – basic validation, log submissions.
8. Write basic tests for Home & one Destination page.
9. Create `README.md` with usage, build steps, content editing guide.
10. Commit changes with atomic messages; push `feature/replace-content-tsl`.
11. Generate `pr_description.md` summarizing work.

---

## Example Code Snippets

**`lib/content.ts`**

```ts
import fs from "fs";
import path from "path";

export type SiteContent = {
  HOME: any;
  DESTINATIONS: any;
  ABOUT: any;
  SERVICES: any;
  CONTACT: any;
};

export function getSiteContent(): SiteContent {
  const file = path.join(
    process.cwd(),
    "mnt",
    "data",
    "TSL_website_structured.json"
  );
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}
```

**`components/Itinerary.tsx`**

```tsx
import React from "react";

type Props = { days: string[] };

export default function Itinerary({ days }: Props) {
  return (
    <section aria-label="Itinerary">
      <h3 className="text-lg font-semibold mb-4">Itinerary</h3>
      <ol className="list-decimal ml-6 space-y-2">
        {days.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ol>
    </section>
  );
}
```

---

## Expected Output from Claude

- Full step-by-step TODO list (with file paths, statuses, notes)
- Example scaffolding for content loader and one UI component
- `pr_description.md` summarizing implemented features and pending tasks
