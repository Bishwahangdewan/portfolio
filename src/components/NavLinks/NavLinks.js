import React from "react";
import { ReactComponent as Shuriken } from '../../assets/shuriken.svg';

import { motion } from 'framer-motion';

import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            className="nav-links">
            <div className="logo">
                <Shuriken className="shuriken" />
                <h2>Portfolio</h2>
            </div>
            <div className="flex">
                <Link to="/"><i className="fas fa-home"></i> Home</Link>
                <Link to="/projects"><i className="fas fa-code"></i> My Works</Link>
                <a href="#"><i className="fas fa-download"></i> Download My Resume</a>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/bishwahang-dewan-44206517a" target="_blank">
                        <motion.i whileHover={{ scale: 1.5 }} className="fab fa-linkedin"></motion.i>
                    </a>
                    <a href="https://github.com/Bishwahangdewan" target="_blank">
                        <motion.i whileHover={{ scale: 1.5 }} className="fab fa-github"></motion.i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC92dq17D8ys8x6a9oAuiejw" target="_blank">
                        <motion.i whileHover={{ scale: 1.5 }} className="fab fa-youtube"></motion.i>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default NavLinks;