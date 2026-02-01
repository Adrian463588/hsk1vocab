"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rect" | "circle";
}

export default function Skeleton({ className = "", variant = "rect" }: SkeletonProps) {
  const baseStyles = "bg-stone-200 overflow-hidden relative";
  
  const variantStyles = {
    text: "h-4 w-full rounded",
    rect: "rounded-none",
    circle: "rounded-full aspect-square",
  };
  
  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ x: ["calc(-100%)", "calc(200%)"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// Card Skeleton for Vocabulary Grid
export function VocabCardSkeleton() {
  return (
    <div className="bg-white border border-black p-6 space-y-4">
      <Skeleton className="h-20 w-20 mx-auto" />
      <Skeleton variant="text" className="w-2/3 mx-auto" />
      <Skeleton variant="text" className="w-1/2 mx-auto" />
      <div className="border-t border-black/10 pt-4 mt-4 space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-4/5" />
        <Skeleton variant="text" className="w-3/5" />
      </div>
    </div>
  );
}

// Flashcard Skeleton for Study Page
export function FlashCardSkeleton() {
  return (
    <div className="bg-[#fdfbf7] border border-black shadow-hard w-full max-w-xl h-[500px] flex flex-col items-center justify-center p-8">
      <Skeleton className="h-32 w-32 mb-8" />
      <Skeleton variant="text" className="w-32" />
    </div>
  );
}
