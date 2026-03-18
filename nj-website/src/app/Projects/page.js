'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModel/page';
import projectData from '../../../public/projectsData';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});


    const handleClick = (e, project) => {
        e.preventDefault();
        setIsOpen(true);
        setSelectedProject(project);
        console.log(project)
        console.log(selectedProject, isOpen);
    }

    return (
        <main className="min-h-screen bg-[var(--color-background)] relative overflow-hidden">
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

            <section className="relative z-10 pt-40 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="w-full">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bold-heading text-5xl md:text-7xl mb-12 text-center md:text-left"
                >
                    OUR PROJECTS
                    <div className="w-24 h-1 bg-[var(--color-primary)] mt-6 mx-auto md:mx-0"></div>
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projectData.map((project, index) => (
                        <motion.span
                            key={project.id}
                            onClick={(e) => handleClick(e, project)}
                            className="bg-white/80 backdrop-blur-md text-[var(--color-text-primary)] rounded-3xl border border-black/5 shadow-xl p-6 cursor-pointer flex flex-col group transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 40px rgba(79,70,229,0.15)"
                            }}
                        >
                            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50">
                                <motion.img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">{project.name}</h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">{project.description}</p>
                        </motion.span>
                    ))}
                </div>
                {isOpen && <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => { setSelectedProject(null); setIsOpen(p => !p) }}
                />}
            </div>
            </section>
        </main>
    );
};

export default Projects;
