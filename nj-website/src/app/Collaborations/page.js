'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/Components/Footer';

export default function Collaborations() {
    const collaborations = [
        {
            id: 1,
            name: 'INVOOTECHNICA',
            fullName: 'INVOOTECHNICA Global Private Limited',
            description: 'Global technology solutions and innovation partner',
            logo: '/INVOOTECHNICA.png',
            category: 'Technology Partner'
        },
        {
            id: 2,
            name: 'HLM Group',
            fullName: 'HLM Group of Institutions',
            description: 'Leading educational institution fostering innovation',
            logo: '/HLM.png',
            category: 'Education Partner'
        },
        {
            id: 3,
            name: 'TEDxSVC',
            fullName: 'TEDxSVC',
            description: 'Ideas worth spreading - Independent TEDx event at Shri Venkateswara College',
            logo: '/TEDXSVC.png',
            category: 'Event Partner'
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--color-background)] font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
                {/* Animated Gradient Mesh Background */}
                <motion.div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] -z-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(0,229,255,0.2) 0%, rgba(99,102,241,0.15) 50%, transparent 100%)'
                    }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-serif">
                            Recent <span className="text-[var(--color-primary)]">Collaborations</span>
                        </h1>
                        <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
                        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
                            Partnering with industry leaders, research organizations, and innovative companies to create meaningful impact
                        </p>
                    </motion.div>

                    {/* Collaborations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborations.map((collab, index) => (
                            <motion.div
                                key={collab.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                    rotateX: 5,
                                    rotateY: 5
                                }}
                                style={{ perspective: 1000 }}
                                className="group relative"
                            >
                                <div className="relative h-full bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden">
                                    {/* Scan Line Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 z-10 pointer-events-none"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                                    />

                                    {/* Holographic Border Glow */}
                                    <div className="absolute inset-0 rounded-3xl border border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]" />

                                    {/* Logo Container */}
                                    <div className="relative mb-6 h-32 flex items-center justify-center bg-blue-500 rounded-2xl border border-white/10 group-hover:shadow-lg transition-all p-4">
                                        <Image
                                            src={collab.logo}
                                            alt={collab.name}
                                            width={200}
                                            height={80}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-20">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-3 border border-cyan-400/30">
                                            {collab.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-[var(--color-primary)] transition-colors">
                                            {collab.fullName}
                                        </h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {collab.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="text-center p-8 bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-white/10">
                            <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">3+</div>
                            <div className="text-lg text-[var(--color-text-secondary)]">Active Partnerships</div>
                        </div>
                        <div className="text-center p-8 bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-white/10">
                            <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">100+</div>
                            <div className="text-lg text-[var(--color-text-secondary)]">Collaborative Projects</div>
                        </div>
                        <div className="text-center p-8 bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-white/10">
                            <div className="text-5xl font-bold text-[var(--color-primary)] mb-2">500+</div>
                            <div className="text-lg text-[var(--color-text-secondary)]">Students Impacted</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
