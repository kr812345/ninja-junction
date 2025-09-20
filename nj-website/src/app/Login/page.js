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
        <main className="bg-[var(--dark)] text-[var(--light)]">
            <section className="flex items-center justify-center min-h-[100vh] px-4">
                {/* <Image className='fixed -z-10 -rotate-[28deg] top-44 left-170 h-[650px] w-[500px]' src={'./login-graphic.svg'} alt='' width={120} height={120}/> */}
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className='fixed -z-100 not-sm:top-5 not-sm:left-54 top-[17%] left-[53%] bg-primary/40 not-sm:h-100 not-sm:w-90 h-80 w-80 rounded-full '></motion.div>

                <motion.div 
                    initial={{opacity: 0, y:-10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="border border-primary bg-primary/10 backdrop-blur-md text-black p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl text-primary font-bold mb-6 text-center gradient-text">Login</h2>
                    <motion.form 
                        initial={{opacity: 0, y:-10}}
                        animate={{opacity: 1, y: 0}}
                        onSubmit={handleSubmit} 
                        className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-1 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-2 ring ring-primary/40 rounded-md input-focus focus:outline-primary"
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
                                className="w-full p-2 ring ring-primary/40 rounded-md input-focus focus:outline-primary"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <Button type="submit" onClick={handleSubmit} className="w-full h-10 mt-4 bg-primary hover:shadow-md hover:scale-101">
                            Login
                        </Button>
                        <p className="text-center text-gray-600 mt-4">
                            Don't have an account?{' '}
                            <Link href="/Signup" className="text-primary hover:text-cyan-600">
                                Sign up
                            </Link>
                        </p>
                    </motion.form>
                </motion.div>
            </section>
            {/* <Toaster position='top-center' reverseOrder={false}/> */}
        </main>
    );
}
