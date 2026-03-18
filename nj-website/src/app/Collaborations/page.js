'use client';
import React from 'react';
import { motion } from 'motion/react';
import { collaborations } from '../../../public/collaborationsData';
import Footer from '../../Components/Footer';

export default function Collaborations() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-[var(--color-background)]">
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

            <section className="relative z-10 pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 mt-10 md:mt-16"
                >
                    <h1 className="bold-heading text-5xl md:text-7xl mb-6 text-[var(--color-text-primary)]">
                        RECENT <span className="text-[var(--color-primary)]">COLLABORATIONS</span>
                    </h1>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-serif italic max-w-3xl mx-auto leading-relaxed">
                        Partnering with industry leaders, research organizations, and innovative companies to create meaningful impact
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-24">
                    {collaborations.map((collab, index) => (
                        <motion.div
                            key={collab.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(79,70,229,0.15)' }}
                            className="bg-white/80 backdrop-blur-md border border-black/5 rounded-3xl p-6 flex flex-col items-start transition-all duration-300 shadow-xl group"
                        >
                            {/* Logo Placeholder */}
                            <div className={`w-full h-40 rounded-2xl mb-6 ${collab.bgColor} flex items-center justify-center p-4 text-center overflow-hidden relative shadow-inner`}>
                                {/* Using placeholder text since logos are unavailable */}
                                <h3 className="text-white font-extrabold text-2xl tracking-wider uppercase drop-shadow-md z-10 whitespace-pre-line" style={{ fontFamily: 'var(--font-oswald)' }}>
                                    {collab.logoText}
                                </h3>
                                {/* Simple glow for placeholder aesthetic */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                {index === 1 && <div className="absolute top-1/2 left-4 w-12 h-12 rounded-full border-4 border-white/20" />}
                            </div>

                            {/* Pill */}
                            <div className="px-4 py-1.5 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold mb-5 uppercase tracking-widest">
                                {collab.pill}
                            </div>

                            {/* Text Content */}
                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                {collab.name}
                            </h2>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                {collab.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                    {[
                        { value: '4+', label: 'Active Partnerships' },
                        { value: '500+', label: 'Students Impacted' }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-white/80 backdrop-blur-md border border-black/5 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] transition-all duration-300"
                        >
                            <h3 className="bold-heading text-6xl md:text-7xl text-[var(--color-primary)] mb-4">
                                {stat.value}
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl font-medium tracking-wider uppercase" style={{ fontFamily: 'var(--font-oswald)' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
