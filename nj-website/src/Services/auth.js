
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class AuthService {
    constructor() {
        this.token = null;
        this.user = null;
    }

    async login(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            this.token = data.token;
            this.user = data.user;
            
            // Store in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            return data;
        } catch (error) {
            throw new Error(error.message || 'Login failed');
        }
    }

    async signup(username, email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message || 'Signup failed');
        }
    }

    logout() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    isAuthenticated() {
        return !!this.getToken();
    }

    getToken() {
        if (typeof window !== 'undefined') {
            return this.token || localStorage.getItem('token');
        }
        return null;
    }

    getUser() {
        if (typeof window !== 'undefined') {
            return this.user || JSON.parse(localStorage.getItem('user') || 'null');
        }
        return null;
    }

    async refreshToken() {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`,
                },
            });

            if (!response.ok) {
                throw new Error('Token refresh failed');
            }

            const data = await response.json();
            this.token = data.token;
            localStorage.setItem('token', data.token);

            return data;
        } catch (error) {
            this.logout();
            throw new Error(error.message || 'Token refresh failed');
        }
    }
}

export default new AuthService();
