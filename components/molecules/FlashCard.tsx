"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../atoms/Card";
import { VocabularyWord } from "@/types/vocabulary";

interface FlashCardProps {
  word: VocabularyWord;
}

export default function FlashCard({ word }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-xl h-[500px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card
            padding="2xl"
            className="h-full flex flex-col items-center justify-center !bg-[#fdfbf7] shadow-hard"
          >
            <div className="text-center space-y-8">
              <div className="text-[8rem] font-serif font-bold text-black leading-none">
                {word.character}
              </div>
              <div className="inline-block px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest text-black bg-white">
                Click to Reveal
              </div>
            </div>
          </Card>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card
            padding="2xl"
            className="h-full flex flex-col items-center justify-center !bg-stone-50 shadow-hard"
          >
            <div className="text-center space-y-6 w-full">
               <div className="text-5xl font-serif font-bold text-black border-b border-black pb-4 mb-4">
                {word.character}
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-mono text-stone-600">
                  {word.pinyin}
                </div>
                <div className="text-3xl font-bold uppercase tracking-wide">
                  {word.translation}
                </div>
              </div>

              <div className="pt-6 mt-2 border-t border-black/10 w-full text-left bg-white p-4 items-center rounded-sm border border-black/5">
                <p className="text-xl font-serif mb-1">{word.example_sentence.chinese}</p>
                <p className="text-sm font-mono text-stone-500 mb-1">{word.example_sentence.pinyin}</p>
                <p className="text-sm text-stone-700 italic">{word.example_sentence.english}</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
