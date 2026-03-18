'use client';
import { useEffect, useRef } from 'react';

const TRAIL_COUNT = 6;
const SQUARE_SIZES = [55, 45, 38, 32, 26, 22]; // Decreasing sizes
const TRAIL_DELAYS = [0, 0.06, 0.12, 0.18, 0.24, 0.3]; // Staggered lag

export default function CursorTrail() {
    const squaresRef = useRef([]);
    const mouse = useRef({ x: -200, y: -200 });
    const positions = useRef(
        Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }))
    );
    const rafId = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            positions.current.forEach((pos, i) => {
                // Each square lerps towards the previous one (or mouse for first)
                const target = i === 0 ? mouse.current : positions.current[i - 1];
                const speed = 0.15 - i * 0.015; // Slower for later squares

                pos.x += (target.x - pos.x) * speed;
                pos.y += (target.y - pos.y) * speed;

                const el = squaresRef.current[i];
                if (el) {
                    const size = SQUARE_SIZES[i];
                    el.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`;
                }
            });

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 9998 }}
            aria-hidden="true"
        >
            {Array.from({ length: TRAIL_COUNT }, (_, i) => (
                <div
                    key={i}
                    ref={(el) => (squaresRef.current[i] = el)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: SQUARE_SIZES[i],
                        height: SQUARE_SIZES[i],
                        background: `rgba(167, 139, 250, ${0.12 - i * 0.015})`,
                        borderRadius: 2,
                        willChange: 'transform',
                        pointerEvents: 'none',
                        mixBlendMode: 'screen',
                    }}
                />
            ))}
        </div>
    );
}
