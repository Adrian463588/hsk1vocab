"use client";

import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";
import FlashcardContainer from "@/components/organisms/FlashcardContainer";
import { Heading, BodyText } from "@/components/atoms/Typography";
import { useVocabulary } from "@/context/VocabularyContext";

export default function StudyPage() {
  const { vocabulary } = useVocabulary();

  return (
    <AnimatedPageWrapper>
      <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <Heading level={1} className="text-2xl font-bold uppercase tracking-[0.2em] text-stone-400">
                Focus Mode
              </Heading>
            </div>
            
            <FlashcardContainer vocabulary={vocabulary} />
          </div>
        </div>
      </main>
    </AnimatedPageWrapper>
  );
}
