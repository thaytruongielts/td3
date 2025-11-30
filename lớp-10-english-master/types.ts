export interface Exercise {
  id: string;
  question: string; // The sentence with a placeholder
  correctAnswers: string[]; // Allow for variations, though usually strictly one from the examples
}

export interface VocabularyItem {
  id: number;
  word: string;
  meaning: string;
  icon: string;
  examples: {
    phrase: string;
    sentence: string;
  }[];
  exercises: Exercise[];
}

export interface UserProgress {
  [exerciseId: string]: {
    isCorrect: boolean;
    attempted: boolean;
    userInput: string;
  };
}