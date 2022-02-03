import React, { useState } from 'react';

import { ProjectData } from './Projects.data';

import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

import './projects.css';

import { motion } from 'framer-motion';

const Projects = () => {
    const [data, setData] = useState(ProjectData);
    const [details, setDetails] = useState(ProjectData[0]);

    const handleMouseEnter = (id) => {
        data.forEach(project => {
            if (project.id === id) {
                setDetails(project);
            }
        })
    }

    const showProjectTitle = (
        <div className="project-title">
            {data.map((project, index) => <ProjectTitle handleMouseEnter={() => handleMouseEnter(project.id)} key={index} data={project} />)}
        </div>
    )

    const showProjectDetails = (
        <div className="project-details">
            <ProjectDetails data={details} />
        </div>
    )

    return (
        <div className='flex space-between projects'>
            <div className='left-section'>
                <motion.h1 initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>My Projects</motion.h1>

                {showProjectTitle}
            </div>
            <div className="right-section">
                <div className="glass">

                    {showProjectDetails}
                </div>
            </div>
        </div>
    )
}

export default Projects;
