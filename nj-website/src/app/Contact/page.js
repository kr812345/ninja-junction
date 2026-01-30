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
            {/* Animated background elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-20 right-20 w-[300px] h-[300px] bg-primary/20 rounded-full -z-10 blur-2xl sm:w-[200px] sm:h-[200px] sm:top-10 sm:right-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-20 left-10 w-[200px] h-[200px] bg-blue-300/30 rounded-full -z-10 blur-xl sm:w-[150px] sm:h-[150px] sm:bottom-10 sm:left-5"
            />

            <div className="container mx-auto py-16 px-4 relative pt-24 lg:pt-32 xl:pt-40 sm:pt-20 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                        Get In Touch / Join Us
                    </h1>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
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
                        <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-primary/10">
                            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-primary">Contact Information</h2>

                            <div className="space-y-4 lg:space-y-6">
                                {/* <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Phone</h3>
                                        <p className="text-gray-600 text-sm lg:text-base">(+91) 84487 24342</p>
                                    </div>
                                </motion.div> */}


                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Email</h3>
                                        <p className="text-gray-600 text-sm lg:text-base break-all">team.ninjajunction@protonmail.com</p>
                                    </div>
                                </motion.div>

                                {/* <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Address</h3>
                                        <p className="text-gray-600 text-sm lg:text-base">Coming Soon.</p>
                                    </div>
                                </motion.div> */}

                                {/* <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Office Hours</h3>
                                        <p className="text-gray-600 text-sm lg:text-base">
                                            Mon - Fri: 9:00 AM - 6:00 PM<br />
                                            Sat: 10:00 AM - 4:00 PM<br />
                                            Sun: Closed
                                        </p>
                                    </div>
                                </motion.div> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="order-1 bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-primary/10">
                            <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-primary">Send us a Message / Request</h2>
                            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 resize-none text-sm lg:text-base focus:outline-none"
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
                                    className="w-full bg-primary text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

export default Contact
