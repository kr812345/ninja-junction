'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Button from '@/Components/Button';
import { validateSignupForm } from '@/Components/utils/auth';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;
        const validation = validateSignupForm(username, email, password, confirmPassword);
        
        if (!validation.isValid) {
            setError(validation.message);
            return;
        }

        // TODO: Implement signup logic
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    return (
        <main className="bg text-[var(--light)]">
            <Navbar />
            <section className="flex items-center justify-center min-h-[100vh] px-4">
                <div className="bg-[var(--light)] p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block mb-1 font-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                className="w-full p-2 border rounded-lg input-focus"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-semibold">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-2 border rounded-lg input-focus"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1 font-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full p-2 border rounded-lg input-focus"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                className="w-full p-2 border rounded-lg input-focus"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                        <p className="text-center text-gray-600 mt-4">
                            Already have an account?{' '}
                            <Link href="/Login" className="text-indigo-600 hover:text-indigo-500">
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
