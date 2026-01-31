'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModel/page';
import projectData from '../../../public/projectsData';
import ParallaxProjectCard from '@/Components/ParallaxProjectCard';
import GlitchText from '@/Components/GlitchText';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});


    const handleClick = (e, project) => {
        e.preventDefault();
        setIsOpen(true);
        setSelectedProject(project);
    }

    return (
        <section className="min-h-screen bg-[var(--color-background)] px-44 pt-40 -z-100 not-sm:p-6 not-sm:pt-32 overflow-hidden relative">
            {/* Floating Geometry Background */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-96 h-96 border border-cyan-500/10 rounded-full border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-40 left-20 w-64 h-64 border border-purple-500/10 rounded-full border-dotted"
                />
            </div>

            <div className="w-[100%]">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 relative text-white"
                >
                    <GlitchText>Our Projects</GlitchText>
                    <div className="absolute w-20 h-1 bg-primary bottom-0 left-0 mt-4"></div>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {projectData.map((project, index) => (
                        <ParallaxProjectCard
                            key={project.id}
                            project={project}
                            onClick={handleClick}
                        />
                    ))}
                </div>

                {isOpen && <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => { setSelectedProject(null); setIsOpen(p => !p) }}
                />}
            </div>
        </section>
    );
};

export default Projects;
