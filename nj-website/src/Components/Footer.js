'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Platform: [
            { name: 'Events', href: '/Events' },
            { name: 'Projects', href: '/Projects' },
            { name: 'About Us', href: '/About' },
            { name: 'Contact', href: '/Contact' }
        ],
        Community: [
            { name: 'Join Community', href: 'https://chat.whatsapp.com/KCMrNnAQgBNBZaZ3WxorTm' },
            // { name: 'Sign Up', href: '/Signup' },
            // { name: 'Login', href: '/Login' }
        ]
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/ninja-junction/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/ninja.junction',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com/@ninjajunction',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        },
        {
            name: 'Email',
            href: 'mailto:team@ninjajunction.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="relative z-[9999] bg-[var(--color-surface)] border-t border-black/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />

            {/* Full-Screen "Ready to Join" CTA Section */}
            <div className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

                {/* Background decorative elements */}
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />

                {/* Decorative pixel blocks — top-left */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
                    className="absolute top-[15%] left-[8%] flex flex-col gap-2"
                >
                    <div className="w-12 h-12 rounded bg-[var(--color-primary)] shadow-lg shadow-indigo-500/20" />
                    <div className="w-7 h-7 rounded bg-[var(--color-primary)]/70 ml-6" />
                </motion.div>

                {/* Decorative pixel blocks — bottom-right */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: 'spring', bounce: 0.4 }}
                    className="absolute bottom-[15%] right-[8%] flex flex-col items-end gap-2"
                >
                    <div className="w-7 h-7 rounded bg-[var(--color-primary)]/70 mr-6" />
                    <div className="w-12 h-12 rounded bg-[var(--color-primary)] shadow-lg shadow-indigo-500/20" />
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="bold-heading text-6xl md:text-8xl lg:text-9xl mb-6">
                        READY TO<br />JOIN THE<br />CREW?
                    </h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-[var(--color-text-secondary)] font-serif italic max-w-lg mx-auto mb-10"
                >
                    Be part of India&apos;s most vibrant student tech community
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button
                        onClick={() => window.open('https://chat.whatsapp.com/KCMrNnAQgBNBZaZ3WxorTm', '_blank')}
                        className="inline-block px-4 py-2 bg-[var(--color-primary)] text-white font-semibold text-base uppercase tracking-wider rounded-full hover:bg-[var(--color-primary-dark)] hover:shadow-[0_8px_24px_rgba(79,70,229,0.3)] hover:-translate-y-1 transition-all duration-300"
                        style={{ fontFamily: 'var(--font-oswald)' }}
                    >
                        Become a Member →
                    </button>
                </motion.div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logo-bg.svg"
                                    alt="Ninja Junction"
                                    width={48}
                                    height={48}
                                    className="drop-shadow-lg"
                                />
                                <div className="flex flex-col">
                                    <span
                                        className="text-2xl font-bold text-[var(--color-text-primary)]"
                                        style={{ fontFamily: 'var(--font-oswald)' }}
                                    >
                                        NinjaJunction
                                    </span>
                                    <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-widest -mt-0.5">
                                        Tech Community
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-[var(--color-text-secondary)] mb-6 max-w-md leading-relaxed">
                            Connecting students across India through tech, creativity, and collaboration.
                            Join our community to participate in events, hackathons, and build amazing projects together.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    className="w-11 h-11 rounded-full bg-black/[0.03] border border-black/8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3
                                className="text-[var(--color-primary)] font-bold text-sm mb-5 uppercase tracking-widest"
                                style={{ fontFamily: 'var(--font-oswald)' }}
                            >
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 inline-block text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[var(--color-text-secondary)] text-sm">
                            © {currentYear} Ninja Junction. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
