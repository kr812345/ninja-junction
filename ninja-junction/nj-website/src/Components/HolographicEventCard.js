'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from './MagneticButton';

export default function HolographicEventCard({ event, onClick, isPast = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={isPast ? onClick : undefined}
            className={`
                relative rounded-2xl overflow-hidden group
                ${isPast ? 'bg-slate-900/40 opacity-70 hover:opacity-100 cursor-pointer' : 'bg-slate-900/60'}
                border border-white/10 backdrop-blur-md
            `}
        >
            {/* Holographic Border Gradient on Hover */}
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Scanline Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent z-20 pointer-events-none"
                initial={{ y: '-100%' }}
                whileHover={{ y: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Image Container */}
            <div className={`relative w-full h-48 border-b border-white/5 ${isPast ? 'grayscale group-hover:grayscale-0' : ''} transition-all duration-500`}>
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className={`object-cover ${event.id === 2 && isPast ? 'object-top' : 'object-center'}`}
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />

                {/* Status Badge */}
                {!isPast && (
                    <div className={`
                        absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20
                        ${event.status === 'Unavailable'
                            ? 'bg-red-500/20 text-red-300 border-red-500/30'
                            : 'bg-green-500/20 text-green-300 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.3)]'}
                    `}>
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5 ${event.status === 'Unavailable' ? 'bg-red-400' : 'bg-green-400 animate-pulse'}`} />
                        {event.status}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 relative z-30">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {event.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {event.description}
                </p>

                {isPast ? (
                    <div className="w-full py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-sm font-medium text-center group-hover:bg-cyan-500/20 transition-all">
                        View Event Details
                    </div>
                ) : (
                    <MagneticButton
                        className={`
                            w-full py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all border flex items-center justify-center
                            ${event.status === 'Unavailable'
                                ? 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed'
                                : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]'}
                        `}
                        onClick={(e) => onClick(e, event.link)}
                        disabled={event.status === 'Unavailable'}
                    >
                        {event.status === 'Unavailable' ? 'Registration Closed' : 'Register Now'}
                    </MagneticButton>
                )}
            </div>
        </motion.div>
    );
}
