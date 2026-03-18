'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

// Pixel block config — position, size, delay for each decorative square
const PIXEL_BLOCKS = [
    // Top-left cluster
    { style: { top: '-12px', left: '-12px' }, size: 48, delay: 0.2 },
    { style: { top: '-12px', left: '42px' }, size: 28, delay: 0.35 },
    { style: { top: '42px', left: '-12px' }, size: 28, delay: 0.3 },
    { style: { top: '42px', left: '22px' }, size: 18, delay: 0.45 },
    // Bottom-right cluster
    { style: { bottom: '-12px', right: '-12px' }, size: 48, delay: 0.25 },
    { style: { bottom: '-12px', right: '42px' }, size: 28, delay: 0.4 },
    { style: { bottom: '42px', right: '-12px' }, size: 28, delay: 0.35 },
    { style: { bottom: '42px', right: '22px' }, size: 18, delay: 0.5 },
];

export default function ImageShowcase() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], [80, 0]);

    return (
        <section
            ref={containerRef}
            className="relative bg-[var(--color-background)] overflow-hidden"
        >
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[150px]" />

            {/* Image container with scroll-driven zoom — full screen */}
            <motion.div
                className="relative"
                style={{ scale, opacity }}
            >
                {/* The image frame */}
                <motion.div
                    className="relative overflow-hidden shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
                    style={{ borderRadius }}
                >
                    <img
                        src="/WhatsApp Image 2026-01-30 at 8.58.34 AM.jpeg"
                        alt="Ninja Junction Community"
                        className="w-full h-screen object-cover"
                    />

                    {/* Subtle gradient overlay for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

                    {/* Bottom caption bar */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/50 to-transparent"
                    >
                        <p
                            className="text-white text-lg md:text-2xl font-bold uppercase tracking-wider"
                            style={{ fontFamily: 'var(--font-oswald)' }}
                        >
                            Our Community in Action
                        </p>
                        <p className="text-white/70 text-sm mt-1">
                            Students across India building the future together
                        </p>
                    </motion.div>
                </motion.div>

                {/* Decorative pixel blocks */}
                {PIXEL_BLOCKS.map((block, i) => (
                    <motion.div
                        key={i}
                        className="absolute z-10"
                        style={{
                            ...block.style,
                            width: block.size,
                            height: block.size,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: block.delay,
                            type: 'spring',
                            bounce: 0.4,
                        }}
                    >
                        <div className="w-full h-full rounded-[4px] bg-[var(--color-primary)] shadow-lg shadow-indigo-500/20" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
