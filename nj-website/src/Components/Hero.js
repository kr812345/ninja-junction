'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="home" 
            className="h-screen bg-white flex items-center pb-12 not-md:pt-40 md:pb-20 "
        >
            <div className="max-w-[85%] mx-auto sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col space-y-1 sm:text-center md:max-w-2xl lg:col-span-6 lg:text-left"
                    >
                        <h1 className="text-6xl tracking-tight font-extrabold text-gray-900 md:text-6xl">
                            <motion.span 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="block text-7xl not-sm:text-4xl "
                            >
                                Collaborate.
                            </motion.span>
                            <motion.span 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="block text-7xl not-sm:text-4xl "
                            >
                                Contribute. Create.
                            </motion.span>
                            <motion.span 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="block gradient-text text-7xl not-sm:text-4xl "
                            >
                                Innovate Together.
                            </motion.span>
                        </h1>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg not-sm:tracking-tight sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                        >
                            The ultimate platform for students to find collaborators, share ideas, and work on projects
                            together. Connect with like-minded peers across disciplines.
                        </motion.p>
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                        >
                            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                                <Link href="/Signup"
                                    className="gradient-bg font-semibold text-white bg-primary px-9 py-3 rounded-md text-base hover:bg-opacity-90 transition w-full sm:w-auto text-center">
                                    Get Started
                                </Link>
                                <Link href="/Projects"
                                    className="text-primary px-6 py-3 rounded-md text-base font-medium border border-primary hover:bg-gray-50 transition sm:w-auto text-center">
                                    Explore Projects
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 relative lg:mt-0 lg:col-span-6 flex justify-center not-sm:mt-8"
                    >
                        <div className="relative mx-auto bg-primary w-[80%] rounded-lg shadow-lg overflow-hidden not-sm:w-[100%] not-sm:h-[200px]">
                            <div className="gradient-bg h-full w-full p-2 not-sm:p-1">
                                <div className="bg-white rounded-t-lg p-4">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <Image
                                    src="./hero.svg"
                                    alt="Diverse group of students collaborating on a project in a modern university workspace"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-b-lg"
                                />
                            </div>
                            <motion.div 
                                animate={{ 
                                    rotate: [0, 5, -5, 0],
                                    transition: { duration: 5, repeat: Infinity }
                                }}
                                className="absolute -bottom-8 -left-8 bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded- w-32 h-32 z-0 not-sm:w-22 not-sm:h-22"
                            />
                            <motion.div 
                                animate={{ 
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 5, repeat: Infinity }
                                }}
                                className="absolute -top-8 -right-8 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 rounded- w-32 h-32 z-0 not-sm:w-22 not-sm:h-22"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
