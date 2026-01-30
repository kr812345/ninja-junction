'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EventCategories() {
    const categories = [
        {
            title: 'Workshops',
            description: 'Hands-on learning sessions to build practical skills',
            icon: '🛠️',
            link: '/Events?category=workshop',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Hackathons',
            description: 'Compete, collaborate, and create innovative solutions',
            icon: '💻',
            link: '/Events?category=hackathon',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Meetups',
            description: 'Connect with like-minded students and build your network',
            icon: '🤝',
            link: '/Events?category=meetup',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Speaker Sessions',
            description: 'Learn from industry experts and thought leaders',
            icon: '🎤',
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
                        Unifying Students <span className="text-[var(--color-primary)]">Across Colleges</span>
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
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative h-full bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 cursor-pointer group overflow-hidden"
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                                            {category.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-[var(--color-primary)] transition-colors">
                                            {category.title}
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
