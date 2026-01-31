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
    const [IsVisible, setIsVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const path = usePathname();

    const menus = [
        { name: 'Home', link: '/' },
        { name: 'Events', link: '/Events' },
        { name: 'Collaborations', link: '/Collaborations' },
        { name: 'About', link: '/About' },
        { name: 'Contact', link: '/Contact' },
    ]

    useEffect(() => {
        const currentMenu = menus.find(menu => menu.link === path);
        if (currentMenu) {
            setSelection(currentMenu.name);
        }

        // Scroll effect
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [path]);

    const handleMenu = (e) => {
        e.preventDefault();
        setIsVisible(p => !p);
    }

    const handleSelection = (e, menu) => {
        e.preventDefault();
        e.stopPropagation();
        setSelection(menu.name);
        setIsVisible(false);
    }

    return (
        <>
            {/* Premium Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`fixed w-full z-[10000] transition-all duration-500 ${scrolled
                    ? 'bg-slate-900/80 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl shadow-primary/5'
                    : 'bg-slate-900/60 backdrop-blur-xl border-b border-slate-800/30'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo Section */}
                        <Link href={'/'} className="flex items-center space-x-3 group">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <Image
                                    src="/logo-bg.svg"
                                    alt="Ninja Junction"
                                    width={40}
                                    height={40}
                                    className="relative object-contain"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className='text-xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent'>
                                    Ninja Junction
                                </span>
                                <span className='text-[10px] text-slate-400 font-medium tracking-wider'>
                                    UNIFYING STUDENTS
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {menus.map((menu) => (
                                <Link
                                    key={menu.name}
                                    href={menu.link}
                                    onClick={() => setSelection(menu.name)}
                                    className="relative px-4 py-2 group"
                                >
                                    <span className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${selected === menu.name
                                        ? 'text-white'
                                        : 'text-slate-400 group-hover:text-slate-200'
                                        }`}>
                                        {menu.name}
                                    </span>

                                    {/* Active indicator */}
                                    {selected === menu.name && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg border border-primary/30"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}

                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Bottom indicator */}
                                    {selected === menu.name && (
                                        <motion.div
                                            layoutId="bottomIndicator"
                                            className="absolute -bottom-5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-cyan-500"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:flex items-center">
                            <Link href="/Join">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-6 py-2.5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium text-sm overflow-hidden group"
                                >
                                    <span className="relative z-10">Join Community</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleMenu}
                            className='md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 transition-colors'
                        >
                            <AnimatePresence mode="wait">
                                {IsVisible ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <IoCloseOutline className='text-2xl text-slate-200' />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <IoIosMenu className='text-2xl text-slate-200' />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {IsVisible && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-2xl"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {menus.map((menu, i) => (
                                    <motion.div
                                        key={menu.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={menu.link}
                                            onClick={(e) => handleSelection(e, menu)}
                                            className={`block px-4 py-3 rounded-lg transition-all duration-300 ${selected === menu.name
                                                ? 'bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-white'
                                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                                                }`}
                                        >
                                            <span className="font-medium">{menu.name}</span>
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: menus.length * 0.1 }}
                                    className="pt-4"
                                >
                                    <Link href="/Join">
                                        <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium text-sm">
                                            Join Community
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Spacer to prevent content from going under fixed navbar */}
            <div className="h-20"></div>

            <Toaster position='top-center' reverseOrder={false} />
        </>
    );
}