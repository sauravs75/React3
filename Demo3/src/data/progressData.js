export const progressData = {
  user: {
    name: 'Test User',
  },
  overallStats: {
    quizzesTaken: 12,
    correctAnswers: 85,
    totalQuestions: 120,
    averageScore: 71, // as a percentage
  },
  performanceByCategory: [
    {
      category: 'JavaScript',
      quizzesTaken: 4,
      averageScore: 75,
      color: 'bg-yellow-500',
    },
    {
      category: 'React',
      quizzesTaken: 3,
      averageScore: 65,
      color: 'bg-blue-500',
    },
    {
      category: 'Python',
      quizzesTaken: 2,
      averageScore: 80,
      color: 'bg-green-500',
    },
    {
      category: 'HTML & CSS',
      quizzesTaken: 2,
      averageScore: 70,
      color: 'bg-orange-500',
    },
    {
      category: 'Web Development',
      quizzesTaken: 1,
      averageScore: 90,
      color: 'bg-indigo-500',
    },
  ],
  recentQuizzes: [
    {
      id: 1,
      category: 'JavaScript',
      score: 8,
      totalQuestions: 10,
      date: '2024-07-20',
    },
    {
      id: 2,
      category: 'React',
      score: 6,
      totalQuestions: 8,
      date: '2024-07-19',
    },
    {
      id: 3,
      category: 'Python',
      score: 9,
      totalQuestions: 10,
      date: '2024-07-18',
    },
    {
      id: 4,
      category: 'JavaScript',
      score: 7,
      totalQuestions: 10,
      date: '2024-07-17',
    },
  ],
}; 