'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function EventCategories() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Phase 1 (0–0.3): Heading fades in
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.5], [0, 1, 1, 0]);
    const headingScale = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
    const headingY = useTransform(scrollYProgress, [0, 0.15], [60, 0]);

    // Phase 2 (0.3–0.9): Cards slide in from right, covering heading
    const cardsX = useTransform(scrollYProgress, [0.25, 0.75], ['100vw', '0vw']);
    const cardsOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

    // Card rotations — start tilted, straighten as they scroll in
    const cardRotate0 = useTransform(scrollYProgress, [0.25, 0.75], [-12, -4]);
    const cardRotate1 = useTransform(scrollYProgress, [0.25, 0.75], [8, 2]);
    const cardRotate2 = useTransform(scrollYProgress, [0.25, 0.75], [-8, -2]);
    const cardRotate3 = useTransform(scrollYProgress, [0.25, 0.75], [10, 3]);
    const cardRotations = [cardRotate0, cardRotate1, cardRotate2, cardRotate3];

    // Phase 3 (0.85–1.0): Bottom CTA fades in
    const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
    const ctaY = useTransform(scrollYProgress, [0.8, 0.95], [40, 0]);

    const categories = [
        {
            title: 'Workshops',
            description: 'Hands-on learning sessions to build practical skills',
            icon: '🛠️',
            link: '/Events?category=workshop',
            image: '/webdev-bootcamp.svg'
        },
        {
            title: 'Hackathons',
            description: 'Compete, collaborate, and create innovative solutions',
            icon: '💻',
            link: '/Events?category=hackathon',
            image: '/hackathon.svg'
        },
        {
            title: 'Meetups',
            description: 'Connect with like-minded students and build your network',
            icon: '🤝',
            link: '/Events?category=meetup',
            image: '/devfest.svg'
        },
        {
            title: 'Speaker Sessions',
            description: 'Learn from industry experts and thought leaders',
            icon: '🎤',
            link: '/Events?category=speaker',
            image: '/webinar.svg'
        }
    ];
    const rotations = [-4, 2, -2, 3];

    return (
        // Tall scroll container — gives enough scroll distance for the animation
        <section ref={containerRef} className="relative h-[300vh] bg-[var(--color-background)]">

            {/* Sticky viewport — stays pinned while user scrolls through the 300vh */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                {/* Background Effects */}
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

                {/* LAYER 1: Heading — centered, appears first */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center z-[1] px-6"
                    style={{ opacity: headingOpacity, scale: headingScale, y: headingY }}
                >
                    <h2 className="bold-heading text-5xl md:text-7xl lg:text-8xl mb-4 text-center">
                        EVENTS &<br />HACKATHONS
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] font-serif italic max-w-xl mx-auto text-center">
                        Unifying students across colleges through unforgettable experiences
                    </p>
                </motion.div>

                {/* LAYER 2: Cards — slide in from right, covering the heading */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-[5] px-6"
                    style={{ x: cardsX, opacity: cardsOpacity }}
                >
                    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                className="w-full sm:w-[280px] lg:w-[300px] flex-shrink-0"
                                style={{ rotate: cardRotations[index] }}
                            >
                                <Link href={category.link}>
                                    <motion.div
                                        whileHover={{
                                            rotate: 0,
                                            scale: 1.06,
                                            y: -10,
                                            zIndex: 10,
                                            transition: { duration: 0.35 }
                                        }}
                                        className="relative bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(79,70,229,0.12)] border-2 border-[#E2E8F0] cursor-pointer group"
                                    >
                                        {/* Image Section — inside padded frame */}
                                        <div className="relative h-52 overflow-hidden rounded-xl">
                                            <img
                                                src={category.image}
                                                alt={category.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Text Section */}
                                        <div className="pt-4 pb-1">
                                            <h3
                                                className="text-xl font-bold text-[var(--color-text-primary)] mb-1"
                                                style={{ fontFamily: 'var(--font-oswald)' }}
                                            >
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* LAYER 3: Bottom CTA — appears after cards settle */}
                <motion.div
                    className="absolute bottom-12 left-0 right-0 z-[10] text-center"
                    style={{ opacity: ctaOpacity, y: ctaY }}
                >
                    <Link href="/Events" className="capsule-btn text-sm mx-auto inline-flex">
                        <span className="btn-text">Explore All Events</span>
                        <span className="btn-icon">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
