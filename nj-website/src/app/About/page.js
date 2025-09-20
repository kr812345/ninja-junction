'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-20 right-20 w-[300px] h-[300px] bg-primary/20 rounded-full -z-10 blur-2xl sm:w-[200px] sm:h-[200px] sm:top-10 sm:right-10 not-sm:mb-20"
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
                        About Us
                    </h1>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Discover the story behind Ninja Junction
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-0 pl-8 space-x-8  items-center mb-16 lg:mb-20 inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl"
                >
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex-1 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <p className="text-base sm:text-lg leading-relaxed text-gray-700 not-sm:text-justify">
                                Welcome to Ninja Junction - your ultimate collaboration platform for students! 
                                Launched in 2025, we're dedicated to connecting students across different 
                                disciplines, making it easier than ever to find project partners and share ideas.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 not-sm:hidden"
                        >
                            <p className="text-base sm:text-lg leading-relaxed text-gray-700 not-sm:">
                                Think of us as your digital meeting point where innovation meets collaboration. 
                                Whether you're looking for team members for your next project or wanting to 
                                share your expertise, Ninja Junction is your go-to platform for meaningful 
                                academic connections.
                            </p>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden order-1 lg:order-2 not-sm:bg- not-sm:mr-8"
                    >
                        <div className="absolute inset-0  z-10"></div>
                        <Image
                            src="./logo.svg"
                            alt="Ninja Junction Collaboration"
                            fill
                            className="object-contain rounded-2xl lg:p-12"
                        />
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-blue-500 rounded-xl mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xl lg:text-2xl font-bold">🤝</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-primary">Connect</h3>
                        <p className="text-gray-600 leading-relaxed">Find and connect with like-minded students across different disciplines.</p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-blue-500 rounded-xl mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xl lg:text-2xl font-bold">🚀</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-primary">Collaborate</h3>
                        <p className="text-gray-600 leading-relaxed">Work together on exciting projects and share innovative ideas.</p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-blue-500 rounded-xl mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xl lg:text-2xl font-bold">✨</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-primary">Create</h3>
                        <p className="text-gray-600 leading-relaxed">Turn your ideas into reality with the perfect team!</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
