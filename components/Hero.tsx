import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  backgroundImage,
  className = "" 
}: HeroProps) {
  return (
    <section
      className={`relative bg-stone-800 text-white py-24 md:py-32 lg:h-[70vh] lg:min-h-[500px] lg:py-0 lg:flex lg:items-center ${className}`}
      aria-label="Hero section"
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      )}
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-freight-display-pro text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <h2 className="font-sofia-pro text-xl md:text-2xl mb-8 text-stone-300 font-medium">
              {subtitle}
            </h2>
          )}

          {description && (
            <p className="font-sofia-pro text-lg md:text-xl leading-relaxed text-stone-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}