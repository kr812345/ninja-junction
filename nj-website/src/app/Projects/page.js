'use client';

import React from 'react';



const Projects = () => {
    return (
        <section className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project cards can be added here */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Project 1</h2>
                        <p className="text-gray-600">Project description goes here</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Project 2</h2>
                        <p className="text-gray-600">Project description goes here</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Project 3</h2>
                        <p className="text-gray-600">Project description goes here</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;