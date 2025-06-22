import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { authService } from '../services/authService';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication first
    if (!authService.isAuthenticated()) {
      navigate('/login', { state: { from: '/leaderboard' } });
      return;
    }
    
    loadLeaderboardData();
  }, [navigate]);

  // If not authenticated, don't render anything
  if (!authService.isAuthenticated()) {
    return null;
  }

  const loadLeaderboardData = () => {
    const storedScores = dataService.getQuizResults();
    const sortedScores = storedScores.sort((a, b) => b.score - a.score);
    
    const rankedScores = sortedScores.map((score, index) => ({
      ...score,
      rank: index + 1,
    }));

    setLeaderboardData(rankedScores);
  };

  const clearLeaderboard = () => {
    if (window.confirm('Are you sure you want to clear the leaderboard? This action cannot be undone.')) {
      const success = dataService.clearAllData();
      if (success) {
        setLeaderboardData([]);
        alert('Leaderboard cleared successfully!');
      } else {
        alert('Failed to clear leaderboard.');
      }
    }
  };

  const topThree = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-300';
      case 3: return 'text-yellow-600';
      default: return 'text-gray-400';
    }
  };

  const getPodiumHeight = (rank) => {
    switch (rank) {
      case 1: return 'h-48';
      case 2: return 'h-40';
      case 3: return 'h-32';
      default: return 'h-24';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            Leaderboard
          </h1>
          <p className="text-xl text-gray-300">
            See where you stand among the best Quiz Masters!
          </p>
        </div>

        {/* Podium for Top 3 */}
        {topThree.length > 0 && (
          <div className="flex justify-center items-end gap-4 md:gap-8 mb-16">
            {topThree.map((player, index) => (
              <div key={player.rank} className={`text-center flex flex-col items-center ${player.rank === 2 ? 'order-first' : ''} ${player.rank === 1 ? 'md:-translate-y-8' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
                <p className={`${getRankColor(player.rank)} text-lg`}>Score: {player.score}</p>
                <div
                  className={`${getPodiumHeight(player.rank)} w-32 md:w-40 rounded-t-lg bg-white/10 backdrop-blur-lg flex items-center justify-center border-t-4 border-yellow-400`}
                >
                  <span className={`text-6xl font-bold ${getRankColor(player.rank)}`}>
                    {player.rank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Leaderboard Table for the Rest */}
        {leaderboardData.length > 0 ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
            <ul className="divide-y divide-white/10">
              {rest.map((player) => (
                <li key={player.rank} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-300 w-10 text-center">{player.rank}</span>
                    <span className="ml-4 text-white text-lg font-medium">{player.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-300 text-lg font-semibold">{player.score}</span>
                    <span className="ml-4 text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">{player.category}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center text-gray-300 text-lg">
            The leaderboard is empty. Be the first to take a quiz!
          </div>
        )}
        
        {/* Clear Leaderboard Button */}
        <div className="text-center mt-8">
          <button 
            onClick={clearLeaderboard} 
            className="bg-red-500/50 hover:bg-red-500/70 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 border border-red-500/80"
          >
            Clear Leaderboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default Leaderboard; 