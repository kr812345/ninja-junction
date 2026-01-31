'use client';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import events, { pastEvents } from '../../../public/events';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import HolographicEventCard from '@/Components/HolographicEventCard';
import GlitchText from '@/Components/GlitchText';
import EventModal from '@/Components/EventModal';
import { useState } from 'react';

export default function Events() {
    const router = useRouter();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEventClick = (event) => {
        if (event.link) {
            router.push(event.link);
        } else {
            setSelectedEvent(event);
            setIsModalOpen(true);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedEvent(null), 300);
    }

    return (
        <main className="font-sans min-h-screen bg-[var(--color-background)] overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />

            <section className="pt-40 pb-16 px-44 not-sm:px-4 not-sm:pt-32 space-y-24 relative z-10">
                {/* Upcoming Events */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-left mb-12 relative text-white inline-block"
                    >
                        <GlitchText>Upcoming Events</GlitchText>
                        <div className="absolute w-full h-1 bg-gradient-to-r from-primary to-transparent -bottom-2 left-0 mt-4"></div>
                    </motion.h2>

                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {events.map((event) => (
                            <HolographicEventCard
                                key={event.id}
                                event={event}
                                onClick={() => handleEventClick(event)}
                            />
                        ))}
                    </div>
                </div>

                {/* Past Events */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-left mb-12 relative text-white inline-block"
                    >
                        <GlitchText>Past Events</GlitchText>
                        <div className="absolute w-full h-1 bg-gradient-to-r from-purple-500 to-transparent -bottom-2 left-0 mt-4"></div>
                    </motion.h2>

                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {pastEvents.map((event) => (
                            <HolographicEventCard
                                key={event.id}
                                event={event}
                                onClick={() => handleEventClick(event)}
                                isPast={true}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Modal */}
            <EventModal
                event={selectedEvent}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </main>
    );
}
