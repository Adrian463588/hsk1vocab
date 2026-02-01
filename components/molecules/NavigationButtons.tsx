"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../atoms/Button";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  currentIndex: number;
  total: number;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  currentIndex,
  total,
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-xl gap-8">
      <Button
        variant="primary"
        className="w-16 h-16 !p-0 flex items-center justify-center rounded-none shadow-hard hover:shadow-hard-lg"
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous Word"
      >
        <ChevronLeft size={32} />
      </Button>

      <div className="text-center font-mono">
        <span className="text-4xl font-bold block">{currentIndex + 1}</span>
        <span className="text-sm uppercase tracking-widest text-stone-500">OF {total}</span>
      </div>

      <Button
        variant="primary"
        className="w-16 h-16 !p-0 flex items-center justify-center rounded-none shadow-hard hover:shadow-hard-lg"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next Word"
      >
        <ChevronRight size={32} />
      </Button>
    </div>
  );
}
