import React from "react";

interface ItineraryProps {
  title: string;
  days: string[];
}

export default function Itinerary({ title, days }: ItineraryProps) {
  return (
    <section className="bg-stone-50 p-8 rounded-lg" aria-label="Itinerary">
      <h3 className="text-2xl font-bold mb-6 text-stone-800">
        {title}
      </h3>
      
      <div className="space-y-4">
        {days.map((day, index) => {
          // Extract day number and description
          const dayMatch = day.match(/^Day (\d+):\s*(.*)$/);
          if (!dayMatch) {
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <p className="text-stone-700">{day}</p>
                </div>
              </div>
            );
          }
          
          const [, dayNumber, description] = dayMatch;
          
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{dayNumber}</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-stone-800 mb-1">
                  Day {dayNumber}
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-amber-100 rounded-lg">
        <p className="text-stone-700 text-sm">
          <strong>Note:</strong> This is a sample itinerary. All our tours are customizable to match your preferences, interests, and travel dates.
        </p>
      </div>
    </section>
  );
}