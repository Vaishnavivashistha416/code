import { useState } from 'react';

const useQuiz = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const startQuiz = () => {
        setIsQuizStarted(true);
        setCurrentQuestionIndex(0);
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const resetQuiz = () => {
        setIsQuizStarted(false);
        setCurrentQuestionIndex(0);
    };

    return {
        isQuizStarted,
        currentQuestionIndex,
        startQuiz,
        nextQuestion,
        resetQuiz,
    };
};

export default useQuiz;
