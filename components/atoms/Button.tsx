"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ExcludedProps = "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "onAnimationEnd";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<"button">, ExcludedProps> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-bold uppercase tracking-widest border border-black disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-stone-800",
    secondary: "bg-white text-black hover:bg-stone-100",
    outline: "bg-transparent text-black border-black hover:bg-stone-50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className} shadow-hard-sm hover:shadow-hard active:shadow-none transition-all`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
