'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/Components/Button';
import { validateLoginForm } from '@/Components/utils/auth';
import { motion } from 'motion/react';
import Image from 'next/image';
import AuthService from '@/Services/auth';
import toast, { Toaster } from 'react-hot-toast';


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
        // console.log('Form submitted:', formData);
        // const res = AuthService.login(formData.email, formData.password);
        // console.log(res);
        toast.success('Coming Soon.')
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
        <main className="min-h-screen bg-[var(--color-background)] relative overflow-hidden flex items-center justify-center">
            {/* Premium crystal grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #4F46E5 1px, transparent 1px),
                            linear-gradient(to bottom, #4F46E5 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-indigo-500/[0.12] rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/[0.10] rounded-full blur-[100px]" />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 40%, var(--color-background) 80%)',
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>

            <section className="relative z-10 w-full px-4 flex justify-center">
                <motion.div 
                    initial={{opacity: 0, y:-10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-black/5 w-full max-w-md">
                    
                    <h2 className="bold-heading text-4xl mb-8 text-center">LOGIN</h2>
                    
                    <motion.form 
                        initial={{opacity: 0, y:-10}}
                        animate={{opacity: 1, y: 0}}
                        onSubmit={handleSubmit} 
                        className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none text-[var(--color-text-primary)]"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none text-[var(--color-text-primary)]"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                            />
                        </div>
                        
                        {error && (
                            <p className="text-red-500 text-sm font-medium">{error}</p>
                        )}
                        
                        <button 
                            type="submit" 
                            onClick={handleSubmit} 
                            className="w-full py-4 px-8 mt-2 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[var(--color-primary-dark)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 outline-none"
                        >
                            Log In
                        </button>
                        
                        <p className="text-center text-[var(--color-text-secondary)] mt-6 text-sm">
                            Don't have an account?{' '}
                            <Link href="/Signup" className="text-[var(--color-primary)] font-bold hover:underline transition-all">
                                Sign up
                            </Link>
                        </p>
                    </motion.form>
                </motion.div>
            </section>
        </main>
    );
}
