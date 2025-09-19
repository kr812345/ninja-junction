'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './Project-Model/page';
import projectData from '../../../public/projectsData';
import Projects from '@/Components/Projects/Projects';

const ProjectsPage = () => {
    return (
        <>
            <Projects />
        </>
    );
};

export default ProjectsPage;
