'use client';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import events, { pastEvents } from '../../../public/events';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Events() {
    const router = useRouter();

    const handleRedirect = (e, link) => {
        e.preventDefault();
        router.push(link);
    }

    return (
        <main className="font-sans min-h-screen bg-[var(--color-background)]">
            <section className="pt-40 pb-16 px-44 not-sm:px-4 not-sm:pt-32 space-y-16">
                <div className="">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-left mb-10 relative"
                    >
                        Upcoming Events
                        <div className="absolute w-20 h-1 bg-primary -bottom-2 left-0 mt-4 -z-10"></div>
                    </motion.h2>

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="relative w-full h-48 border-2 rounded-2xl border-gray-200">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-contain px-2 object-center"
                                    />
                                </div>
                                <div className="p-6 relative">
                                    <h3 className="text-2xl font-semibold mb-2 line-clamp-1">{event.title}</h3>
                                    <p className='line-clamp-4'>{event.description}</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4 mb-0 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
                                        onClick={(e) => handleRedirect(e, event.link)}
                                        disabled={event.status === 'Unavailable'}
                                    >
                                        {event.status}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-left mb-10 relative"
                    >
                        Past Events
                        <div className="absolute w-20 h-1 bg-primary -bottom-1 left-0 mt-2 -z-10"></div>
                    </motion.h2>

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="relative w-full h-48 border-2 rounded-2xl overflow-clip border-gray-200">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className={`object-cover px-0  ${event.id === 2 ? 'object-top' : 'object-center'}`}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                                    <p className='line-clamp-4'>{event.description}</p>
                                    <motion.button
                                        className="mt-4 inline-block bg-primary/70 text-white px-4 py-2 rounded-lg "
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
