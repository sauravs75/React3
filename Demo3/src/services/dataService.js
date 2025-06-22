// Data Service for handling all localStorage operations
export const dataService = {
  // Save quiz result
  saveQuizResult: (quizData) => {
    try {
      const existingScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
      
      // Add unique ID and timestamp
      const newScore = {
        id: Date.now().toString(),
        ...quizData,
        date: new Date().toISOString(),
        timestamp: Date.now()
      };
      
      existingScores.push(newScore);
      localStorage.setItem('leaderboard', JSON.stringify(existingScores));
      
      // Also save to user's personal history
      dataService.saveToUserHistory(newScore);
      
      return true;
    } catch (error) {
      console.error('Error saving quiz result:', error);
      return false;
    }
  },

  // Get all quiz results
  getQuizResults: () => {
    try {
      return JSON.parse(localStorage.getItem('leaderboard')) || [];
    } catch (error) {
      console.error('Error getting quiz results:', error);
      return [];
    }
  },

  // Save to user's personal history
  saveToUserHistory: (quizData) => {
    try {
      const userHistory = JSON.parse(localStorage.getItem('userHistory')) || [];
      userHistory.push(quizData);
      
      // Keep only last 50 entries to prevent localStorage from getting too large
      if (userHistory.length > 50) {
        userHistory.splice(0, userHistory.length - 50);
      }
      
      localStorage.setItem('userHistory', JSON.stringify(userHistory));
    } catch (error) {
      console.error('Error saving to user history:', error);
    }
  },

  // Get user's personal history
  getUserHistory: () => {
    try {
      return JSON.parse(localStorage.getItem('userHistory')) || [];
    } catch (error) {
      console.error('Error getting user history:', error);
      return [];
    }
  },

  // Save user preferences
  saveUserPreferences: (preferences) => {
    try {
      localStorage.setItem('userPreferences', JSON.stringify(preferences));
      return true;
    } catch (error) {
      console.error('Error saving user preferences:', error);
      return false;
    }
  },

  // Get user preferences
  getUserPreferences: () => {
    try {
      return JSON.parse(localStorage.getItem('userPreferences')) || {};
    } catch (error) {
      console.error('Error getting user preferences:', error);
      return {};
    }
  },

  // Save user profile
  saveUserProfile: (profile) => {
    try {
      localStorage.setItem('userProfile', JSON.stringify(profile));
      return true;
    } catch (error) {
      console.error('Error saving user profile:', error);
      return false;
    }
  },

  // Get user profile
  getUserProfile: () => {
    try {
      return JSON.parse(localStorage.getItem('userProfile')) || null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  },

  // Clear all data (for testing or reset)
  clearAllData: () => {
    try {
      localStorage.removeItem('leaderboard');
      localStorage.removeItem('userHistory');
      localStorage.removeItem('userPreferences');
      localStorage.removeItem('userProfile');
      return true;
    } catch (error) {
      console.error('Error clearing data:', error);
      return false;
    }
  },

  // Export data (for backup)
  exportData: () => {
    try {
      const data = {
        leaderboard: dataService.getQuizResults(),
        userHistory: dataService.getUserHistory(),
        userPreferences: dataService.getUserPreferences(),
        userProfile: dataService.getUserProfile(),
        exportDate: new Date().toISOString()
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `quiz-app-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error exporting data:', error);
      return false;
    }
  },

  // Import data (for restore)
  importData: (jsonData) => {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.leaderboard) {
        localStorage.setItem('leaderboard', JSON.stringify(data.leaderboard));
      }
      if (data.userHistory) {
        localStorage.setItem('userHistory', JSON.stringify(data.userHistory));
      }
      if (data.userPreferences) {
        localStorage.setItem('userPreferences', JSON.stringify(data.userPreferences));
      }
      if (data.userProfile) {
        localStorage.setItem('userProfile', JSON.stringify(data.userProfile));
      }
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
}; 