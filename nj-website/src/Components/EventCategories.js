'use client';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function EventCategories() {
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

    // Rotation angles for tilted card effect
    const rotations = [-4, 2, -2, 3];

    return (
        <section className="relative py-24 bg-[var(--color-background)] overflow-hidden vignette">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Heading — bold condensed */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="bold-heading text-4xl md:text-6xl lg:text-7xl mb-4">
                        EVENTS &<br />HACKATHONS
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] font-serif italic max-w-xl mx-auto">
                        Unifying students across colleges through unforgettable experiences
                    </p>
                </motion.div>

                {/* Tilted Card Carousel — MoM style */}
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-[-20px] items-center">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ y: 60, opacity: 0, rotate: rotations[index] }}
                            whileInView={{ y: 0, opacity: 1, rotate: rotations[index] }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="w-full sm:w-[280px] lg:w-[260px] flex-shrink-0"
                        >
                            <Link href={category.link}>
                                <motion.div
                                    whileHover={{
                                        rotate: 0,
                                        scale: 1.08,
                                        y: -12,
                                        zIndex: 10,
                                        transition: { duration: 0.35 }
                                    }}
                                    className="relative bg-[var(--color-cta-bg)] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
                                    style={{ transform: `rotate(${rotations[index]}deg)` }}
                                >
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Emoji overlay */}
                                        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-xl shadow-md">
                                            {category.icon}
                                        </div>
                                    </div>

                                    {/* Text Section */}
                                    <div className="p-5">
                                        <h3
                                            className="text-xl font-bold text-[var(--color-cta-text)] mb-2"
                                            style={{ fontFamily: 'var(--font-oswald)' }}
                                        >
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <h3 className="bold-heading text-3xl md:text-5xl mb-6">
                        PLUS MORE<br />(LOTS MORE)
                    </h3>
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
