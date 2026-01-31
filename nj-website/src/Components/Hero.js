'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleNetwork from './ParticleNetwork';
import GlitchText from './GlitchText';
import MagneticButton from './MagneticButton';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-[var(--color-background)]"
        >
            {/* Particle Network Background */}
            <ParticleNetwork />

            {/* Animated Gradient Mesh - Dribbble Style */}
            <motion.div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] -z-10"
                style={{
                    background: 'radial-gradient(circle, rgba(0,229,255,0.3) 0%, rgba(99,102,241,0.2) 50%, transparent 100%)'
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-[150px] -z-10"
                style={{
                    background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(59,130,246,0.15) 50%, transparent 100%)'
                }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Animated Scan Lines - MORE VISIBLE */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent pointer-events-none z-10"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Tech Grid Pattern - More Visible */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }} />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full relative z-20">
                {/* Centered Content */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    {/* Holographic Glow Around Heading */}
                    <div className="relative">
                        <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <h1 className="relative text-5xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] font-serif leading-tight">
                            <GlitchText>One Platform for</GlitchText> <span className="text-[var(--color-primary)]"><GlitchText>Students, Events & Hackathons</GlitchText></span>
                        </h1>
                    </div>

                    <p className="text-lg lg:text-xl text-[var(--color-text-secondary)] font-sans max-w-2xl leading-relaxed">
                        Connecting students across Delhi colleges through tech, creativity, and collaboration
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="relative px-8 py-4 bg-gray-600 text-white font-semibold rounded-xl text-center cursor-not-allowed opacity-60">
                            <span className="relative z-10">Join Community (Coming Soon)</span>
                        </div>
                        <MagneticButton
                            href="/Events"
                            className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all text-center backdrop-blur-sm animate-glow"
                        >
                            Explore Events
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
