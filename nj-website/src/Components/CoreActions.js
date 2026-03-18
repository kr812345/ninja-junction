'use client';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function CoreActions() {
    const actions = [
        {
            title: 'Join',
            subtitle: 'Become a community member',
            description: 'Connect with like-minded students across Delhi colleges and start your journey.',
            icon: '🥷',
            link: '/Join',
        },
        {
            title: 'Participate',
            subtitle: 'Register for events & hackathons',
            description: 'Workshops, competitions, and speaker sessions — something for everyone.',
            icon: '🚀',
            link: '/Events',
        },
        {
            title: 'Collaborate',
            subtitle: 'Build teams across colleges',
            description: 'Find your team, ship projects, and create impact with real-world tech.',
            icon: '⚡',
            link: '/Projects',
        }
    ];

    const rotations = [-3, 1, -2];

    return (
        <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Heading — Bold condensed */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="bold-heading text-4xl md:text-6xl lg:text-7xl mb-4">
                        JOIN.<br/>PARTICIPATE.<br/>COLLABORATE.
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] font-serif italic max-w-lg mx-auto">
                        Everything you need to connect, grow, and make an impact
                    </p>
                </motion.div>

                {/* Actions Grid — Tilted cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {actions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ y: 50, opacity: 0, rotate: rotations[index] }}
                            whileInView={{ y: 0, opacity: 1, rotate: rotations[index] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link href={action.link}>
                                <motion.div
                                    whileHover={{
                                        y: -12,
                                        rotate: 0,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="relative glass-card p-8 cursor-pointer group h-full flex flex-col items-center text-center"
                                >
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 rounded-[var(--radius-card)] bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/5 transition-all duration-500" />

                                    {/* Icon */}
                                    <div className="relative mb-6 text-5xl">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {action.icon}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3
                                            className="text-2xl font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors uppercase"
                                            style={{ fontFamily: 'var(--font-oswald)' }}
                                        >
                                            {action.title}
                                        </h3>
                                        <p className="text-[var(--color-primary)] text-sm font-semibold mb-3 uppercase tracking-wider">
                                            {action.subtitle}
                                        </p>
                                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                            {action.description}
                                        </p>
                                    </div>

                                    {/* Bottom Arrow */}
                                    <div className="relative mt-6 flex items-center justify-center text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
