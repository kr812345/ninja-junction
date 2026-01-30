'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CoreActions() {
    const actions = [
        {
            title: 'Join',
            description: 'Become a community member',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
            link: '/Join',
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-500'
        },
        {
            title: 'Participate',
            description: 'Register for events & hackathons',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            ),
            link: '/Events',
            gradient: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-500'
        },
        {
            title: 'Collaborate',
            description: 'Build teams across colleges',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            link: '/Projects',
            gradient: 'from-red-500 to-pink-500',
            bgColor: 'bg-red-500'
        }
    ];

    return (
        <section className="relative py-20 bg-[var(--color-background)] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] font-serif mb-4">
                        Core <span className="text-[var(--color-primary)]">Actions</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Everything you need to connect, participate, and grow with the community
                    </p>
                </motion.div>

                {/* Actions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {actions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link href={action.link}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 cursor-pointer group overflow-hidden h-full flex flex-col items-center text-center"
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Icon Circle */}
                                    <div className="relative mb-6">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-20 h-20 rounded-full bg-gradient-to-br ${action.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow`}
                                        >
                                            {action.icon}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-[var(--color-primary)] transition-colors">
                                            {action.title}
                                        </h3>
                                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                            {action.description}
                                        </p>
                                    </div>

                                    {/* Bottom Arrow */}
                                    <div className="relative mt-6 flex items-center justify-center text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
