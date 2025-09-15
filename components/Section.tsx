import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
}

export default function Section({ 
  children, 
  className = "",
  id,
  "aria-label": ariaLabel
}: SectionProps) {
  return (
    <section 
      className={className}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}