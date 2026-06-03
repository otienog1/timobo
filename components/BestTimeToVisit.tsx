import Section from "@/components/Section";

interface Season {
  heading: string;
  detail: string;
}

interface BestTimeToVisitProps {
  destinationName: string;
  seasons: Season[];
  sectionClassName?: string;
}

export default function BestTimeToVisit({
  destinationName,
  seasons,
  sectionClassName = "bg-stone-50",
}: BestTimeToVisitProps) {
  const colClass =
    seasons.length <= 2
      ? "md:grid-cols-2"
      : seasons.length === 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2 lg:grid-cols-4";

  return (
    <Section className={`py-20 lg:py-28 border-t border-stone-200 ${sectionClassName}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-14">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">
            When to Go
          </p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
            Best Time to Visit {destinationName}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
        </div>

        <div className={`grid ${colClass} gap-px bg-stone-200`}>
          {seasons.map(({ heading, detail }, index) => (
            <div key={index} className="bg-white p-8 lg:p-10">
              <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-4">
                {heading}
              </p>
              <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
