'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
    {
        id: 1,
        name: "Project 1",
        description: "Description for Project 1",
        img: "/demo-project.svg",
        longDescription: "This is a detailed description of Project 1. You can add much more information here including technologies used, challenges faced, and solutions implemented.",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        duration: "3 months",
        team: "4 members"
    },
    // ... Add similar detailed data for other projects
];

const ProjectModal = ({ project, isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 x-[50%] bg-white/70 bg-opacity-50 flex items-center justify-center z-50 not-sm:w-screen not-sm:h-screen overflow-scroll overflow-x-clip"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className=" border border-primary shadow-lg bg-white relative rounded-xl p-8 min-w-6xl w-6xl min-h-[70%] py-8 mx-4 space-y-4 z-10 not-sm:px-4 not-sm:"
                        onClick={e => e.stopPropagation()}
                    >
                        <img src={project.img} alt={project.name} className="w-full h-98 object-cover object-top rounded-lg" />
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                        <p className="text-gray-600">{project.longDescription}</p>
                        <div>
                            <h3 className="font-semibold">Technologies Used:</h3>
                            <div className="flex gap-2 mt-2">
                                {project.technologies?.map((tech, index) => (
                                    <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <p>Duration: {project.duration}</p>
                            <p>Team Size: {project.team}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default ProjectModal;

// const Projects = () => {
//     const [selectedProject, setSelectedProject] = useState(null);

//     return (
//         <section className="h-screen px-44 pt-36 -z-100">
//             <div className="w-[100%]">
//                 <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {projectData.map((project, index) => (
//                         <motion.div 
//                             key={project.id} 
//                             className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             whileHover={{ 
//                                 scale: 1.05,
//                                 boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
//                             }}
//                             onClick={() => setSelectedProject(project)}
//                         >
//                             <motion.img 
//                                 src={project.img} 
//                                 alt={project.name}
//                                 className="w-full h-48 object-cover rounded-lg mb-4"
//                                 whileHover={{ scale: 1.1 }}
//                                 transition={{ duration: 0.2 }}
//                             />
//                             <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
//                             <p className="text-gray-600">{project.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>

//             <ProjectModal 
//                 project={selectedProject}
//                 isOpen={!!selectedProject}
//                 onClose={() => setSelectedProject(null)}
//             />
//         </section>
//     );
// };

// export default Projects;