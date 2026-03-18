'use client';
import { motion, useInView } from 'motion/react';
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
        const colors = ['#4F46E5', '#818CF8', '#4338CA', '#06B6D4'];

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
                mainRadius: (size / 25).toFixed(10),
                color: colors[Math.floor(seededRandom(i * 4.1) * 4)]
            });
        }
        return generatedSpots;
    }, []);

    return (
        <section ref={ref} className="relative py-24 bg-[var(--color-background)] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/8 rounded-full blur-[150px]" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header — Bold condensed */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="bold-heading text-4xl md:text-6xl lg:text-7xl mb-4">
                        OUR GROWING<br />COMMUNITY
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] font-serif italic max-w-2xl mx-auto">
                        Students from across India connecting, collaborating, and creating together
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
                        <div className="relative bg-gradient-to-br from-[#EEF2FF] via-[#F6F8FB] to-[#EEF2FF] rounded-3xl border border-[#E2E8F0] p-8 lg:p-12 overflow-hidden shadow-lg">
                            {/* Subtle grid overlay */}
                            <div
                                className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.15) 1px, transparent 1px)',
                                    backgroundSize: '30px 30px'
                                }}
                            />

                            {/* Delhi Map Container */}
                            <div className="relative w-full aspect-[5/6]">
                                {/* India Map Image */}
                                <motion.img
                                    src="/Delhi Map Outline.png"
                                    alt="India Map"
                                    className="w-full h-full object-contain relative z-10"
                                    style={{
                                        filter: 'drop-shadow(0 0 15px rgba(79, 70, 229, 0.15)) brightness(1.05) contrast(1.05)',
                                    }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 0.8, scale: 1 } : {}}
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
                                                    filter: 'drop-shadow(0 0 4px rgba(79, 70, 229, 0.4))'
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
                        <div className="glass-card p-8 text-center">
                            <motion.div
                                className="text-6xl lg:text-7xl font-bold text-[var(--color-primary)]"
                                style={{ fontFamily: 'var(--font-oswald)' }}
                            >
                                {count}+
                            </motion.div>
                            <p className="text-[var(--color-text-secondary)] mt-3 text-lg font-serif italic">
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
                                    className="glass-card p-4 text-center"
                                >
                                    <div
                                        className="text-2xl font-bold text-[var(--color-primary)]"
                                        style={{ fontFamily: 'var(--font-oswald)' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <a href="https://chat.whatsapp.com/KCMrNnAQgBNBZaZ3WxorTm" target="_blank" className="capsule-btn w-full text-sm">
                                <span className="btn-text flex-1 text-center">Join Our Community</span>
                                <span className="btn-icon">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
