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
                    <h1 className="bold-heading text-6xl md:text-8xl mb-6">
                        ABOUT US
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
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32 max-w-7xl mx-auto"
                >
                    {/* Left: Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 font-mono tracking-tight uppercase">
                                Our Mission
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)] font-medium">
                                    Welcome to <span className="text-[var(--color-primary)] font-bold">Ninja Junction</span> — your ultimate collaboration platform designed exclusively for students.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
                                    Launched in 2025, we're dedicated to connecting students across different disciplines, making it easier than ever to find project partners, build amazing things, and share ideas.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
                                    Think of us as your digital meeting point where innovation meets collaboration. Whether you're hunting for a teammate for your next hackathon or wanting to share your expertise with the world, Ninja Junction is your go-to platform for meaningful academic connections.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Floating Image / Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-3xl -rotate-6 scale-95 transition-transform duration-500 hover:rotate-0"></div>
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-3xl border border-black/5 shadow-2xl overflow-hidden flex items-center justify-center p-8 lg:p-16 hover:scale-[1.02] transition-transform duration-500">
                             {/* Pixel decorative corners inside the card */}
                             <div className="absolute top-6 left-6 grid grid-cols-2 gap-1.5 opacity-30">
                                 <div className="w-2.5 h-2.5 bg-[var(--color-primary)]"></div>
                                 <div className="w-2.5 h-2.5 bg-indigo-300"></div>
                                 <div className="w-2.5 h-2.5 bg-[var(--color-primary)]"></div>
                             </div>
                             <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-1.5 opacity-30">
                                 <div className="w-2.5 h-2.5 bg-indigo-300"></div>
                                 <div className="w-2.5 h-2.5 bg-[var(--color-primary)]"></div>
                                 <div className="col-start-2 w-2.5 h-2.5 bg-[var(--color-primary)]"></div>
                             </div>
                            
                            <Image
                                src="./logo.svg"
                                alt="Ninja Junction Collaboration"
                                fill
                                className="object-contain p-12 lg:p-16"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="group bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-3xl shadow-xl border border-black/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300">
                            <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Connect</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Find and connect with like-minded students across different disciplines seamlessly.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="group bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-3xl shadow-xl border border-black/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300">
                            <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Collaborate</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Work together on exciting projects, share open-source code, and exchange ideas.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="group bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-3xl shadow-xl border border-black/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                    >
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300">
                            <svg className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Create</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Turn your ideas into reality with the perfect team by combining specific skills.</p>
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
                        <h2 className="bold-heading text-5xl md:text-7xl mb-6">
                            MEET OUR TEAM
                        </h2>
                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
                        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] font-serif italic max-w-2xl mx-auto px-4">
                            The passionate individuals driving Ninja Junction forward.
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
                                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-black/5 shadow-xl group-hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] transition-all duration-500"
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
                                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50">
                                        {member.image ? (
                                            <Image
                                                src={`/${member.image}`}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white">
                                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 border-[6px] border-white shadow-xl flex items-center justify-center">
                                                    <span className="text-6xl font-black text-[var(--color-primary)]">
                                                        {member.name.charAt(0)}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Gradient overlay at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-6 z-30">
                                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold rounded-full uppercase tracking-widest mt-1 mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                            {member.role}
                                        </p>

                                        {/* Decorative line */}
                                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-500"></div>
                                    </div>

                                    {/* 3D border effect */}
                                    <div className="absolute inset-0 rounded-3xl border border-indigo-500/0 group-hover:border-indigo-500/20 transition-all duration-500 pointer-events-none"></div>
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
                        <h2 className="bold-heading text-5xl md:text-7xl mb-6">
                            OUR COMMUNITY
                        </h2>
                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
                        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] font-serif italic max-w-2xl mx-auto px-4">
                            Moments from our meetups, workshops, and collaborative sessions.
                        </p>
                    </div>

                    {/* Main Carousel */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Padded Carousel Frame */}
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-2xl p-2 sm:p-4">
                            {/* Images Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-50">
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-md border border-black/10 rounded-full flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 group shadow-lg"
                            >
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-md border border-black/10 rounded-full flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 group shadow-lg"
                            >
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Slide Counter */}
                            <div className="absolute top-8 right-8 z-10 bg-white/90 backdrop-blur-md border border-black/10 shadow-sm rounded-full px-4 py-2">
                                <span className="text-[var(--color-text-primary)] font-bold text-sm">
                                    {currentSlide + 1} / {galleryImages.length}
                                </span>
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="mt-6 flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
                            {galleryImages.map((image, index) => (
                                <motion.button
                                    key={image}
                                    onClick={() => setCurrentSlide(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentSlide
                                            ? 'border-[var(--color-primary)] shadow-lg shadow-indigo-500/20 scale-105'
                                            : 'border-transparent opacity-70 hover:opacity-100 bg-white shadow-sm'
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
                                            ? 'w-8 bg-[var(--color-primary)]'
                                            : 'w-1.5 bg-black/20 hover:bg-black/40'
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
