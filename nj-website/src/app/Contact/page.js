'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react';
import contactForm from '@/Services/Contact';
import { GiConsoleController } from 'react-icons/gi';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: Implement form submission logic
        const res = await contactForm.create(formData);
        toast.success(res?.message);
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)] relative overflow-hidden">
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

            <div className="container mx-auto py-16 px-4 relative pt-24 lg:pt-32 xl:pt-40 sm:pt-20 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="bold-heading text-5xl md:text-7xl mb-6">
                        GET IN TOUCH
                    </h1>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-[var(--color-primary)] mx-auto mb-4 lg:mb-6"></div>
                    <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] font-serif italic max-w-2xl mx-auto px-4">
                        Have questions or want to collaborate? We'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 lg:space-y-8"
                    >
                        <div className="bg-white/80 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-black/5 hover:-translate-y-1 transition-all duration-500">
                            <div className="bg-gradient-to-br from-indigo-50/80 to-white p-6 lg:p-8 rounded-2xl border border-black/5 h-full">
                                <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">Contact Information</h2>

                                <div className="space-y-4 lg:space-y-6">
                                    {/* Email Contact Card */}
                                    <motion.a
                                        href="mailto:team@ninjajunction.com"
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-start space-x-4 p-4 lg:p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                            <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-1">
                                            <h3 className="font-bold text-[var(--color-text-primary)] text-sm lg:text-base uppercase tracking-wider mb-1">Email</h3>
                                            <p className="text-[var(--color-text-secondary)] text-sm lg:text-base break-all font-medium group-hover:text-[var(--color-primary)] transition-colors">team@ninjajunction.com</p>
                                        </div>
                                    </motion.a>

                                    {/* Socials Contact Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-start space-x-4 p-4 lg:p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                            <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-1 flex-[1]">
                                            <h3 className="font-bold text-[var(--color-text-primary)] text-sm lg:text-base uppercase tracking-wider mb-3">Social Networks</h3>
                                            <div className="flex gap-4">
                                                <a href="https://www.linkedin.com/company/ninja-junction/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                                                <a href="https://www.instagram.com/ninja.junction" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[#E1306C]/10 hover:text-[#E1306C] transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                                                <a href="https://youtube.com/@ninjajunction" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[var(--color-text-secondary)] hover:bg-[#FF0000]/10 hover:text-[#FF0000] transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-white/80 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-black/5 hover:-translate-y-1 transition-all duration-500">
                            <div className="bg-white p-6 lg:p-8 rounded-2xl border border-black/5 h-full relative overflow-hidden">
                                {/* Decorative pixel corner */}
                                <div className="absolute top-4 right-4 grid grid-cols-2 gap-1 opacity-20 pointer-events-none">
                                    <div className="w-2 h-2 bg-[var(--color-primary)]"></div>
                                    <div className="w-2 h-2 bg-[var(--color-primary)]"></div>
                                    <div className="col-start-2 w-2 h-2 bg-[var(--color-primary)]"></div>
                                </div>

                                <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)] relative z-10">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6 relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 pl-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3.5 lg:p-4 bg-gray-50 border border-black/5 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all duration-300 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none placeholder-gray-400"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 pl-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3.5 lg:p-4 bg-gray-50 border border-black/5 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all duration-300 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                    >
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 pl-1">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full p-3.5 lg:p-4 bg-gray-50 border border-black/5 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-white transition-all duration-300 hover:border-indigo-500/30 resize-none text-sm lg:text-base focus:outline-none placeholder-gray-400"
                                            placeholder="Tell us how we can help you..."
                                            required
                                        />
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 px-8 mt-2 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[var(--color-primary-dark)] hover:shadow-xl transition-all duration-300 outline-none"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

export default Contact
