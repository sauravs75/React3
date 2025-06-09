// Mock user credentials
const MOCK_USER = {
    email: 'test@example.com',
    password: 'password123'
};

// Mock authentication service
export const authService = {
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            // Simulate API delay
            setTimeout(() => {
                if (email === MOCK_USER.email && password === MOCK_USER.password) {
                    // Mock successful login
                    const userData = {
                        email: MOCK_USER.email,
                        name: 'Test User',
                        token: 'mock-jwt-token'
                    };
                    localStorage.setItem('user', JSON.stringify(userData));
                    resolve(userData);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000); // Simulate network delay
        });
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    isAuthenticated: () => {
        return localStorage.getItem('user') !== null;
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
}; 