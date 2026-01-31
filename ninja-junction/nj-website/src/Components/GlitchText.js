'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlitchText({ children, className = '' }) {
    const [isGlitching, setIsGlitching] = useState(false);
    const [displayText, setDisplayText] = useState(children);

    const chars = 'アイウエオカキクケコ!@#$%^&*()_+-=[]{}|;:,.<>?01';

    const scramble = () => {
        const originalText = children;
        let iterations = 0;
        const maxIterations = originalText.length;

        const interval = setInterval(() => {
            setDisplayText(
                originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            iterations += 1 / 3;

            if (iterations >= maxIterations) {
                clearInterval(interval);
                setDisplayText(originalText);
                setIsGlitching(false);
            }
        }, 30);
    };

    useEffect(() => {
        // Initial scramble on mount
        scramble();
    }, []);

    return (
        <motion.span
            className={`relative inline-block ${className}`}
            onMouseEnter={() => {
                if (!isGlitching) {
                    setIsGlitching(true);
                    scramble();
                }
            }}
            style={{ cursor: 'default' }}
        >
            {displayText}
            {isGlitching && (
                <>
                    <span
                        className="absolute top-0 left-0 text-cyan-400 opacity-70"
                        style={{ transform: 'translate(-2px, -2px)' }}
                    >
                        {displayText}
                    </span>
                    <span
                        className="absolute top-0 left-0 text-red-400 opacity-70"
                        style={{ transform: 'translate(2px, 2px)' }}
                    >
                        {displayText}
                    </span>
                </>
            )}
        </motion.span>
    );
}
