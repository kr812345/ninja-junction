'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Button from '@/Components/Button';
import { validateLoginForm } from '@/Components/utils/auth';
import Image from 'next/image';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        const validation = validateLoginForm(email, password);
        
        if (!validation.isValid) {
            setError(validation.message);
            return;
        }

        // TODO: Implement login logic
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
        <main className="bg-[var(--dark)] text-[var(--light)]">
            <section className="flex items-center justify-center min-h-[100vh] px-4">
                <Image className='fixed -z-10 -rotate-[28deg] top-44 left-170 h-[650px] w-[500px]' src={'./login-graphic.svg'} alt='' width={120} height={120}/>
                <div className=" bg-primary/40 backdrop-blur-md text-black p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <Button type="submit" className="w-full h-10 bg-primary">
                            Login
                        </Button>
                        <p className="text-center text-gray-600 mt-4">
                            Don't have an account?{' '}
                            <Link href="/Signup" className="text-primary hover:text-cyan-600">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
