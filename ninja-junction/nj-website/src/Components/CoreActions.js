'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

export default function CoreActions() {
    const actions = [
        {
            title: 'Workshops',
            description: 'Hands-on learning sessions to build practical skills.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            link: '/Events',
            gradient: 'from-cyan-500 to-blue-500',
            borderColor: 'group-hover:border-cyan-500/50',
            shadowColor: 'group-hover:shadow-cyan-500/20'
        },
        {
            title: 'Hackathons',
            description: 'Compete, collaborate, and create innovative solutions.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            link: '/Events',
            gradient: 'from-purple-500 to-pink-500',
            borderColor: 'group-hover:border-purple-500/50',
            shadowColor: 'group-hover:shadow-purple-500/20'
        },
        {
            title: 'Networking',
            description: 'Connect with like-minded students and build your network.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            link: '/Join',
            gradient: 'from-emerald-500 to-green-500',
            borderColor: 'group-hover:border-emerald-500/50',
            shadowColor: 'group-hover:shadow-emerald-500/20'
        },
        {
            title: 'Real Projects',
            description: 'Learn from industry experts and research teams.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: '/Projects',
            gradient: 'from-orange-500 to-red-500',
            borderColor: 'group-hover:border-orange-500/50',
            shadowColor: 'group-hover:shadow-orange-500/20'
        }
    ];

    return (
        <section className="relative py-24 bg-[var(--color-background)] overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-4 flex justify-center gap-3">
                        <GlitchText>Core</GlitchText> <span className="text-cyan-400"><GlitchText>Actions</GlitchText></span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Everything you need to connect, participate, and grow with the community
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {actions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link href={action.link} className="block h-full">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className={`
                                        relative h-full bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8 
                                        cursor-pointer group overflow-hidden flex flex-col items-center text-center
                                        transition-all duration-300 ${action.borderColor} hover:border hover:shadow-2xl ${action.shadowColor}
                                    `}
                                >
                                    {/* Scan Line Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 z-10 pointer-events-none"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                                    />

                                    {/* Holographic Gradient Blob */}
                                    <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${action.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                    {/* Icon Container */}
                                    <div className="relative mb-6">
                                        <div className={`
                                            w-20 h-20 rounded-2xl bg-gradient-to-br ${action.gradient} p-[1px]
                                            group-hover:scale-110 transition-transform duration-500
                                        `}>
                                            <div className="w-full h-full bg-slate-900/90 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                                <div className={`text-white group-hover:text-cyan-300 transition-colors`}>
                                                    {action.icon}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        <GlitchText>{action.title}</GlitchText>
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {action.description}
                                    </p>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
