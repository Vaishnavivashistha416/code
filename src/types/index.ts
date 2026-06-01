export interface QuizQuestion {
    question: string;
    options: string[];
    answer: string;
}

export interface QuizState {
    questions: QuizQuestion[];
    currentQuestionIndex: number;
    isQuizStarted: boolean;
}
