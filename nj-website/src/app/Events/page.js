'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

export default function Events() {
    const router = useRouter();
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
                const res = await fetch(`${API_URL}/events`);
                if (!res.ok) throw new Error('Network err');
                const data = await res.json();
                const fetchedEvents = Array.isArray(data) ? data : data.events || [];
                
                const upcoming = [];
                const past = [];
                const now = new Date();
                
                fetchedEvents.forEach(ev => {
                    // Treat timestamp as cutoff
                    if (new Date(ev.timestamp) > now) {
                        upcoming.push(ev);
                    } else {
                        past.push(ev);
                    }
                });

                // Closest upcoming first
                upcoming.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp));
                // Most recent past first
                past.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
                
                setUpcomingEvents(upcoming);
                setPastEvents(past);
            } catch(e) {
                console.error("Failed to fetch events", e);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const handleRedirect = (e, link) => {
        e.preventDefault();
        if (link) router.push(link);
    }

    return (
        <main className="font-sans min-h-screen bg-[var(--color-background)] relative overflow-hidden">
            {/* Premium crystal grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #4F46E5 1px, transparent 1px),
                            linear-gradient(to bottom, #4F46E5 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-indigo-500/[0.12] rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/[0.10] rounded-full blur-[100px]" />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 40%, var(--color-background) 80%)',
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>

            <section className="relative z-10 pt-40 pb-24 px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
                {/* UPCOMING EVENTS */}
                <div className="">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bold-heading text-5xl md:text-7xl mb-12 text-center md:text-left"
                    >
                        UPCOMING EVENTS
                        <div className="w-24 h-1 bg-[var(--color-primary)] mt-6 mx-auto md:mx-0"></div>
                    </motion.h2>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
                        </div>
                    ) : upcomingEvents.length === 0 ? (
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 text-center border border-white/5 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-2">No Upcoming Events</h3>
                            <p className="text-gray-400">Stay tuned to our socials! New exciting opportunities are just around the corner.</p>
                        </div>
                    ) : (
                        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <AnimatePresence>
                                {upcomingEvents.map((event, index) => (
                                    <motion.div
                                        key={event._id || index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="bg-white/80 backdrop-blur-md p-2 text-[var(--color-text-primary)] rounded-3xl border border-black/5 shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] transition-all duration-300 flex flex-col group relative overflow-hidden"
                                    >
                                        <div className="relative w-full h-48 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl overflow-hidden border border-black/5">
                                            {event.image ? (
                                                <img
                                                    src={event.image}
                                                    alt={event.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-indigo-500/10 text-indigo-500/40">
                                                    <FiCalendar className="text-5xl" />
                                                </div>
                                            )}
                                            {/* Subtle gradient overlay to premiumize images */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <div className="p-4 sm:p-5 flex flex-col flex-1">
                                            <h3 className="text-2xl font-bold mb-3 line-clamp-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">{event.name}</h3>
                                            
                                            <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3 bg-indigo-500/10 px-3 py-1.5 rounded-lg w-fit">
                                                <FiClock />
                                                <span>{new Date(event.timestamp).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>

                                            <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-6 flex-1 text-sm">{event.description}</p>
                                            
                                            {event.sponsor && (
                                                <div className="mb-4 pt-4 border-t border-black/5">
                                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-1">Sponsored By</span>
                                                    <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">{event.sponsor}</span>
                                                </div>
                                            )}

                                            <div className="mt-auto">
                                                <button
                                                    className="w-full inline-block px-4 py-3.5 bg-[var(--color-primary)] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:bg-[var(--color-primary-dark)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 outline-none"
                                                >
                                                    Register Now
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {/* PAST EVENTS */}
                <div className="">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bold-heading text-5xl md:text-7xl mb-12 text-center md:text-left"
                    >
                        PAST EVENTS
                        <div className="w-24 h-1 bg-[var(--color-primary)] mt-6 mx-auto md:mx-0"></div>
                    </motion.h2>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                        </div>
                    ) : pastEvents.length === 0 ? (
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 text-center border border-white/5 shadow-xl">
                            <p className="text-gray-400">No past events recorded yet.</p>
                        </div>
                    ) : (
                        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <AnimatePresence>
                                {pastEvents.map((event, index) => (
                                    <motion.div
                                        key={event._id || index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="bg-white/60 backdrop-blur-md p-2 text-[var(--color-text-primary)] rounded-3xl border border-black/5 shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-2 grayscale hover:grayscale-0 transition-all duration-500 flex flex-col group"
                                    >
                                        <div className="relative w-full h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border border-black/5">
                                            {event.image ? (
                                                <img
                                                    src={event.image}
                                                    alt={event.name}
                                                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                                    <FiCalendar className="text-4xl" />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                        </div>
                                        <div className="p-4 sm:p-5 flex flex-col flex-1">
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-slate-800 transition-colors duration-300 line-clamp-1">{event.name}</h3>
                                            
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                                                <FiClock />
                                                <span>{new Date(event.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                            </div>

                                            <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 flex-1 text-sm">{event.description}</p>
                                            
                                            <div className="mt-6">
                                                <button
                                                    className="w-full inline-block px-4 py-3.5 bg-slate-200 text-slate-500 font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm cursor-not-allowed"
                                                    disabled={true}
                                                >
                                                    Completed
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
