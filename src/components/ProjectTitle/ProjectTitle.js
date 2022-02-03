import React from 'react';

import '../Projects/projects.css';

import { motion } from 'framer-motion';

const ProjectTitle = ({ data, handleMouseEnter }) => (
    <motion.div whileHover={{ scale: 1.09 }} className="project-title-container" onMouseEnter={handleMouseEnter}>
        <p><span className="bold-text">{data.project_name}</span> - {data.project_sub_name}</p>
    </motion.div>
)

export default ProjectTitle;