"use client";

import { memo } from "react";
import Card from "../atoms/Card";
import { VocabularyWord } from "@/types/vocabulary";

interface VocabCardProps {
  word: VocabularyWord;
  onClick?: () => void;
}

// Memoized VocabCard to prevent unnecessary re-renders
// Using CSS transitions instead of Framer Motion for better LCP performance
const VocabCard = memo(function VocabCard({ word, onClick }: VocabCardProps) {
  return (
    <div
      className="cursor-pointer transform transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0"
    >
      <Card
        padding="lg"
        className="h-full flex flex-col items-center justify-between text-center group hover:border-[#EE1C25] transition-colors duration-200"
        onClick={onClick}
      >
        <div className="w-full space-y-4">
          {/* Hanzi: Dominant, Serif, Huge */}
          <div className="font-serif text-6xl md:text-7xl font-bold text-black pt-4">
            {word.character}
          </div>
          
          <div className="space-y-1">
            <div className="text-xl text-stone-500 font-medium font-mono">{word.pinyin}</div>
            <div className="text-lg font-bold uppercase tracking-wide">
              {word.translation}
            </div>
          </div>
        </div>

        {/* Example Sentence Section */}
        <div className="w-full mt-6 pt-6 border-t border-black/10 text-left">
          <div className="bg-stone-50 p-4 border border-black/5 rounded-sm space-y-2">
             <p className="text-lg font-serif font-medium text-black">{word.example_sentence.chinese}</p>
             <p className="text-xs font-mono text-stone-500 uppercase tracking-widest">{word.example_sentence.pinyin}</p>
             <p className="text-sm italic text-stone-700 leading-relaxed font-serif">{word.example_sentence.english}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if word.id changes
  return prevProps.word.id === nextProps.word.id;
});

export default VocabCard;


