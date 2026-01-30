'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';

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
        const colors = ['#2563EB', '#8B5CF6', '#06B6D4', '#3B82F6'];

        for (let i = 0; i < totalMembers; i++) {
            // Constrain spots to be within map boundaries (25-75% range for tighter fit)
            const x = seededRandom(i * 1.5) * 50 + 25; // 25-75 range
            const y = seededRandom(i * 2.7) * 50 + 25; // 25-75 range
            const size = seededRandom(i * 3.3) * 3 + 3; // Larger dots (3-6 range)

            generatedSpots.push({
                id: i,
                // Use strings to ensure exact server-client matching
                x: x.toFixed(10),
                y: y.toFixed(10),
                delay: i * 0.02,
                size: size.toFixed(10),
                // Pre-calculate and store as strings to avoid hydration errors
                outerRadius: (size / 6).toFixed(10),
                innerRadius: (size / 12).toFixed(10),
                mainRadius: (size / 25).toFixed(10),
                color: colors[Math.floor(seededRandom(i * 4.1) * 4)]
            });
        }
        return generatedSpots;
    }, []);

    return (
        <section ref={ref} className="relative py-24 bg-[var(--color-background)] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] font-serif mb-4">
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
                        <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl border border-slate-200 p-8 lg:p-12 overflow-hidden shadow-2xl">
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-white/30" />

                            {/* Delhi Map Container */}
                            <div className="relative w-full aspect-[5/6]">
                                {/* Delhi Map Image */}
                                <motion.img
                                    src="/Delhi Map Outline.png"
                                    alt="Delhi Map"
                                    className="w-full h-full object-contain relative z-10"
                                    style={{
                                        filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.1))'
                                    }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />

                                {/* Community Spots Overlay */}
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                >
                                    {spots.map((spot) => (
                                        <motion.g key={spot.id}>
                                            {/* Outer glow ring */}
                                            <motion.circle
                                                cx={spot.x}
                                                cy={spot.y}
                                                r={spot.outerRadius}
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
                                            />
                                            {/* Inner glow effect */}
                                            <motion.circle
                                                cx={spot.x}
                                                cy={spot.y}
                                                r={spot.innerRadius}
                                                fill={spot.color}
                                                opacity="0.5"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={isInView ? {
                                                    scale: [0, 1.5, 1],
                                                    opacity: [0, 0.7, 0.5]
                                                } : {}}
                                                transition={{
                                                    duration: 1,
                                                    delay: spot.delay,
                                                    repeat: Infinity,
                                                    repeatDelay: 2
                                                }}
                                            />
                                            {/* Main dot with shimmer */}
                                            <motion.circle
                                                cx={spot.x}
                                                cy={spot.y}
                                                r={spot.mainRadius}
                                                fill={spot.color}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={isInView ? {
                                                    scale: [0, 1.2, 1],
                                                    opacity: [0, 1, 0.95]
                                                } : {}}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: spot.delay
                                                }}
                                                whileHover={{
                                                    scale: 2,
                                                    opacity: 1,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="cursor-pointer"
                                                style={{
                                                    filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))'
                                                }}
                                            />
                                        </motion.g>
                                    ))}
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Panel */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Member Count */}
                        <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center">
                            <motion.div
                                className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent font-serif"
                            >
                                {count}+
                            </motion.div>
                            <p className="text-[var(--color-text-secondary)] mt-3 text-lg">
                                Active Members
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Colleges', value: '15+' },
                                { label: 'Events', value: '50+' },
                                { label: 'Projects', value: '30+' },
                                { label: 'Workshops', value: '25+' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="bg-slate-900/30 backdrop-blur-xl rounded-xl border border-white/5 p-4 text-center"
                                >
                                    <div className="text-2xl font-bold text-[var(--color-primary)] font-serif">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="/Join"
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Join Our Community
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
