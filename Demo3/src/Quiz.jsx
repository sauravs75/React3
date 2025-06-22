import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getQuestionsByCategory, getAllQuestions, getRandomQuestions } from './data/questions';
import { dataService } from './services/dataService';
import { authService } from './services/authService';

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showCategorySelection, setShowCategorySelection] = useState(true);
  const [userName, setUserName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [categoryToStart, setCategoryToStart] = useState(null);

  // Check authentication on component mount
  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/login', { state: { from: '/Quiz' } });
      return;
    }
  }, [navigate]);

  // If not authenticated, don't render anything
  if (!authService.isAuthenticated()) {
    return null;
  }

  const categories = [
    { name: "JavaScript", icon: "💻", color: "bg-gradient-to-br from-yellow-400 to-orange-500" },
    { name: "React", icon: "⚛️", color: "bg-gradient-to-br from-blue-400 to-cyan-500" },
    { name: "HTML & CSS", icon: "🎨", color: "bg-gradient-to-br from-orange-400 to-red-500" },
    { name: "Python", icon: "🐍", color: "bg-gradient-to-br from-green-400 to-emerald-500" },
    { name: "Data Structures", icon: "📊", color: "bg-gradient-to-br from-purple-400 to-pink-500" },
    { name: "Web Development", icon: "🌐", color: "bg-gradient-to-br from-indigo-400 to-blue-500" },
    { name: "Random Mix", icon: "🎲", color: "bg-gradient-to-br from-gray-400 to-slate-500" }
  ];

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      handleCategorySelection(location.state.selectedCategory);
    }
  }, [location.state]);

  const handleCategorySelection = (category) => {
    setCategoryToStart(category);
    setShowNamePrompt(true);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() && categoryToStart) {
      startQuiz(categoryToStart);
      setShowNamePrompt(false);
    }
  };

  const startQuiz = (category) => {
    let quizQuestions;
    if (category === "Random Mix") {
      quizQuestions = getRandomQuestions(10);
    } else {
      quizQuestions = getQuestionsByCategory(category);
    }
    
    setQuestions(quizQuestions);
    setSelectedCategory(category);
    setShowCategorySelection(false);
    setCurrentQ(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

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
      saveScore();
    }
  };

  const saveScore = () => {
    const quizData = {
      name: userName,
      score: score,
      category: selectedCategory,
      totalQuestions: questions.length,
      percentage: Math.round((score / questions.length) * 100)
    };
    
    const success = dataService.saveQuizResult(quizData);
    
    if (success) {
      console.log('Quiz result saved successfully');
    } else {
      console.error('Failed to save quiz result');
    }
  };
  
  const resetQuiz = () => {
    setShowCategorySelection(true);
    setQuestions([]);
    setSelectedCategory("");
    setCurrentQ(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
    setUserName('');
  };

  const goBackToCategories = () => {
    navigate('/categories');
  };

  if (showNamePrompt) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Enter Your Name</h2>
          <p className="text-gray-300 mb-6 text-center">Please enter your name to appear on the leaderboard.</p>
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-white/20 text-white placeholder-gray-400 border border-white/30 rounded-lg py-3 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg transition-all duration-200 shadow-lg"
            >
              Start Quiz
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (showCategorySelection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-4xl border border-white/20">
          <h2 className="text-5xl font-bold mb-6 text-center text-white">Choose a Quiz Category</h2>
          <p className="text-gray-200 mb-8 text-center text-lg">Select a category to start your quiz journey!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategorySelection(category.name)}
                className={`${category.color} hover:scale-105 text-white p-6 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-2xl border border-white/20`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm opacity-90 mt-2">
                  {category.name === "Random Mix" 
                    ? "10 random questions from all categories"
                    : `${getQuestionsByCategory(category.name).length} questions`
                  }
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-xl text-center border border-white/20">
          <h2 className="text-2xl font-bold mb-4 text-white">Loading Quiz...</h2>
          <p className="text-gray-200">Please wait while we prepare your quiz.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-xl border border-white/20">
        {!showResult ? (
          <>
            {/* Quiz Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-cyan-300">{selectedCategory}</h3>
                <span className="text-sm text-gray-300">
                  Question {currentQ + 1} of {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold mb-6 text-white">{questions[currentQ].question}</h2>
            
            {/* Options */}
            <div className="space-y-3">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt}
                  className={`w-full py-3 px-4 rounded-lg text-left transition-all ${
                    selected === opt
                      ? opt === questions[currentQ].answer
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/20"
                  }`}
                  onClick={() => handleOptionClick(opt)}
                  disabled={selected !== ""}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {selected && (
              <div className={`mt-4 p-3 rounded-lg ${
                selected === questions[currentQ].answer 
                  ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}>
                {selected === questions[currentQ].answer 
                  ? "✅ Correct!" 
                  : `❌ Incorrect. The correct answer is: ${questions[currentQ].answer}`
                }
              </div>
            )}

            {/* Navigation */}
            {selected && (
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-200 shadow-lg"
                >
                  {currentQ + 1 < questions.length ? "Next Question" : "Show Results"}
                </button>
                <button
                  onClick={goBackToCategories}
                  className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Back to Categories
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Quiz Finished!</h2>
            <div className="mb-6 bg-white/10 rounded-lg p-6 border border-white/20">
              <p className="text-lg mb-2 text-gray-300">Category: <span className="font-semibold text-cyan-300">{selectedCategory}</span></p>
              <p className="text-lg mb-4 text-gray-300">Your score: <span className="font-bold text-3xl text-white">{score}</span> / <span className="font-bold text-3xl text-white">{questions.length}</span></p>
              <p className="text-lg text-gray-300">Percentage: <span className="font-bold text-3xl text-white">{Math.round((score / questions.length) * 100)}%</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-6 rounded-lg transition-all duration-200 shadow-lg"
              >
                Try Another Quiz
              </button>
              <button
                onClick={() => navigate('/leaderboard')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-200 shadow-lg"
              >
                View Leaderboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz; 