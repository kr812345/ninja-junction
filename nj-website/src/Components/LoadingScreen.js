'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-background)]"
                    >
                        {/* Background glow effects — cyan/blue theme */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

                        {/* Boom effect container */}
                        <div className="relative">
                            {/* Expanding rings */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1.5, 2.5],
                                    opacity: [0, 0.6, 0]
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.8,
                                    ease: "easeOut"
                                }}
                                className="absolute inset-0 -m-20 rounded-full border-4 border-[var(--color-primary)]"
                            />
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1.2, 2],
                                    opacity: [0, 0.4, 0]
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.9,
                                    ease: "easeOut"
                                }}
                                className="absolute inset-0 -m-20 rounded-full border-4 border-cyan-300"
                            />

                            {/* Logo with boom animation */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    scale: [0, 1.3, 1],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: [0.34, 1.56, 0.64, 1]
                                }}
                                className="relative z-10"
                            >
                                <motion.div
                                    animate={{
                                        boxShadow: [
                                            '0 0 0px rgba(0, 212, 255, 0)',
                                            '0 0 60px rgba(0, 212, 255, 0.8)',
                                            '0 0 40px rgba(0, 212, 255, 0.3)'
                                        ]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.8,
                                        repeat: 1
                                    }}
                                    className="w-48 h-48 rounded-3xl bg-[var(--color-surface)]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center p-6"
                                >
                                    <Image
                                        src="/logo-bg.svg"
                                        alt="Ninja Junction"
                                        width={144}
                                        height={144}
                                        className="drop-shadow-2xl w-full h-full object-contain"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* Particle burst effect — cyan/blue particles */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        x: Math.cos((i * Math.PI * 2) / 8) * 100,
                                        y: Math.sin((i * Math.PI * 2) / 8) * 100,
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.8 + i * 0.05,
                                        ease: "easeOut"
                                    }}
                                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                    style={{ transformOrigin: 'center' }}
                                />
                            ))}
                        </div>

                        {/* Loading text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="absolute bottom-1/3 text-center"
                        >
                            <motion.p
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-[var(--color-text-secondary)] font-sans text-sm tracking-wider uppercase"
                            >
                                Loading...
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </>
    );
}
