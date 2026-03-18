'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, useCallback } from 'react';

// Floating icon config — position + size for each decorative element
const FLOATING_ICONS = [
    // {
    //     src: '/ninja-pixel.svg',
    //     alt: 'Ninja shuriken',
    //     style: { top: '27%', right: '1%' },
    //     size: { w: 120, h: 120 },
    //     mdSize: 'w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]',
    //     baseRotate: -12,
    // },
    {
        src: '/code-pixel.svg',
        alt: 'NJ coin',
        style: { bottom: '-25%', left: '1%', zIndex: 12 },
        size: { w: 100, h: 100 },
        mdSize: 'w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]',
        baseRotate: -10,
    },
    {
        src: '/logo-bg.svg',
        alt: 'Ninja Junction logo',
        style: { top: '27%', right: '1%' },
        size: { w: 100, h: 100 },
        mdSize: 'w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]',
        baseRotate: 15,
    },
];

// Individual floating icon with its own resistive spring
function FloatingIcon({ icon, index, containerRef }) {
    const ref = useRef(null);
    const motionX = useMotionValue(0);
    const motionY = useMotionValue(0);
    const springX = useSpring(motionX, { stiffness: 150, damping: 20, mass: 0.5 });
    const springY = useSpring(motionY, { stiffness: 150, damping: 20, mass: 0.5 });

    const updateFromMouse = useCallback((mx, my) => {
        const el = ref.current;
        const container = containerRef.current;
        if (!el || !container) return;

        const rect = container.getBoundingClientRect();
        const iconRect = el.getBoundingClientRect();
        const iconCX = iconRect.left + iconRect.width / 2 - rect.left;
        const iconCY = iconRect.top + iconRect.height / 2 - rect.top;

        const dx = mx - rect.left - iconCX;
        const dy = my - rect.top - iconCY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const radius = 250;
        const maxPush = 35;

        if (distance < radius && distance > 0) {
            const strength = Math.pow(1 - distance / radius, 2);
            motionX.set(-(dx / distance) * strength * maxPush);
            motionY.set(-(dy / distance) * strength * maxPush);
        } else {
            motionX.set(0);
            motionY.set(0);
        }
    }, [motionX, motionY, containerRef]);

    if (ref.current) {
        ref.current._updateFromMouse = updateFromMouse;
    }

    return (
        <motion.div
            ref={(el) => {
                ref.current = el;
                if (el) el._updateFromMouse = updateFromMouse;
            }}
            className={`hero-floating-icon ${icon.mdSize}`}
            data-floating-icon={index}
            style={{
                ...icon.style,
                x: springX,
                y: springY,
            }}
            initial={{ scale: 0, rotate: icon.baseRotate * 2 }}
            animate={{ scale: 1, rotate: icon.baseRotate }}
            transition={{ duration: 0.7, delay: 0.4 + index * 0.15, type: 'spring', bounce: 0.4 }}
        >
            <Image
                src={icon.src}
                alt={icon.alt}
                width={icon.size.w}
                height={icon.size.h}
                className="w-full h-full object-contain"
                priority
            />
        </motion.div>
    );
}

export default function Hero() {
    const containerRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const container = containerRef.current;
        if (!container) return;

        const icons = container.querySelectorAll('[data-floating-icon]');
        icons.forEach((iconEl) => {
            if (iconEl._updateFromMouse) {
                iconEl._updateFromMouse(e.clientX, e.clientY);
            }
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const icons = container.querySelectorAll('[data-floating-icon]');
        icons.forEach((iconEl) => {
            if (iconEl._updateFromMouse) {
                iconEl._updateFromMouse(-9999, -9999);
            }
        });
    }, []);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[var(--color-background)]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* ============================================
                LAYERED Z-AXIS STRUCTURE (MoMoney style):
                z-1  = Back heading line ("ONE PLATFORM")
                z-5  = Floating icons + hero image (middle)
                z-10 = Front heading line ("FOR _ STUDENTS")
                z-15 = Subtitle + CTA (topmost)
               ============================================ */}

            {/* Premium crystal grid background */}
            <div className="absolute inset-0 z-0">
                {/* Square grid pattern */}
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

                {/* Ambient gradient orbs */}
                <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-indigo-500/[0.12] rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/[0.10] rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-indigo-400/[0.08] rounded-full blur-[80px]" />

                {/* Radial vignette — fades grid at edges */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 40%, var(--color-background) 80%)',
                    }}
                />

                {/* Fine dot grid overlay for extra texture */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col items-center text-center"
                >
                    {/* === HEADING AREA — stacked layers === */}
                    <div className="relative mb-6 w-full">

                        {/* BACK LAYER (z-1): First line of heading */}
                        <motion.div
                            className="relative z-[1]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h1 className="bold-heading-xl">
                                ONE PLATFORM
                            </h1>
                        </motion.div>

                        {/* MIDDLE LAYER (z-15): Floating icons sit here ABOVE heading lines */}
                        <div className="absolute inset-0 z-[15] pointer-events-none">
                            {FLOATING_ICONS.map((icon, i) => (
                                <FloatingIcon
                                    key={icon.alt}
                                    icon={icon}
                                    index={i}
                                    containerRef={containerRef}
                                />
                            ))}
                        </div>

                        {/* Hero image — also in middle layer */}
                        <motion.div
                            className="relative z-[5] flex justify-center -mt-10 mb-[-3.5rem] md:-mt-14 md:mb-[-5.5rem]"
                            initial={{ rotate: -10, scale: 0 }}
                            animate={{ rotate: -5, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                        >
                            <Image
                                src="/hero.svg"
                                alt="Tech illustration"
                                width={280}
                                height={160}
                                className="rounded-xl object-cover w-[180px] h-[100px] md:w-[280px] md:h-[160px] shadow-lg shadow-black/10"
                            />
                        </motion.div>

                        {/* FRONT LAYER (z-10): Second line of heading — on top of images */}
                        <motion.div
                            className="relative z-[10]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <h2 className="bold-heading-xl">
                                FOR STUDENTS
                            </h2>
                        </motion.div>
                    </div>

                    {/* Subtitle (z-15) — clean sans-serif */}
                    <motion.p
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative z-[15] text-base lg:text-lg text-[var(--color-text-secondary)] font-sans max-w-lg leading-relaxed mb-8 font-medium"
                    >
                        Connecting students across India through tech,
                        creativity, and collaboration
                    </motion.p>

                    {/* CTA Buttons (z-15) */}
                    <motion.div
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative z-[15] flex flex-col sm:flex-row gap-3 items-center"
                    >
                        <Link href="https://chat.whatsapp.com/KCMrNnAQgBNBZaZ3WxorTm" target="_blank" className="capsule-btn capsule-btn-lg">
                            <span className="btn-text">Join Community</span>
                            <span className="btn-icon">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                        <Link
                            href="/Events"
                            className="nav-pill !py-2.5 !px-6 text-center"
                        >
                            Explore Events
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Small decorative green rectangle — bottom right */}
            <motion.div
                className="absolute bottom-12 right-8 w-8 h-12 bg-[var(--color-surface)] rounded-sm hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            />
        </section>
    );
}
