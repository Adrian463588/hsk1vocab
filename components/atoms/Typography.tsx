"use client";

import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level = 1, className = "" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  // Default base styles for all headings
  const baseStyles = "leading-tight tracking-tight font-semibold text-black";
  
  return <Tag className={`${baseStyles} ${className}`}>{children}</Tag>;
}

interface BodyTextProps {
  children: ReactNode;
  size?: "sm" | "base" | "lg";
  className?: string;
}

export function BodyText({
  children,
  size = "base",
  className = "",
}: BodyTextProps) {
  const sizeStyles = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };
  
  // Best practice: Relaxed leading for body text improves readability
  return <p className={`${sizeStyles[size]} leading-relaxed text-gray-700 ${className}`}>{children}</p>;
}
