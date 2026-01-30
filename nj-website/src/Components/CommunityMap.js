'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

export default function CommunityMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);
    const totalMembers = 120;

    // Animate counter
    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = totalMembers / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= totalMembers) {
                    setCount(totalMembers);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView]);

    // Simple seeded random function for deterministic generation
    const seededRandom = (seed) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    // Generate deterministic positions for community spots
    const spots = useMemo(() => {
        const generatedSpots = [];
        // Premium monochromatic colors - electric blue theme
        const colors = ['#00D4FF', '#0099CC', '#00B8E6', '#33DDFF'];

        for (let i = 0; i < totalMembers; i++) {
            const x = seededRandom(i * 1.5) * 50 + 25;
            const y = seededRandom(i * 2.7) * 50 + 25;
            const size = seededRandom(i * 3.3) * 3 + 3;

            generatedSpots.push({
                id: i,
                x: x.toFixed(10),
                y: y.toFixed(10),
                delay: i * 0.02,
                size: size.toFixed(10),
                outerRadius: (size / 6).toFixed(10),
                innerRadius: (size / 12).toFixed(10),
                mainRadius: (size / 24).toFixed(10),
                color: colors[i % colors.length]
            });
        }
        return generatedSpots;
    }, []);

    return (
        <section ref={ref} className="relative py-24 bg-[var(--color-background)] overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `
                    linear-gradient(var(--color-primary) 1px, transparent 1px),
                    linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
            }} />

            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4" style={{ letterSpacing: '-0.02em' }}>
                        Our Growing <span className="text-[var(--color-primary)]">Community</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Students from across Delhi University connecting, collaborating, and creating together
                    </p>
                </motion.div>

                {/* Map Container */}
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    {/* Map Visualization */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 relative"
                    >
                        <div className="relative bg-slate-700/40 backdrop-blur-xl rounded-3xl border border-cyan-400/30 p-8 lg:p-12 overflow-hidden">
                            {/* Delhi Map with Dark Overlay */}
                            <Image
                                src="/Delhi Map Outline.png"
                                alt="Delhi University Map"
                                width={600}
                                height={600}
                                className="w-full h-auto opacity-30 grayscale"
                                priority
                                quality={90}
                            />

                            {/* Community Spots Overlay */}
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                suppressHydrationWarning
                            >
                                {spots.map((spot) => (
                                    <motion.g key={spot.id} suppressHydrationWarning>
                                        {/* Outer glow ring */}
                                        <motion.circle
                                            cx={String(spot.x)}
                                            cy={String(spot.y)}
                                            r={String(spot.outerRadius)}
                                            fill={spot.color}
                                            opacity="0.2"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={isInView ? {
                                                scale: [0, 2, 1.5],
                                                opacity: [0, 0.4, 0.2]
                                            } : {}}
                                            transition={{
                                                duration: 1.2,
                                                delay: spot.delay,
                                                repeat: Infinity,
                                                repeatDelay: 1.5
                                            }}
                                            suppressHydrationWarning
                                        />
                                        {/* Inner glow effect */}
                                        <motion.circle
                                            cx={String(spot.x)}
                                            cy={String(spot.y)}
                                            r={String(spot.innerRadius)}
                                            fill={spot.color}
                                            opacity="0.4"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={isInView ? {
                                                scale: [0, 1.5, 1],
                                                opacity: [0, 0.6, 0.4]
                                            } : {}}
                                            transition={{
                                                duration: 1,
                                                delay: spot.delay + 0.1,
                                                repeat: Infinity,
                                                repeatDelay: 1.5
                                            }}
                                            suppressHydrationWarning
                                        />
                                        {/* Main dot */}
                                        <motion.circle
                                            cx={String(spot.x)}
                                            cy={String(spot.y)}
                                            r={String(spot.mainRadius)}
                                            fill={spot.color}
                                            className="cursor-pointer"
                                            style={{
                                                filter: 'drop-shadow(0 0 3px rgba(0, 212, 255, 0.8))'
                                            }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={isInView ? {
                                                scale: 1,
                                                opacity: 1
                                            } : {}}
                                            transition={{
                                                duration: 0.5,
                                                delay: spot.delay + 0.2,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{
                                                scale: 1.5,
                                                opacity: 1,
                                                transition: { duration: 0.2 }
                                            }}
                                            suppressHydrationWarning
                                        />
                                    </motion.g>
                                ))}
                            </svg>

                            {/* Border Glow */}
                            <div className="absolute inset-0 rounded-3xl border border-[var(--color-primary)]/20" />
                        </div>
                    </motion.div>

                    {/* Stats Panel */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Member Count Card */}
                        <div className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-2xl border border-[var(--glass-border)] p-8 relative overflow-hidden group">
                            {/* Scan Line Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100"
                                animate={{ y: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />

                            <div className="relative">
                                <div className="text-6xl font-bold text-[var(--color-primary)] mb-2" style={{ letterSpacing: '-0.02em' }}>
                                    {count}+
                                </div>
                                <div className="text-xl text-[var(--color-text-primary)] font-semibold mb-2">
                                    Active Members
                                </div>
                                <div className="text-sm text-[var(--color-text-secondary)]">
                                    Growing community across Delhi University
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-primary)]/10 rounded-bl-full" />
                        </div>

                        {/* Additional Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '10+', label: 'Colleges' },
                                { value: '50+', label: 'Events' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-xl border border-[var(--glass-border)] p-6 hover:border-[var(--color-primary)]/30 transition-all group"
                                >
                                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-1" style={{ letterSpacing: '-0.02em' }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-text-secondary)]">
                                        {stat.label}
                                    </div>
                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <a
                                href="/Join"
                                className="block w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--color-primary)]/30 transition-all relative overflow-hidden group"
                            >
                                {/* Scan Line Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <span className="relative z-10">Join Our Community</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
