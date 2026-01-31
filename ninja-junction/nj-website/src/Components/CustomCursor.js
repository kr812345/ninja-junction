'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ hide = false }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const updateCursorType = (e) => {
            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.onclick !== null
            );
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', updateCursorType);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', updateCursorType);
        };
    }, []);

    if (hide) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    background: 'radial-gradient(circle, #00E5FF 0%, #00B8D4 100%)',
                    boxShadow: '0 0 20px #00E5FF, 0 0 40px #00E5FF',
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    x: -8,
                    y: -8,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />

            {/* Outer ring */}
            <motion.div
                className="fixed w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-[9998] mix-blend-screen"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                animate={{
                    scale: isPointer ? 2 : 1,
                    x: -16,
                    y: -16,
                    opacity: isPointer ? 0.5 : 0.8,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            />

            {/* Trail particles */}
            <motion.div
                className="fixed w-2 h-2 rounded-full pointer-events-none z-[9997] bg-cyan-400/50"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                animate={{
                    x: -4,
                    y: -4,
                    opacity: [0.5, 0],
                    scale: [1, 0],
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            />
        </>
    );
}
