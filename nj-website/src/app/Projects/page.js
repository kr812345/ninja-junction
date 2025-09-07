'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './Project-Model/page';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const projectData = [
        {
            id: 1,
            name: "Project 1",
            description: "Description for Project 1",
            img: "/demo-project.svg"
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description for Project 2",
            img: "/demo-project.svg"
        },
        {
            id: 3,
            name: "Project 3",
            description: "Description for Project 3",
            img: "/demo-project.svg"
        },
        {
            id: 4,
            name: "Project 4",
            description: "Description for Project 4",
            img: "/demo-project.svg"
        }
    ];

    const handleClick = (e,project) => {
        e.preventDefault();
        setIsOpen(true);
        setSelectedProject([project]);
        console.log(selectedProject, isOpen);
    }

    return (
        <section className="h-screen px-44 pt-36 -z-100">
            <div className="w-[100%]">
                <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projectData.map((project, index) => (
                        <motion.span 
                            key={project.id} 
                            onClick={(e,project)=>handleClick(e, project)}
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
