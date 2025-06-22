import React, { useState, useEffect } from 'react';

const Progress = () => {
  const [progressData, setProgressData] = useState({
    totalQuizzes: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    averageScore: 0,
    performanceByCategory: [],
    recentQuizzes: []
  });

  useEffect(() => {
    // Get real data from localStorage
    const leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
    
    if (leaderboardData.length === 0) {
      return;
    }

    // Calculate overall statistics
    const totalQuizzes = leaderboardData.length;
    const totalQuestions = leaderboardData.reduce((sum, quiz) => {
      // Estimate total questions based on category (assuming 10 questions per quiz)
      return sum + 10;
    }, 0);
    const totalCorrect = leaderboardData.reduce((sum, quiz) => sum + quiz.score, 0);
    const averageScore = Math.round((totalCorrect / totalQuestions) * 100);

    // Calculate performance by category
    const categoryStats = {};
    leaderboardData.forEach(quiz => {
      if (!categoryStats[quiz.category]) {
        categoryStats[quiz.category] = {
          quizzes: 0,
          totalScore: 0,
          totalQuestions: 0
        };
      }
      categoryStats[quiz.category].quizzes += 1;
      categoryStats[quiz.category].totalScore += quiz.score;
      categoryStats[quiz.category].totalQuestions += 10; // Assuming 10 questions per quiz
    });

    const performanceByCategory = Object.entries(categoryStats).map(([category, stats]) => ({
      category,
      quizzesTaken: stats.quizzes,
      averageScore: Math.round((stats.totalScore / stats.totalQuestions) * 100),
      color: getCategoryColor(category)
    }));

    // Get recent quizzes (last 5)
    const recentQuizzes = leaderboardData
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5)
      .map(quiz => ({
        id: quiz.date,
        category: quiz.category,
        score: quiz.score,
        totalQuestions: 10, // Assuming 10 questions per quiz
        date: new Date(quiz.date).toLocaleDateString()
      }));

    setProgressData({
      totalQuizzes,
      totalQuestions,
      totalCorrect,
      averageScore,
      performanceByCategory,
      recentQuizzes
    });
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      'JavaScript': 'bg-yellow-500',
      'React': 'bg-blue-500',
      'Python': 'bg-green-500',
      'HTML & CSS': 'bg-orange-500',
      'Data Structures': 'bg-purple-500',
      'Web Development': 'bg-indigo-500',
      'Random Mix': 'bg-pink-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  // If no data exists, show a message
  if (progressData.totalQuizzes === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
              My Progress
            </h1>
            <p className="text-xl text-gray-300">
              No quiz data found. Take your first quiz to see your progress!
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 border border-white/20 text-center">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-white mb-4">Start Your Quiz Journey</h2>
            <p className="text-gray-300 mb-6">
              Take quizzes to track your learning progress and see detailed statistics about your performance.
            </p>
            <a 
              href="/categories" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-200 shadow-lg"
            >
              Take Your First Quiz
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            My Progress
          </h1>
          <p className="text-xl text-gray-300">
            Here's your quiz performance based on {progressData.totalQuizzes} completed quizzes!
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-center space-x-4">
            <div className="text-3xl">📝</div>
            <div>
              <p className="text-gray-300 text-sm">Quizzes Taken</p>
              <p className="text-white text-2xl font-bold">{progressData.totalQuizzes}</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-center space-x-4">
            <div className="text-3xl">❓</div>
            <div>
              <p className="text-gray-300 text-sm">Total Questions</p>
              <p className="text-white text-2xl font-bold">{progressData.totalQuestions}</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-center space-x-4">
            <div className="text-3xl">✅</div>
            <div>
              <p className="text-gray-300 text-sm">Correct Answers</p>
              <p className="text-white text-2xl font-bold">{progressData.totalCorrect}</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-center space-x-4">
            <div className="text-3xl">🎯</div>
            <div>
              <p className="text-gray-300 text-sm">Average Score</p>
              <p className="text-white text-2xl font-bold">{progressData.averageScore}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance by Category */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Performance by Category</h2>
            {progressData.performanceByCategory.length > 0 ? (
              <div className="space-y-4">
                {progressData.performanceByCategory.map((cat, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-200">{cat.category}</span>
                      <span className="text-sm font-medium text-gray-300">{cat.averageScore}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`${cat.color} h-2.5 rounded-full`} 
                        style={{ width: `${cat.averageScore}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{cat.quizzesTaken} quiz{cat.quizzesTaken !== 1 ? 'es' : ''} taken</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-300 text-center py-8">No category data available</p>
            )}
          </div>

          {/* Recent Quizzes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Quizzes</h2>
            {progressData.recentQuizzes.length > 0 ? (
              <ul className="divide-y divide-white/10">
                {progressData.recentQuizzes.map((quiz, index) => (
                  <li key={index} className="py-3">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-200">{quiz.category}</p>
                      <p className="text-white font-semibold">{quiz.score} / {quiz.totalQuestions}</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{quiz.date}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300 text-center py-8">No recent quizzes</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;