import React from "react";
import { ReactComponent as Shuriken } from '../../assets/shuriken.svg';

import { motion } from 'framer-motion';

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
            <div>
                <a href="#">Home</a>
                <a href="#">My Works</a>
                <a href="#">Download My Resume</a>
            </div>
        </motion.div>
    )
}

export default NavLinks;