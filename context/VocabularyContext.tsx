"use client";

import { createContext, useContext, useState, ReactNode, useMemo, useEffect, useRef, useCallback } from "react";
import { VocabularyWord, VocabularyData } from "@/types/vocabulary";
import vocabularyData from "@/data/hsk1-vocabulary.json";

interface VocabularyContextType {
  vocabulary: VocabularyWord[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  debouncedQuery: string;
  filteredVocabulary: VocabularyWord[];
  currentCardIndex: number;
  setCurrentCardIndex: (index: number) => void;
  nextCard: () => void;
  previousCard: () => void;
}

const VocabularyContext = createContext<VocabularyContextType | undefined>(
  undefined
);

// Custom hook for debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [vocabulary] = useState<VocabularyWord[]>(
    (vocabularyData as VocabularyData).vocabulary
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Debounce search query by 300ms to prevent lag
  const debouncedQuery = useDebounce(searchQuery, 300);

  // Helper: Normalize string (lower case, trim, remove accents/diacritics)
  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  // Memoize filtered vocabulary - only recalculates when debouncedQuery or vocabulary changes
  const filteredVocabulary = useMemo(() => {
    if (debouncedQuery.trim() === "") {
      return vocabulary;
    }
    
    // Normalize query: remove accents to allow "ni hao" to find "nǐ hǎo"
    const query = normalizeString(debouncedQuery);
    
    return vocabulary.filter((word) => {
      // Normalize all fields for comparison
      const normCharacter = normalizeString(word.character);
      const normPinyin = normalizeString(word.pinyin);
      const normTranslation = normalizeString(word.translation);
      const normCategory = word.category ? normalizeString(word.category) : "";
      
      // Strict multi-field match check
      const matchesCharacter = normCharacter.includes(query);
      const matchesPinyin = normPinyin.includes(query);
      const matchesTranslation = normTranslation.includes(query);
      const matchesCategory = normCategory.includes(query);
      
      // Also check raw Pinyin in case user types tone marks explicitly (e.g. "nǐ")
      const matchesRawPinyin = word.pinyin.toLowerCase().includes(debouncedQuery.toLowerCase().trim());
      
      return matchesCharacter || matchesPinyin || matchesTranslation || matchesCategory || matchesRawPinyin;
    });
  }, [debouncedQuery, vocabulary]);

  const nextCard = useCallback(() => {
    setCurrentCardIndex((prev) =>
      prev < vocabulary.length - 1 ? prev + 1 : prev
    );
  }, [vocabulary.length]);

  const previousCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const contextValue = useMemo(() => ({
    vocabulary,
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    filteredVocabulary,
    currentCardIndex,
    setCurrentCardIndex,
    nextCard,
    previousCard,
  }), [vocabulary, searchQuery, debouncedQuery, filteredVocabulary, currentCardIndex, nextCard, previousCard]);

  return (
    <VocabularyContext.Provider value={contextValue}>
      {children}
    </VocabularyContext.Provider>
  );
}

export function useVocabulary() {
  const context = useContext(VocabularyContext);
  if (context === undefined) {
    throw new Error("useVocabulary must be used within a VocabularyProvider");
  }
  return context;
}

