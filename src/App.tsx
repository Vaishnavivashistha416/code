import React, { useState } from 'react';
import StartQuizButton from './components/StartQuizButton';
import QuizPage from './pages/QuizPage';

const App: React.FC = () => {
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
    };

    return (
        <div className="App">
            {!quizStarted ? (
                <StartQuizButton onStart={startQuiz} />
            ) : (
                <QuizPage />
            )}
        </div>
    );
};

export default App;