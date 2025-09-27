'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import { Toaster } from "react-hot-toast";

export default function Navbar() {
    const [selected, setSelection] = useState('');
    const [IsVisible, setIsVisible] = useState(false);
    const path = usePathname(); 
    const Router = useRouter();
    const menus = [
        {name: 'Home', link: '/'},
        // {name: 'Projects', link: '/Projects'},
        {name: 'Events', link: '/Events'},
        {name: 'Contact', link: '/Contact'},
        {name: 'About', link: '/About'},
        // {name: 'Join', link: '/Join'},
    ]
    useEffect(() => {
        // const path = window.location.pathname;
        const currentMenu = menus.find(menu => menu.link === path);
        if (currentMenu) {
            setSelection(currentMenu.name);
        }
    }, []);

    const handleMenu = (e) => {
        e.preventDefault();
        setIsVisible(p=>!p);
    } 

    const handleSelection = (e, menu) => {
        e.preventDefault();
        e.stopPropagation();
        setSelection(menu.name);
        setIsVisible(p=>!p);
    }

    return (
        <div className="bg-white shadow-sm fixed w-full z-[10000]">
            <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 not-sm:max-w-[98%]">
                <div className="flex justify-between itemc h-16">
                    <div className="flex">
                        <div className="relative flex items-center">
                            {/* <h1 className="text-xl font-bold gradient-text"> */}
                            <Link href={'/'}>
                                <Image
                                        src="./logo-bg.svg"
                                        alt="Ninja Junction Collaboration"
                                        width={24}
                                        height={24}
                                        className="object-fit h-10 w-10"
                                        />  
                            </Link>
                                <span className='text-lg font-semibold text-gray-900'>Ninja Junction</span>
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
                    <div className='md:hidden'>
                        <div className='h-full w-fit flex items-center justify-center'>
                            { IsVisible ? <IoCloseOutline onClick={e=>handleMenu(e)} className='text-4xl' /> : <IoIosMenu onClick={e=>handleMenu(e)} className='text-4xl'/>
                            }
                        </div>
                        {IsVisible && <div className='fixed left-0 h-fit w-screen'>
                                        <motion.ul 
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className=" flex flex-col bg-gray-100/40 h-screen p-4"
                                            onClick={(e)=>handleMenu(e)}
                                            >
                                            {menus.map((menu,i) => (
                                                <motion.li
                                                key={menu.name}  
                                                custom={i}
                                                variants={{
                                                    visible: (i) => ({
                                                        opacity: 1,
                                                        delay: 0.2,
                                                        transition: i*0.1
                                                    })
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                // className="p-2 rounded-md bg-white shadow"
                                                className={`nav-link ${
                                                selected === menu.name 
                                                ? 'text-gray-900 border-b-2' 
                                                : 'text-gray-500 hover:text-gray-900 border-none'
                                                } px-4 py-6 text-md font-medium hover:border-b-2 transition tracking-wider bg-gray-100`}
                                                onClick={(e) => handleSelection(e, menu)}
                                                >
                                                    <Link href={menu.link} className=''>
                                                    {menu.name}
                                                    </Link>
                                            </motion.li>
                                                
                                            ))}
                                        </motion.ul>
                                      </div>}
                    </div>
                    <div className="flex items-center not-sm:hidden">
                        {/* <Link href="/Join" className="border border-primary text-primary px-3 py-2 text-sm font-medium">
                            Join
                        </Link> */}
                        <Link href="/Join" className="text-white ml-4 gradient-bg bg-primary hover:bg-white hover:text-primary tracking-large border border-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-50 transition">
                            Join
                        </Link>
                    </div>
                </div>
            </div>
            <Toaster position='top-center' reverseOrder={false}/>
        </div>
    );
}