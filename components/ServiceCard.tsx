import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  reverse?: boolean;
}

export default function ServiceCard({ service, reverse = false }: ServiceCardProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="font-freight-display-pro text-3xl lg:text-4xl font-bold mb-6 text-stone-800">
          {service.title}
        </h3>

        <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-8 leading-relaxed">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-sofia-pro-bold text-lg text-stone-800 mb-4">What we offer:</h4>
            <div className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.title} service`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}