export const questionsData = {
    javascript: [
        {
            id: 1,
            question: "What is the correct way to declare a variable in JavaScript?",
            options: ["variable x = 5;", "v x = 5;", "let x = 5;", "x = 5;"],
            answer: "let x = 5;",
            category: "JavaScript",
            difficulty: "Beginner"
        },
        {
            id: 2,
            question: "Which method is used to add an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            answer: "push()",
            category: "JavaScript",
            difficulty: "Beginner"
        },
        {
            id: 3,
            question: "What does the '===' operator check for?",
            options: ["Value equality", "Value and type equality", "Type equality only", "Reference equality"],
            answer: "Value and type equality",
            category: "JavaScript",
            difficulty: "Beginner"
        },
        {
            id: 4,
            question: "What is a closure in JavaScript?",
            options: ["A function that has access to variables in its outer scope", "A way to close browser windows", "A method to end loops", "A type of array"],
            answer: "A function that has access to variables in its outer scope",
            category: "JavaScript",
            difficulty: "Intermediate"
        },
        {
            id: 5,
            question: "What is the output of: console.log(typeof null)?",
            options: ["null", "undefined", "object", "number"],
            answer: "object",
            category: "JavaScript",
            difficulty: "Intermediate"
        },
        {
            id: 6,
            question: "Which ES6 feature allows you to extract values from objects?",
            options: ["Destructuring", "Arrow functions", "Template literals", "Classes"],
            answer: "Destructuring",
            category: "JavaScript",
            difficulty: "Intermediate"
        },
        {
            id: 7,
            question: "What is the purpose of the 'use strict' directive?",
            options: ["To enable strict mode for better error checking", "To make code run faster", "To enable new features", "To disable certain functions"],
            answer: "To enable strict mode for better error checking",
            category: "JavaScript",
            difficulty: "Intermediate"
        },
        {
            id: 8,
            question: "What is the difference between 'let' and 'var'?",
            options: ["let is block-scoped, var is function-scoped", "let is function-scoped, var is block-scoped", "There is no difference", "let is global, var is local"],
            answer: "let is block-scoped, var is function-scoped",
            category: "JavaScript",
            difficulty: "Intermediate"
        }
    ],

    react: [
        {
            id: 9,
            question: "What is React?",
            options: ["A programming language", "A JavaScript library for building user interfaces", "A database", "A web server"],
            answer: "A JavaScript library for building user interfaces",
            category: "React",
            difficulty: "Beginner"
        },
        {
            id: 10,
            question: "What is a component in React?",
            options: ["A function or class that returns JSX", "A database table", "A CSS file", "A JavaScript function"],
            answer: "A function or class that returns JSX",
            category: "React",
            difficulty: "Beginner"
        },
        {
            id: 11,
            question: "What hook is used to manage state in functional components?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            answer: "useState",
            category: "React",
            difficulty: "Beginner"
        },
        {
            id: 12,
            question: "What is the purpose of useEffect hook?",
            options: ["To manage state", "To perform side effects", "To create components", "To handle events"],
            answer: "To perform side effects",
            category: "React",
            difficulty: "Intermediate"
        },
        {
            id: 13,
            question: "What is JSX?",
            options: ["A programming language", "JavaScript XML syntax extension", "A database", "A CSS framework"],
            answer: "JavaScript XML syntax extension",
            category: "React",
            difficulty: "Intermediate"
        },
        {
            id: 14,
            question: "What is the Virtual DOM?",
            options: ["A real DOM element", "A lightweight copy of the real DOM", "A database", "A CSS framework"],
            answer: "A lightweight copy of the real DOM",
            category: "React",
            difficulty: "Intermediate"
        },
        {
            id: 15,
            question: "What is the purpose of React Router?",
            options: ["To manage state", "To handle navigation", "To style components", "To make API calls"],
            answer: "To handle navigation",
            category: "React",
            difficulty: "Intermediate"
        },
        {
            id: 16,
            question: "What is the difference between props and state?",
            options: ["Props are read-only, state can be changed", "State is read-only, props can be changed", "There is no difference", "Props are for styling only"],
            answer: "Props are read-only, state can be changed",
            category: "React",
            difficulty: "Advanced"
        }
    ],

    htmlCss: [
        {
            id: 17,
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
            answer: "Hyper Text Markup Language",
            category: "HTML & CSS",
            difficulty: "Beginner"
        },
        {
            id: 18,
            question: "Which HTML element is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>",
            category: "HTML & CSS",
            difficulty: "Beginner"
        },
        {
            id: 19,
            question: "What does CSS stand for?",
            options: ["Colorful Style Sheet", "Cascading Style Sheet", "Creative Style System", "Computer Style Sheet"],
            answer: "Cascading Style Sheet",
            category: "HTML & CSS",
            difficulty: "Beginner"
        },
        {
            id: 20,
            question: "Which CSS property controls the text size?",
            options: ["font-style", "text-size", "font-size", "text-style"],
            answer: "font-size",
            category: "HTML & CSS",
            difficulty: "Beginner"
        },
        {
            id: 21,
            question: "What is the correct way to write a CSS comment?",
            options: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/", "**This is a comment**"],
            answer: "/*This is a comment*/",
            category: "HTML & CSS",
            difficulty: "Beginner"
        },
        {
            id: 22,
            question: "Which CSS property is used to change the background color?",
            options: ["color", "background-color", "bgcolor", "background"],
            answer: "background-color",
            category: "HTML & CSS",
            difficulty: "Beginner"
        },
        {
            id: 23,
            question: "What is the purpose of the 'display: flex' CSS property?",
            options: ["To make text flexible", "To create a flexible layout", "To change font size", "To add colors"],
            answer: "To create a flexible layout",
            category: "HTML & CSS",
            difficulty: "Intermediate"
        },
        {
            id: 24,
            question: "What is the box model in CSS?",
            options: ["A way to create boxes", "Content, padding, border, and margin", "A type of layout", "A styling technique"],
            answer: "Content, padding, border, and margin",
            category: "HTML & CSS",
            difficulty: "Intermediate"
        }
    ],

    python: [
        {
            id: 25,
            question: "What is Python?",
            options: ["A programming language", "A web browser", "A database", "An operating system"],
            answer: "A programming language",
            category: "Python",
            difficulty: "Beginner"
        },
        {
            id: 26,
            question: "How do you create a variable in Python?",
            options: ["var x = 5", "let x = 5", "x = 5", "variable x = 5"],
            answer: "x = 5",
            category: "Python",
            difficulty: "Beginner"
        },
        {
            id: 27,
            question: "What is the correct way to write a comment in Python?",
            options: ["<!--This is a comment-->", "//This is a comment", "#This is a comment", "/*This is a comment*/"],
            answer: "#This is a comment",
            category: "Python",
            difficulty: "Beginner"
        },
        {
            id: 28,
            question: "Which method is used to add an element to a list?",
            options: ["add()", "append()", "insert()", "push()"],
            answer: "append()",
            category: "Python",
            difficulty: "Beginner"
        },
        {
            id: 29,
            question: "What is a tuple in Python?",
            options: ["A mutable sequence", "An immutable sequence", "A dictionary", "A set"],
            answer: "An immutable sequence",
            category: "Python",
            difficulty: "Intermediate"
        },
        {
            id: 30,
            question: "What is the purpose of the 'def' keyword?",
            options: ["To define a variable", "To define a function", "To define a class", "To define a module"],
            answer: "To define a function",
            category: "Python",
            difficulty: "Intermediate"
        },
        {
            id: 31,
            question: "What is a dictionary in Python?",
            options: ["A list of numbers", "A key-value pair collection", "A string", "A tuple"],
            answer: "A key-value pair collection",
            category: "Python",
            difficulty: "Intermediate"
        },
        {
            id: 32,
            question: "What is the purpose of the 'import' statement?",
            options: ["To create a new file", "To import modules", "To define variables", "To create functions"],
            answer: "To import modules",
            category: "Python",
            difficulty: "Intermediate"
        }
    ],

    dataStructures: [
        {
            id: 33,
            question: "What is an array?",
            options: ["A collection of elements", "A single value", "A function", "A variable"],
            answer: "A collection of elements",
            category: "Data Structures",
            difficulty: "Beginner"
        },
        {
            id: 34,
            question: "What is the time complexity of accessing an element in an array?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            answer: "O(1)",
            category: "Data Structures",
            difficulty: "Intermediate"
        },
        {
            id: 35,
            question: "What is a linked list?",
            options: ["A collection of nodes", "An array", "A tree", "A graph"],
            answer: "A collection of nodes",
            category: "Data Structures",
            difficulty: "Intermediate"
        },
        {
            id: 36,
            question: "What is the main advantage of a linked list over an array?",
            options: ["Faster access", "Dynamic size", "Better memory usage", "Easier to implement"],
            answer: "Dynamic size",
            category: "Data Structures",
            difficulty: "Intermediate"
        },
        {
            id: 37,
            question: "What is a stack?",
            options: ["LIFO data structure", "FIFO data structure", "A tree", "A graph"],
            answer: "LIFO data structure",
            category: "Data Structures",
            difficulty: "Intermediate"
        },
        {
            id: 38,
            question: "What is a queue?",
            options: ["LIFO data structure", "FIFO data structure", "A tree", "A graph"],
            answer: "FIFO data structure",
            category: "Data Structures",
            difficulty: "Intermediate"
        },
        {
            id: 39,
            question: "What is a binary tree?",
            options: ["A tree with two children per node", "A tree with one child per node", "A tree with three children per node", "A linear structure"],
            answer: "A tree with two children per node",
            category: "Data Structures",
            difficulty: "Advanced"
        },
        {
            id: 40,
            question: "What is the time complexity of searching in a binary search tree?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            answer: "O(log n)",
            category: "Data Structures",
            difficulty: "Advanced"
        }
    ],

    webDevelopment: [
        {
            id: 41,
            question: "What is an API?",
            options: ["Application Programming Interface", "A programming language", "A database", "A web server"],
            answer: "Application Programming Interface",
            category: "Web Development",
            difficulty: "Beginner"
        },
        {
            id: 42,
            question: "What is HTTP?",
            options: ["HyperText Transfer Protocol", "A programming language", "A database", "A web browser"],
            answer: "HyperText Transfer Protocol",
            category: "Web Development",
            difficulty: "Beginner"
        },
        {
            id: 43,
            question: "What is a REST API?",
            options: ["Representational State Transfer", "A programming language", "A database", "A web server"],
            answer: "Representational State Transfer",
            category: "Web Development",
            difficulty: "Intermediate"
        },
        {
            id: 44,
            question: "What is JSON?",
            options: ["JavaScript Object Notation", "A programming language", "A database", "A web server"],
            answer: "JavaScript Object Notation",
            category: "Web Development",
            difficulty: "Beginner"
        },
        {
            id: 45,
            question: "What is the purpose of localStorage?",
            options: ["To store data locally in the browser", "To store data on a server", "To create databases", "To handle cookies"],
            answer: "To store data locally in the browser",
            category: "Web Development",
            difficulty: "Intermediate"
        },
        {
            id: 46,
            question: "What is CORS?",
            options: ["Cross-Origin Resource Sharing", "A programming language", "A database", "A web server"],
            answer: "Cross-Origin Resource Sharing",
            category: "Web Development",
            difficulty: "Intermediate"
        },
        {
            id: 47,
            question: "What is the purpose of a CDN?",
            options: ["Content Delivery Network", "A database", "A web server", "A programming language"],
            answer: "Content Delivery Network",
            category: "Web Development",
            difficulty: "Intermediate"
        },
        {
            id: 48,
            question: "What is the difference between GET and POST requests?",
            options: ["GET is for retrieving data, POST is for sending data", "GET is for sending data, POST is for retrieving data", "There is no difference", "GET is faster than POST"],
            answer: "GET is for retrieving data, POST is for sending data",
            category: "Web Development",
            difficulty: "Intermediate"
        }
    ]
};

// Helper function to get questions by category
export const getQuestionsByCategory = (category) => {
    const categoryMap = {
        'JavaScript': 'javascript',
        'React': 'react',
        'HTML & CSS': 'htmlCss',
        'Python': 'python',
        'Data Structures': 'dataStructures',
        'Web Development': 'webDevelopment'
    };
    
    const categoryKey = categoryMap[category];
    return categoryKey ? questionsData[categoryKey] : [];
};

// Helper function to get all questions
export const getAllQuestions = () => {
    return Object.values(questionsData).flat();
};

// Helper function to get random questions
export const getRandomQuestions = (count = 10) => {
    const allQuestions = getAllQuestions();
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}; 