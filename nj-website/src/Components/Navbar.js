'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [selected, setSelection] = useState('');

    const menus = [
        {name: 'Home', link: '/'},
        {name: 'Projects', link: '/Projects'},
        {name: 'Events', link: '/Events'},
        {name: 'Contact', link: '/Contact'},
        {name: 'About', link: '/About'},
    ]
    useEffect(() => {
        const path = window.location.pathname;
        const currentMenu = menus.find(menu => menu.link === path);
        if (currentMenu) {
            setSelection(currentMenu.name);
        }
    }, []);

    return (
        <div className="bg-white shadow-sm fixed w-full z-[10000]">
            <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 not-sm:max-w-[98%]">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-">
                            {/* <h1 className="text-xl font-bold gradient-text"> */}
                            <Link href={'/'}>
                                <Image
                                        src="./logo-bg.svg"
                                        alt="Ninja Junction Collaboration"
                                        width={24}
                                        height={24}
                                        className="object-fit  w-full h-full"
                                        />  
                            </Link>
                                    {/* </h1> */}
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {menus.map((menu) => (
                            <Link 
                                key={menu.name}
                                href={menu.link} 
                                className={`nav-link ${
                                    selected === menu.name 
                                        ? 'text-gray-900 border-b-2' 
                                        : 'text-gray-500 hover:text-gray-900'
                                } px-3 py-6 text-sm font-medium hover:border-b-2 transition tracking-wider`}
                                onClick={() => setSelection(menu.name)}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <Link href="/Login" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
                            Login
                        </Link>
                        <Link href="/Signup" className="text-white ml-4 gradient-bg bg-primary border border-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
