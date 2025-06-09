import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheet", "Cascading Style Sheet", "Creative Style System", "Computer Style Sheet"],
    answer: "Cascading Style Sheet"
  }
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        {!showResult ? (
          <>
            <h2 className="text-2xl font-bold mb-6">{questions[currentQ].question}</h2>
            <div className="space-y-3">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt}
                  className={`w-full py-2 px-4 rounded-lg text-left transition-all ${
                    selected === opt
                      ? opt === questions[currentQ].answer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleOptionClick(opt)}
                  disabled={selected !== ""}
                >
                  {opt}
                </button>
              ))}
            </div>
            {selected && (
              <button
                onClick={handleNext}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                {currentQ + 1 < questions.length ? "Next" : "Show Result"}
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
            <p className="text-lg mb-6">Your score: {score} / {questions.length}</p>
            <button
              onClick={resetQuiz}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
