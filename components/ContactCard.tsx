import React from "react";
import Link from "next/link";

interface ContactCardProps {
  icon: "phone" | "email" | "clock" | "location";
  title: string;
  details: string[];
  links?: string[];
}

const IconComponent = ({ icon }: { icon: ContactCardProps["icon"] }) => {
  const iconClass = "w-6 h-6 text-amber-600";
  
  switch (icon) {
    case "phone":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "email":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "location":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ContactCard({ icon, title, details, links }: ContactCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-stone-50 rounded-sm">
      <div className="flex-shrink-0">
        <IconComponent icon={icon} />
      </div>
      
      <div>
        <h3 className="font-semibold text-stone-800 mb-2">{title}</h3>
        
        <div className="space-y-1">
          {details.map((detail, index) => (
            <div key={index}>
              {links && links[index] ? (
                <Link 
                  href={links[index]} 
                  className="text-stone-700 hover:text-amber-600 transition-colors"
                >
                  {detail}
                </Link>
              ) : (
                <p className="text-stone-700">{detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}