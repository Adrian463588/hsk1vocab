export interface VocabularyWord {
  id: number;
  character: string;
  pinyin: string;
  translation: string;
  example_sentence: {
    chinese: string;
    pinyin: string;
    english: string;
  };
  category?: string;
}

export interface VocabularyData {
  vocabulary: VocabularyWord[];
}
