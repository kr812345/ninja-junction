'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-[var(--color-background)]"
        >
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
                {/* Centered Content */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] font-serif leading-tight">
                        One Platform for <span className="text-[var(--color-primary)]">Students, Events & Hackathons</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-[var(--color-text-secondary)] font-sans max-w-2xl leading-relaxed">
                        Connecting students across Delhi colleges through tech, creativity, and collaboration
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/Join"
                            className="px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            Join Community
                        </Link>
                        <Link href="/Events"
                            className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                        >
                            Explore Events
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
