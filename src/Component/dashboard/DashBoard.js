// Dashboard.js
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Tirth from '../../img/Tirth.jpg';


const Dashboard = React.forwardRef((props, ref) => {
  const { scrollY } = useViewportScroll();
  const yRange = [0, 150]; // Adjust this range based on when you want the text to start disappearing
  const opacity = useTransform(scrollY, yRange, [4, 0]);

  return (
    <section 
      ref={ref} 
      className="min-h-screen mt-28 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-10"
    >
      <motion.h1 
        style={{ opacity }} 
        initial={{ x: '-100vw' }} 
        animate={{ x: 0 }} 
        transition={{ type: 'spring', stiffness: 40 }} 
        className="text-6xl font-bold mt-24 text-white mb-4 text-gradient-gray"
      >
        Hi, I'm Tirth
      </motion.h1>
      <motion.h2 
        style={{ opacity }} 
        initial={{ x: '100vw' }} 
        animate={{ x: 0 }} 
        transition={{ type: 'spring', stiffness: 50 }} 
        className="text-3xl font-bold text-gradient-gray-middle mb-8"
      >
        Fullstack Developer
      </motion.h2>
      <motion.div 
        style={{ opacity }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }} 
        className="text-center text-white"
      >
        <p className="text-lg text-white mb-2">
          I specialize in creating amazing web applications with modern technologies.
        </p>
        <p className="text-lg text-white">
          Let's build something great together.
        </p>
      </motion.div>
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }} 
        className="mt-10 mb-16"
      >
        <img
          className="w-80 h-80 object-contain rounded-md"
          src={Tirth} // Replace with your 3D computer image URL
          alt="3D Computer"
        />
      </motion.div>
    </section>
  );
});

export default Dashboard;
