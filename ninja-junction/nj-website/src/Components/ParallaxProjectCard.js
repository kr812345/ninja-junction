'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ParallaxProjectCard({ project, onClick }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={(e) => onClick(e, project)}
            className="relative h-96 w-full rounded-xl bg-slate-900/40 border border-white/10 p-6 cursor-pointer group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 grid grid-rows-[1fr_auto] gap-4"
            >
                {/* Image Container */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                    <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-end">
                    <h2
                        style={{ transform: "translateZ(50px)" }}
                        className="text-2xl font-bold text-white mb-2 pb-1 border-b border-cyan-500/30 group-hover:border-cyan-500 transition-colors"
                    >
                        {project.name}
                    </h2>
                    <p
                        style={{ transform: "translateZ(25px)" }}
                        className="text-slate-300 text-sm line-clamp-3 leading-relaxed"
                    >
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Glowing Border effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
}
