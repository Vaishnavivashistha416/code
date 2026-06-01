import React from 'react';

interface StartQuizButtonProps {
    onStart: () => void;
}

const StartQuizButton: React.FC<StartQuizButtonProps> = ({ onStart }) => {
    return (
        <button onClick={onStart}>
            Start Quiz
        </button>
    );
};

export default StartQuizButton;
