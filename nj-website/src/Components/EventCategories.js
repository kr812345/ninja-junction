'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

export default function EventCategories() {
    const categories = [
        {
            title: 'Workshops',
            description: 'Hands-on learning sessions to build practical skills',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            link: '/Events?category=workshop',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Hackathons',
            description: 'Compete, collaborate, and create innovative solutions',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            link: '/Events?category=hackathon',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Meetups',
            description: 'Connect with like-minded students and build your network',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            link: '/Events?category=meetup',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Speaker Sessions',
            description: 'Learn from industry experts and thought leaders',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            link: '/Events?category=speaker',
            gradient: 'from-orange-500 to-amber-500'
        }
    ];

    return (
        <section className="relative py-20 bg-[var(--color-background)] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] font-serif mb-4">
                        <GlitchText>Unifying Students</GlitchText> <span className="text-[var(--color-primary)]"><GlitchText>Across Colleges</GlitchText></span>
                    </h2>
                </motion.div>

                {/* Category Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={category.link}>
                                <motion.div
                                    whileHover={{
                                        y: -12,
                                        scale: 1.03,
                                        rotateX: 5,
                                        rotateY: 5
                                    }}
                                    style={{ perspective: 1000 }}
                                    className="relative h-full bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 cursor-pointer group overflow-hidden"
                                >
                                    {/* Scan Line Effect - MORE VISIBLE */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 z-10 pointer-events-none"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                                    />

                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Holographic Border Glow */}
                                    <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]" />

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-16 h-16 rounded-2xl border-2 border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all"
                                        >
                                            {category.icon}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-[var(--color-primary)] transition-colors">
                                            <GlitchText>{category.title}</GlitchText>
                                        </h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="relative mt-4 flex items-center text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-sm font-semibold">Learn More</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
