'use client';
import { motion } from 'motion/react';

export default function Marquee() {
    const items = [
        'HACK', 'BUILD', 'CREATE', 'CONNECT', 'INNOVATE',
        'COLLABORATE', 'LEARN', 'COMPETE', 'GROW', 'SHIP'
    ];

    // Double the items for seamless loop
    const track = [...items, ...items];

    return (
        <section className="relative py-6 bg-[var(--color-surface)] overflow-hidden border-y border-white/5">
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div 
                    className="flex shrink-0 min-w-full"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {track.map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-8 px-8"
                        >
                            <span
                                className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] opacity-90 whitespace-nowrap"
                                style={{ fontFamily: 'var(--font-oswald)' }}
                            >
                                {item}
                            </span>
                            <span className="text-[var(--color-accent-pink)] text-2xl">✦</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
