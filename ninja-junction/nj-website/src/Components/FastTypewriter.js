'use client';
import { useState, useEffect } from 'react';

export default function FastTypewriter({ text, className = '' }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, currentIndex + 1));
                setCurrentIndex(prev => prev + 1);
            }, 40); // 40ms per character - slower and more readable

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return <span className={className}>{displayedText}</span>;
}
