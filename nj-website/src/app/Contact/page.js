'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react';
import contactForm from '@/Services/Contact';
import toast, { Toaster } from 'react-hot-toast';
import GlitchText from '@/Components/GlitchText';
import MagneticButton from '@/Components/MagneticButton';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await contactForm.create(formData);
        toast.success(res?.message);
    };

    const inputClasses = "w-full p-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-all duration-300";

    return (
        <div className="min-h-screen bg-[var(--color-background)] relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            <div className="container mx-auto py-16 px-4 relative pt-24 lg:pt-32 xl:pt-40 sm:pt-20 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white inline-block">
                        <GlitchText>Get In Touch</GlitchText>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4">
                        Ready to collaborate? Establish a secure connection with our team.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Contact Information Cards */}
                    <motion.div className="space-y-6">
                        {/* Email Card - Holographic Style */}
                        <motion.div
                            whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-cyan-500/20 transition-colors" />

                            <h3 className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2">Primary Channel</h3>
                            <div className="text-2xl font-bold text-white mb-1">Email</div>
                            <div className="text-slate-400">team.ninjajunction@protonmail.com</div>

                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                        </motion.div>

                        {/* Status Card */}
                        <motion.div
                            whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                        >
                            <h3 className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2">System Status</h3>
                            <div className="flex items-center space-x-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-white font-semibold">Message Systems Online</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form - Glassmorphic Cyber Style */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 relative">
                            {/* Glowing Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400 rounded-tr-lg" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400 rounded-bl-lg" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400 rounded-br-lg" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-widest pl-1">Identify Yourself</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="> Enter Name"
                                        required
                                    />
                                    {/* Animated underline */}
                                    <div className="h-[1px] w-0 bg-cyan-400 group-focus-within:w-full transition-all duration-500" />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-widest pl-1">Transmission Frequency</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="> Enter Email"
                                        required
                                    />
                                    <div className="h-[1px] w-0 bg-cyan-400 group-focus-within:w-full transition-all duration-500" />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-widest pl-1">Data Payload</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={inputClasses}
                                        placeholder="> Enter Message..."
                                        required
                                    />
                                    <div className="h-[1px] w-0 bg-cyan-400 group-focus-within:w-full transition-all duration-500" />
                                </div>

                                <MagneticButton
                                    type="submit"
                                    className="w-full bg-cyan-500/20 text-cyan-300 py-4 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all font-bold tracking-wider uppercase"
                                >
                                    Transmit Data
                                </MagneticButton>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Toaster position="bottom-right"
                toastOptions={{
                    style: {
                        background: '#1e293b',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.1)',
                    },
                }}
            />
        </div>
    )
}

export default Contact
