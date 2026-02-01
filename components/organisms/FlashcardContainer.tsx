"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashCard from "../molecules/FlashCard";
import NavigationButtons from "../molecules/NavigationButtons";
import { VocabularyWord } from "@/types/vocabulary";

interface FlashcardContainerProps {
  vocabulary: VocabularyWord[];
}

const swipeVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function FlashcardContainer({
  vocabulary,
}: FlashcardContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < vocabulary.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (vocabulary.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-stone-500">No vocabulary available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-full max-w-xl h-[500px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <FlashCard word={vocabulary[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <NavigationButtons
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={currentIndex > 0}
        hasNext={currentIndex < vocabulary.length - 1}
        currentIndex={currentIndex}
        total={vocabulary.length}
      />

      <div className="text-center mt-4">
        <p className="text-sm text-stone-600 font-mono uppercase tracking-widest">
          Click the card to flip
        </p>
      </div>
    </div>
  );
}

