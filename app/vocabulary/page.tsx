"use client";

import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";
import VocabularyGrid from "@/components/organisms/VocabularyGrid";
import { Heading, BodyText } from "@/components/atoms/Typography";
import { useVocabulary } from "@/context/VocabularyContext";

export default function VocabularyPage() {
  const { vocabulary } = useVocabulary();

  return (
    <AnimatedPageWrapper>
      {/* Background: Stone 100 as requested */}
      <main className="min-h-screen bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-6 mb-12 md:mb-16">
            <Heading level={1} className="text-4xl md:text-6xl font-bold text-black">
              Vocabulary List
            </Heading>
            <BodyText size="lg" className="text-stone-600 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
              Total {vocabulary.length} Words • HSK Level 1
            </BodyText>
          </div>

          <VocabularyGrid vocabulary={vocabulary} />
        </div>
      </main>
    </AnimatedPageWrapper>
  );
}
