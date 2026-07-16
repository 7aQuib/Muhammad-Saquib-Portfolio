import React from "react";

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-5xl font-display">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
