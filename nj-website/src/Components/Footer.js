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
            { name: 'Join Community', href: '/Join' },
            { name: 'Sign Up', href: '/Signup' },
            { name: 'Login', href: '/Login' }
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
            href: 'https://www.instagram.com/ninja.junction?igsh=NTc4MTIwNjQ2YQ==',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com/@ninjajunction?si=pbMrPCg2ORafmb5y',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="relative bg-[var(--color-surface)] border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

            {/* Top CTA Section — MoM "PLUS MORE" style */}
            <div className="relative py-20 text-center">
                <h2
                    className="bold-heading-xl mb-8"
                >
                    READY TO<br />JOIN THE CREW?
                </h2>
                <Link href="/Join" className="capsule-btn text-sm mx-auto">
                    <span className="btn-text">Become a Member</span>
                    <span className="btn-icon">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </Link>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-white/5">
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
                            Connecting students across Delhi colleges through tech, creativity, and collaboration.
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
                                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-300"
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
                <div className="pt-8 border-t border-white/5">
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
