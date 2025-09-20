'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModel/page';
import projectData from '../../../public/projectsData';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    

    const handleClick = (e,project) => {
        e.preventDefault();
        setIsOpen(true);
        setSelectedProject(project);
        console.log(project)
        console.log(selectedProject, isOpen);
    }

    return (
        <section className="h-screen px-44 pt-40 -z-100 not-sm:p-6 not-sm:pt-32">
            <div className="w-[100%]">
                <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 relative">Our Projects
                <div className="absolute w-20 h-1 bg-primary bottom-0 left-0 mt-2"></div>
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projectData.map((project, index) => (
                        <motion.span 
                            key={project.id} 
                            onClick={(e)=>handleClick(e, project)}
                            className="bg-white rounded-lg shadow-lg p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
                            }}
                        >
                            <motion.img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            />
                            <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
                            <p className="text-gray-600">{project.description}</p>
                        </motion.span>
                    ))}
                </div>
            {isOpen && <ProjectModal 
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => {setSelectedProject(null); setIsOpen(p=>!p)}}
            />}
            </div>
        </section>
    );
};

export default Projects;
