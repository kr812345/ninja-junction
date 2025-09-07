'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-xl font-bold gradient-text">Ninja Junction</h1>
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        <Link href="/" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/Projects" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Projects
                        </Link>
                        <Link href="/Events" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Events
                        </Link>
                        <Link href="/Contact" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Contact
                        </Link>
                        <Link href="/About" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            About
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/Login" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            Login
                        </Link>
                        <Link href="/Signup" className="ml-4 gradient-bg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
