import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const Categories = () => {
    const navigate = useNavigate();

    // Check authentication on component mount
    React.useEffect(() => {
        if (!authService.isAuthenticated()) {
            navigate('/login', { state: { from: '/categories' } });
            return;
        }
    }, [navigate]);

    // If not authenticated, don't render anything
    if (!authService.isAuthenticated()) {
        return null;
    }

    const categories = [
        {
            id: 1,
            name: "JavaScript",
            description: "Test your knowledge of JavaScript fundamentals, ES6+ features, and modern JavaScript concepts.",
            icon: "💻",
            questionCount: 8,
            difficulty: "Beginner to Advanced",
            color: "bg-gradient-to-br from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            name: "React",
            description: "Master React concepts including components, hooks, state management, and best practices.",
            icon: "⚛️",
            questionCount: 8,
            difficulty: "Intermediate to Advanced",
            color: "bg-gradient-to-br from-blue-400 to-cyan-500"
        },
        {
            id: 3,
            name: "HTML & CSS",
            description: "Learn HTML structure, CSS styling, responsive design, and modern CSS techniques.",
            icon: "🎨",
            questionCount: 8,
            difficulty: "Beginner to Intermediate",
            color: "bg-gradient-to-br from-orange-400 to-red-500"
        },
        {
            id: 4,
            name: "Python",
            description: "Explore Python programming, data structures, algorithms, and Python frameworks.",
            icon: "🐍",
            questionCount: 8,
            difficulty: "Beginner to Advanced",
            color: "bg-gradient-to-br from-green-400 to-emerald-500"
        },
        {
            id: 5,
            name: "Data Structures",
            description: "Understand fundamental data structures like arrays, linked lists, trees, and graphs.",
            icon: "📊",
            questionCount: 8,
            difficulty: "Intermediate to Advanced",
            color: "bg-gradient-to-br from-purple-400 to-pink-500"
        },
        {
            id: 6,
            name: "Web Development",
            description: "Comprehensive web development topics including APIs, databases, and deployment.",
            icon: "🌐",
            questionCount: 8,
            difficulty: "All Levels",
            color: "bg-gradient-to-br from-indigo-400 to-blue-500"
        }
    ];

    const startQuiz = (categoryName) => {
        navigate('/Quiz', { state: { selectedCategory: categoryName } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section - Centered */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Choose Your Quiz Categories
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Select from our comprehensive collection of quiz categories. Each category is designed to test and improve your knowledge in specific areas of programming and web development.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:scale-105">
                            {/* Category Header */}
                            <div className={`${category.color} p-6 text-white`}>
                                <div className="flex items-center justify-between">
                                    <div className="text-4xl">{category.icon}</div>
                                    <div className="text-right">
                                        <div className="text-sm opacity-90">{category.questionCount} Questions</div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mt-4">{category.name}</h3>
                            </div>

                            {/* Category Content */}
                            <div className="p-6">
                                <p className="text-gray-200 mb-4">
                                    {category.description}
                                </p>
                                
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm text-gray-300">
                                        Difficulty: <span className="font-semibold text-white">{category.difficulty}</span>
                                    </span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <button 
                                        onClick={() => startQuiz(category.name)}
                                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-lg"
                                    >
                                        Start Quiz
                                    </button>
                                    <button className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action - Centered */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl border border-white/20">
                        <h2 className="text-3xl font-bold mb-4">Ready to Challenge Yourself?</h2>
                        <p className="text-xl mb-6 opacity-90">
                            Start with any category and track your progress as you improve your skills.
                        </p>
                        <button 
                            onClick={() => navigate('/Quiz')}
                            className="bg-white text-cyan-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                        >
                            Take Your First Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories; 