import React, { useState } from 'react';
import '../styles/Category.css';

const Categories = () => {
  const [categories] = useState([
    {
      name: 'Maths',
      questions: [
        { question: 'What is 2 + 2?', options: ['3', '4', '5'], correct: '4' },
        { question: 'What is 5 * 3?', options: ['15', '18', '20'], correct: '15' },
        { question: 'What is 9 / 3?', options: ['2', '3', '4'], correct: '3' }
      ]
    },
    {
      name: 'Physics',
      questions: [
        { question: 'What is Newton\'s second law?', options: ['F = ma', 'E = mc^2', 'F = mv'], correct: 'F = ma' },
        { question: 'What is the formula for energy?', options: ['E = mc^2', 'E = mv', 'E = mgh'], correct: 'E = mc^2' },
        { question: 'What is the speed of light?', options: ['300,000 km/s', '150,000 km/s', '120,000 km/s'], correct: '300,000 km/s' }
      ]
    },
    {
      name: 'General Knowledge',
      questions: [
        { question: 'Who is the president of the USA?', options: ['Joe Biden', 'Donald Trump', 'Barack Obama'], correct: 'Joe Biden' },
        { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], correct: 'Paris' },
        { question: 'What year did WW2 end?', options: ['1945', '1939', '1950'], correct: '1945' }
      ]
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerClick = (answer) => {
    // Make sure the answer array is updated correctly.
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = { answer };
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    const updatedAnswers = userAnswers.map((userAnswer, index) => {
      const question = selectedCategory.questions[index];
      if (userAnswer && userAnswer.answer === question.correct) {
        calculatedScore++;
        return { ...userAnswer, correct: true };
      }
      return { ...userAnswer, correct: false };
    });

    setUserAnswers(updatedAnswers);
    setScore(calculatedScore);
    setIsQuizCompleted(true);
  };

  return (
    <div className="categories-container">
      <h2>Categories</h2>

      {/* Categories Cards */}
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => handleCategoryClick(category)}>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Display Questions if Category is Selected */}
      {selectedCategory && !isQuizCompleted && (
        <div className="questions-container">
          <h3>{selectedCategory.name} Questions</h3>
          <div className="question-card">
            <p>{selectedCategory.questions[currentQuestionIndex].question}</p>
            <div className="options">
              {selectedCategory.questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={
                    userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].answer === option
                      ? 'selected'
                      : ''
                  }
                >
                  {option}
                </button>
              ))}
            </div>
            <div className='color'>
            {currentQuestionIndex < selectedCategory.questions.length - 1 ? (
              <button onClick={handleNextQuestion}>Next Question</button>
            ) : (
              <button onClick={handleSubmitQuiz}>Submit & Validate</button>
            )}
            </div>
          </div>
        </div>
      )}

      {/* Display Score and Correct Answers after Submit */}
      {isQuizCompleted && (
        <div className="quiz-summary">
          <h3>Quiz Completed!</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#4CAF50' }}>
            Your score: {score} / {selectedCategory.questions.length}
          </p>
          <div className="answers-summary">
            {selectedCategory.questions.map((q, index) => (
              <div key={index}>
                <p>{q.question}</p>
                <p>Your answer: {userAnswers[index]?.answer} </p>
                <p
                  style={{
                    color: userAnswers[index]?.correct ? 'green' : 'red',
                    fontWeight: 'bold',
                  }}
                >
                  {userAnswers[index]?.correct ? 'Correct' : 'Incorrect'}
                </p>
                {userAnswers[index]?.correct === false && (
                  <p style={{ fontWeight: 'bold' }}>Correct answer: {q.correct}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
