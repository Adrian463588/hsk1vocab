"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  background?: "white" | "indigo" | "emerald" | "rose" | "amber" | "sky";
  border?: boolean;
  padding?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  background = "white",
  border = true,
  padding = "md",
  className = "",
  onClick,
}: CardProps) {
  // Enforce white background for the specific minimalist look, ignoring the background prop "colors" for now or mapping them to white/black
  // We want strict cohesive style: White cards, Black borders.
  
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
    "2xl": "p-12",
  };

  return (
    <div
      className={`bg-white border text-left border-black ${paddingStyles[padding]} ${className} shadow-sm transition-all duration-200 hover:shadow-hard hover:-translate-y-1`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
