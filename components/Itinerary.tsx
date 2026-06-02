import React from "react";

interface ItineraryProps {
  title: string;
  days: string[];
  isDark?: boolean;
}

export default function Itinerary({ days, isDark = false }: ItineraryProps) {
  return (
    <div
      className={`divide-y ${isDark ? "divide-white/10" : "divide-stone-100"}`}
      aria-label="Itinerary"
    >
      {days.map((day, index) => {
        const dayMatch = day.match(/^Day (\d+):\s*(.*)$/);
        const dayNumber = dayMatch ? dayMatch[1] : String(index + 1);
        const description = dayMatch ? dayMatch[2] : day;

        return (
          <div
            key={index}
            className="flex items-start gap-6 lg:gap-10 py-8 first:pt-0 last:pb-0"
          >
            <div className="flex-shrink-0 w-14 lg:w-16 pt-0.5">
              <span
                className={`font-freight-display-pro text-4xl lg:text-5xl leading-none select-none ${
                  isDark ? "text-white/10" : "text-stone-200"
                }`}
                aria-hidden="true"
              >
                {String(dayNumber).padStart(2, "0")}
              </span>
            </div>
            <div className="flex-grow min-w-0">
              <p
                className={`font-sofia-pro text-[10px] tracking-[0.2em] uppercase mb-2 ${
                  isDark ? "text-amber-300" : "text-amber-600"
                }`}
              >
                Day {dayNumber}
              </p>
              <p
                className={`font-sofia-pro text-sm leading-relaxed ${
                  isDark ? "text-stone-300" : "text-stone-700"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
