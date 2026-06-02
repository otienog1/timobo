import React from "react";
import Link from "next/link";

interface ContactCardProps {
  icon: "phone" | "email" | "clock" | "location";
  title: string;
  details: string[];
  links?: string[];
}

export default function ContactCard({ title, details, links }: ContactCardProps) {
  return (
    <div className="flex items-start gap-5 py-7 first:pt-0 last:pb-0">
      <div className="flex-shrink-0 w-px self-stretch bg-amber-300/60" />
      <div className="flex-1 min-w-0">
        <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{title}</p>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <div key={index}>
              {links && links[index] ? (
                <Link
                  href={links[index]}
                  className="font-freight-display-pro text-xl text-stone-800 hover:text-amber-600 transition-colors duration-200 block"
                >
                  {detail}
                </Link>
              ) : (
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">{detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
