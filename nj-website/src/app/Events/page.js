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

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white/80 backdrop-blur-md p-2 text-[var(--color-text-primary)] rounded-3xl border border-black/5 shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] transition-all duration-300 flex flex-col group"
                            >
                                <div className="relative w-full h-48 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl overflow-hidden border border-black/5">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover sm:object-contain p-2 sm:p-4 object-center group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Subtle gradient overlay to premiumize images */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4 sm:p-5 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold mb-3 line-clamp-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">{event.title}</h3>
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-4 flex-1">{event.description}</p>
                                    <div className="mt-6">
                                        <button
                                            className="w-full inline-block px-4 py-3.5 bg-[var(--color-primary)] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:bg-[var(--color-primary-dark)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:shadow-md"
                                            onClick={(e) => handleRedirect(e, event.link)}
                                            disabled={event.status === 'Unavailable'}
                                        >
                                            {event.status}
                                        </button>
                                    </div>
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
                        className="bold-heading text-5xl md:text-7xl mb-12 text-center md:text-left"
                    >
                        PAST EVENTS
                        <div className="w-24 h-1 bg-[var(--color-primary)] mt-6 mx-auto md:mx-0"></div>
                    </motion.h2>

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white/60 backdrop-blur-md p-2 text-[var(--color-text-primary)] rounded-3xl border border-black/5 shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-2 grayscale hover:grayscale-0 transition-all duration-500 flex flex-col group"
                            >
                                <div className="relative w-full h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border border-black/5">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className={`object-cover ${event.id === 2 ? 'object-top' : 'object-center'} mix-blend-multiply group-hover:scale-105 transition-transform duration-500`}
                                    />
                                    <div className="absolute inset-0 bg-black/5"></div>
                                </div>
                                <div className="p-4 sm:p-5 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-slate-800 transition-colors duration-300">{event.title}</h3>
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-4 flex-1">{event.description}</p>
                                    <div className="mt-6">
                                        <button
                                            className="w-full inline-block px-4 py-3.5 bg-slate-200 text-slate-500 font-bold text-sm uppercase tracking-wider rounded-xl shadow-sm cursor-not-allowed"
                                            disabled={true}
                                        >
                                            {event.status}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
