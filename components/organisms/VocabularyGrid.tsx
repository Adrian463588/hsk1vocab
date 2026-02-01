"use client";

import { VocabularyWord } from "@/types/vocabulary";
import VocabCard from "../molecules/VocabCard";
import SearchBar from "../molecules/SearchBar";
import { useVocabulary } from "@/context/VocabularyContext";
import { BodyText } from "../atoms/Typography";

interface VocabularyGridProps {
  vocabulary: VocabularyWord[];
}

export default function VocabularyGrid({ vocabulary }: VocabularyGridProps) {
  const { searchQuery, setSearchQuery, filteredVocabulary } = useVocabulary();

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Search Bar - CSS hover instead of Framer Motion */}
      <div className="max-w-xl md:max-w-2xl mx-auto px-4 transition-transform duration-200 hover:scale-[1.01]">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by character, pinyin, or translation..."
        />
      </div>

      {/* Results Count */}
      <div className="text-center">
        <BodyText className="text-stone-600 text-base md:text-lg font-mono">
          Showing {filteredVocabulary.length} of {vocabulary.length} words
        </BodyText>
      </div>

      {/* Vocabulary Grid - No stagger animations for better LCP */}
      {filteredVocabulary.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr min-h-[50vh]">
          {filteredVocabulary.map((word) => (
            <div key={word.id}>
              <VocabCard word={word} />
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="bg-white border border-black p-12 text-center shadow-hard animate-fade-in">
            <div className="text-6xl mb-6">🈳</div>
            <h3 className="text-xl font-bold font-serif text-black mb-2">No Matches Found</h3>
            <p className="text-stone-600 mb-6">
              We couldn't find any words matching "{searchQuery}".
            </p>
            <button 
              onClick={() => setSearchQuery("")}
              className="px-6 py-2 bg-black text-white font-bold uppercase tracking-widest hover:bg-stone-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-hard-sm"
            >
              Clear Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

