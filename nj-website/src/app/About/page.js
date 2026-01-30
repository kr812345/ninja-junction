'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import GlitchText from '@/Components/GlitchText';
import ParticleNetwork from '@/Components/ParticleNetwork';

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
            {/* Particle Network Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <ParticleNetwork />
            </div>

            {/* Glowing Orbs */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-20 right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full -z-10 blur-[100px]"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full -z-10 blur-[100px]"
            />

            <div className="container mx-auto py-16 px-4 relative pt-24 lg:pt-32 xl:pt-40 sm:pt-20 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white inline-block">
                        <GlitchText>About Us</GlitchText>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6 lg:mb-8"></div>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4">
                        Decoding the future of student collaboration
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20 p-6 sm:p-8 rounded-3xl border border-white/5 bg-slate-900/50 backdrop-blur-md relative overflow-hidden"
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }} />

                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex-1 relative z-10">
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="bg-white/5 p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors"
                        >
                            <h3 className="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-sm">Our Mission</h3>
                            <p className="text-base sm:text-lg leading-relaxed text-slate-300 text-justify">
                                Welcome to Ninja Junction - your ultimate collaboration platform forstudents!
                                Launched in 2025, we're dedicated to connecting students across different
                                disciplines, making it easier than ever to find project partners and share ideas.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="bg-white/5 p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors not-sm:hidden"
                        >
                            <h3 className="text-purple-400 font-bold mb-3 uppercase tracking-wider text-sm">Vision</h3>
                            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
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
                            src="/logo.svg"
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
                        whileHover={{ y: -5 }}
                        className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-cyan-400/30 rounded-xl mb-4 lg:mb-6 flex items-center justify-center group-hover:border-cyan-400 transition-all">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-primary">Connect</h3>
                        <p className="text-gray-600 leading-relaxed">Find and connect with like-minded students across different disciplines.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-cyan-400/30 rounded-xl mb-4 lg:mb-6 flex items-center justify-center group-hover:border-cyan-400 transition-all">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-primary">Collaborate</h3>
                        <p className="text-gray-600 leading-relaxed">Work together on exciting projects and share innovative ideas.</p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-cyan-400/30 rounded-xl mb-4 lg:mb-6 flex items-center justify-center group-hover:border-cyan-400 transition-all">
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-primary">Create</h3>
                        <p className="text-gray-600 leading-relaxed">Turn your ideas into reality with the perfect team!</p>
                    </motion.div>
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
