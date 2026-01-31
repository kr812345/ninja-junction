'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';

export default function EventModal({ event, isOpen, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Filter out empty strings from images array
    const validImages = event?.images?.filter(img => img && img.trim() !== '') || [];

    // Reset image index when event changes or modal opens
    useEffect(() => {
        if (isOpen && event) {
            setCurrentImageIndex(0);
        }
    }, [isOpen, event]);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === validImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? validImages.length - 1 : prev - 1
        );
    };

    if (!event) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        style={{ zIndex: 2147483646 }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 flex items-center justify-center p-4"
                        style={{ zIndex: 2147483647 }}
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
                            style={{ cursor: 'auto' }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/50 transition-all group"
                            >
                                <IoClose className="text-2xl text-slate-400 group-hover:text-cyan-400" />
                            </button>

                            {/* Content */}
                            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                                {/* Image Gallery */}
                                {validImages.length > 0 && validImages[currentImageIndex] && (
                                    <div className="relative w-full h-[400px] bg-slate-950">
                                        <Image
                                            src={validImages[currentImageIndex]}
                                            alt={event.title}
                                            fill
                                            className="object-contain"
                                        />

                                        {/* Image Navigation */}
                                        {validImages.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/50 transition-all"
                                                >
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/50 transition-all"
                                                >
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>

                                                {/* Image Counter */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full border border-white/10">
                                                    <span className="text-sm text-white font-medium">
                                                        {currentImageIndex + 1} / {validImages.length}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                {/* Event Details */}
                                <div className="p-8">
                                    <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                                        {event.title}
                                    </h2>

                                    <div className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                                        <span className="text-sm font-semibold text-cyan-400">
                                            {event.status}
                                        </span>
                                    </div>

                                    <p className="text-lg text-slate-300 leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
