'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Gallery images
    const galleryImages = [
        'WhatsApp Image 2026-01-30 at 8.57.43 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.57.44 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.57.45 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.21 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.22 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.29 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.30 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.31 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.32 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.33 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.34 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.35 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 8.58.36 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 9.12.16 AM.jpeg',
        'WhatsApp Image 2026-01-30 at 9.12.17 AM.jpeg'
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)] relative overflow-hidden">
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

                {/* Meet Our Core Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 lg:mt-24"
                >
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-100">
                            Meet Our Core Team
                        </h2>
                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
                            The passionate individuals driving Ninja Junction forward
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { name: 'Aarav Majumdar', role: 'Chief Executive Officer', image: 'Aarav Majumdar.jpg' },
                            { name: 'Siddharth Kumar', role: 'Marketing and PR Head', image: null },
                            { name: 'Suraj Arya', role: 'President', image: 'Suraj Arya.jpg' },
                            { name: 'Aditi Kaythwal', role: 'Vice President', image: null },
                            { name: 'Vanshika', role: 'Vice President', image: 'Vanshika.jpg' },
                            { name: 'Vastavi Gupta', role: 'General Secretary', image: 'Vastavi Gupta.jpg' },
                            { name: 'Krishna Yadav', role: 'Technical Head', image: null },
                            { name: 'Vanshika Sharma', role: 'Marketing and PR Head', image: null },
                            { name: 'Mohd. Aftab', role: 'Sponsorship Head', image: 'Mohd Aftab.jpg' },
                            { name: 'Shambhavi', role: 'Campus Ambassador', image: 'Shambhavi.jpg' }
                        ].map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.9 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    y: -10,
                                    rotateY: 5,
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                                style={{ perspective: '1000px' }}
                            >
                                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: 'translateZ(0)'
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-blue-500/0 group-hover:from-primary/10 group-hover:to-blue-500/10 transition-all duration-500 z-10"></div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                                        style={{
                                            background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                                            transform: 'translateX(-100%)',
                                            animation: 'shine 1.5s infinite'
                                        }}
                                    ></div>

                                    {/* Image container */}
                                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                                        {member.image ? (
                                            <Image
                                                src={`/${member.image}`}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 border-4 border-slate-600/50 flex items-center justify-center">
                                                    <span className="text-6xl font-bold text-slate-400">
                                                        {member.name.charAt(0)}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Gradient overlay at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-6 z-30">
                                        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 font-medium mb-4">
                                            {member.role}
                                        </p>

                                        {/* Decorative line */}
                                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-500"></div>
                                    </div>

                                    {/* 3D border effect */}
                                    <div className="absolute inset-0 rounded-3xl border border-slate-600/30 group-hover:border-primary/50 transition-all duration-500 pointer-events-none"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Community Gallery Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mt-16 lg:mt-24"
                >
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-100">
                            Our Community in Action
                        </h2>
                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
                            Moments from our meetups, workshops, and collaborative sessions
                        </p>
                    </div>

                    {/* Main Carousel */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Carousel Container */}
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 shadow-2xl">
                            {/* Images */}
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={image}
                                    initial={false}
                                    animate={{
                                        opacity: index === currentSlide ? 1 : 0,
                                        scale: index === currentSlide ? 1 : 0.95,
                                        zIndex: index === currentSlide ? 1 : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={`/${image}`}
                                        alt={`Community meetup ${index + 1}`}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            ))}

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40 pointer-events-none"></div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-full flex items-center justify-center text-slate-100 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group"
                            >
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-full flex items-center justify-center text-slate-100 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 group"
                            >
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Slide Counter */}
                            <div className="absolute top-4 right-4 z-10 bg-slate-800/80 backdrop-blur-md border border-slate-600/50 rounded-full px-4 py-2">
                                <span className="text-slate-100 font-medium text-sm">
                                    {currentSlide + 1} / {galleryImages.length}
                                </span>
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="mt-6 flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                            {galleryImages.map((image, index) => (
                                <motion.button
                                    key={image}
                                    onClick={() => setCurrentSlide(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentSlide
                                            ? 'border-primary shadow-lg shadow-primary/50 scale-105'
                                            : 'border-slate-700 hover:border-slate-500'
                                        }`}
                                >
                                    <Image
                                        src={`/${image}`}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    {index === currentSlide && (
                                        <div className="absolute inset-0 bg-primary/20"></div>
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Auto-play Indicator */}
                        <div className="mt-6 flex justify-center gap-2">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'w-8 bg-primary'
                                            : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
