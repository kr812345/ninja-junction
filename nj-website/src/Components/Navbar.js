'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { Toaster } from "react-hot-toast";

export default function Navbar() {
    const [selected, setSelection] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const path = usePathname();

    const menus = [
        { name: 'Home', link: '/' },
        { name: 'Events', link: '/Events' },
        { name: 'Contact', link: '/Contact' },
        { name: 'About', link: '/About' },
    ];

    useEffect(() => {
        const currentMenu = menus.find(menu => menu.link === path);
        if (currentMenu) {
            setSelection(currentMenu.name);
        }
    }, [path]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenu = (e) => {
        e.preventDefault();
        setIsVisible(p => !p);
    };

    const handleSelection = (e, menu) => {
        e.preventDefault();
        e.stopPropagation();
        setSelection(menu.name);
        setIsVisible(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed w-full z-[10000] transition-all duration-500 ${
                scrolled
                    ? 'bg-[#1A1726]/90 backdrop-blur-xl border-b border-purple-500/5 shadow-sm'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[92%] mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Left — Compact Nav Pills (MoM style) */}
                    <div className="hidden md:flex items-center gap-1.5">
                        {menus.map((menu) => (
                            <Link
                                key={menu.name}
                                href={menu.link}
                                className={`nav-pill ${selected === menu.name ? 'active' : ''}`}
                                onClick={() => setSelection(menu.name)}
                            >
                                {menu.name}
                            </Link>
                        ))}
                        <button className="nav-pill flex items-center justify-center !px-2.5 !py-1.5">
                            <span className="text-xs tracking-[0.15em]">•••</span>
                        </button>
                    </div>

                    {/* Center — Logo */}
                    <Link href="/" className="flex items-center gap-2 group absolute left-1/2 -translate-x-1/2">
                        <Image
                            src="/logo-bg.svg"
                            alt="Ninja Junction"
                            width={28}
                            height={28}
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex flex-col leading-none">
                            <span
                                className="text-base font-bold text-[var(--color-text-primary)] tracking-wide"
                                style={{ fontFamily: 'var(--font-oswald)' }}
                            >
                                NinjaJunction
                            </span>
                            <span className="text-[0.5rem] text-[var(--color-text-secondary)] uppercase tracking-[0.25em] mt-0.5">
                                Tech Community
                            </span>
                        </div>
                    </Link>

                    {/* Right — Compact CTA */}
                    <div className="hidden md:flex items-center">
                        <Link href="/Join" className="capsule-btn">
                            <span className="btn-text">Join Us</span>
                            <span className="btn-icon">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile — Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={handleMenu}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/8 text-[var(--color-text-primary)]"
                        >
                            {isVisible
                                ? <IoCloseOutline className="text-xl" />
                                : <IoIosMenu className="text-xl" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 top-16 bg-[#13111C]/95 backdrop-blur-2xl z-[9999]"
                        onClick={handleMenu}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-5 -mt-16">
                            {menus.map((menu, i) => (
                                <motion.div
                                    key={menu.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3 }}
                                >
                                    <Link
                                        href={menu.link}
                                        className={`text-2xl font-bold uppercase tracking-wider transition-colors ${
                                            selected === menu.name
                                                ? 'text-[var(--color-primary)]'
                                                : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                                        }`}
                                        style={{ fontFamily: 'var(--font-oswald)' }}
                                        onClick={(e) => handleSelection(e, menu)}
                                    >
                                        {menu.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: menus.length * 0.06, duration: 0.3 }}
                                className="mt-3"
                            >
                                <Link href="/Join" className="capsule-btn">
                                    <span className="btn-text">Join Us</span>
                                    <span className="btn-icon">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Toaster position="top-center" reverseOrder={false} />
        </motion.nav>
    );
}