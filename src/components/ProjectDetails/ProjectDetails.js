import React from 'react';

import { motion } from 'framer-motion';

const ProjectDetails = ({ data }) => {
    return (
        <div className="project-details-container">
            <div className="flex space-between">
                <div>
                    <h1>{data.project_name}</h1>
                    <p>{data.project_sub_name}</p>
                </div>
                <div className='flex space-between'>
                    <a href="https://github.com/Bishwahangdewan/Animax" target="_blank">
                        <motion.i whileHover={{ scale: 1.3 }} className="fab fa-github">
                        </motion.i>
                    </a>
                    <a href="https://animax-anime-stream.herokuapp.com" target="_blank">
                        <motion.i whileHover={{ scale: 1.3 }} class="fas fa-link">
                        </motion.i>
                    </a>
                </div>
            </div>

            <p>{data.description}</p>

            <div className="tech">
                <h3>Technology Used:</h3>
                <div className="tech-used">
                    {data.tech_stack.map(tech => (
                        <div className='tech-container mr-1'>
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ProjectDetails;