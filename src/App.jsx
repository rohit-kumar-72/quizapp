import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';

const quizData = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Earth", "Mars", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    answer: "H2O",
  },
  {
    question: "In which year did World War II end?",
    options: ["1939", "1942", "1945", "1950"],
    answer: "1945",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gray-950 p-4">
      <h1 className="text-3xl font-bold mb-6">Quiz App</h1>
      {!showResult ? (
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg text-black">
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            handleAnswer={handleAnswer}
            selectedOption={selectedOption}
            isCorrect={isCorrect}
          />
          <div className="mt-6 flex justify-between">
            <div>
              {currentQuestion + 1}/{quizData.length}
            </div>
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {currentQuestion == quizData.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <Result score={score} total={quizData.length} />
      )}
    </div>
  );
}

export default App;
