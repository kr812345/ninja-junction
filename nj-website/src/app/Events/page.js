'use client';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import events from '../../../public/events';
import { motion } from 'framer-motion';

export default function Events() {
    return (
        <main className="font-sans min-h-screen">
            <section className="pt-40 pb-16 px-44 not-sm:px-4 not-sm:pt-32">
                <div className="">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-left mb-10 relative"
                    >
                        Upcoming Events
                        <div className="absolute w-20 h-1 bg-primary bottom-0 left-0 mt-2 -z-10"></div>
                    </motion.h2>

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                                    <p>{event.description}</p>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                        disabled={event.status === 'Unavailable'}
                                    >
                                        {event.status}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
