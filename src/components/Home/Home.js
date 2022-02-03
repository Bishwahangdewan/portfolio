import React from 'react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <motion.h4
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }} className="top-sub-header">Hello !</motion.h4>
        <motion.h1
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} >I'm Bishwa Hang Dewan</motion.h1>
        <motion.h4
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }} className="bot-sub-header">I'm a <span className="bold">Software Engineer</span> / <span className="bold">Full Stack Developer</span></motion.h4>

        <Link to="/projects">
            <motion.a
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="home-link"
                href="#">Check out My Works Here
            </motion.a>
        </Link>
    </div >
)

export default Home;