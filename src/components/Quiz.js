import React, { useState } from 'react';

const Quiz = ({ updateScore }) => {
  // Organized questions by category
  const questions = {
    math: [
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correct: '4',
      },
      {
        question: 'What is 5 + 7?',
        options: ['11', '12', '13', '14'],
        correct: '12',
      },
      {
        question: 'What is 10 - 3?',
        options: ['6', '7', '8', '9'],
        correct: '7',
      },
      {
        question: 'What is 6 * 9?',
        options: ['54', '53', '55', '60'],
        correct: '54',
      },
    ],
    geography: [
      {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        correct: 'Paris',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'South Korea', 'Japan', 'Thailand'],
        correct: 'Japan',
      },
      {
        question: 'What is the capital of Japan?',
        options: ['Beijing', 'Seoul', 'Tokyo', 'Osaka'],
        correct: 'Tokyo',
      },
      {
        question: 'Which river is the longest in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        correct: 'Nile',
      },
    ],
  };

  // Flatten the questions for easier handling
  const allQuestions = [
    ...questions.math,
    ...questions.geography,
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(40);  // Initial score
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === allQuestions[currentQuestionIndex].correct) {
      setScore(score + 10);  // Increment score for correct answer
    }
    setSelectedAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer === allQuestions[currentQuestionIndex].correct) {
      setScore(score + 10);
    }
    setQuizFinished(true);
    updateScore(score); // Pass the updated score to the parent component
  };

  return (
    <div>
      {!quizFinished ? (
        <div>
          <h2>{allQuestions[currentQuestionIndex].question}</h2>
          <div>
            {allQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={selectedAnswer === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          {currentQuestionIndex < allQuestions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz Finished</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
