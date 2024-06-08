import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectImage from '../../img/ProjectImage.png';

const Project = ({ image, title, description, github,Tech, live }) => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-28"
    >
      {/* Left side: Project Image */}
      <motion.img
        src={image}
        alt="Project"
        className="w-full sm:w-1/2 h-80 object-cover rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      {/* Right side: Content */}
      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-gradient-gray-end mb-4"
        >
          {title}
        </motion.h2>
          <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-lg text-gradient-gray-end mb-6"
        >
          <span>Tech:</span> {Tech}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-lg text-white mb-6"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center md:justify-start items-center"
        >
        
          <a
               href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-lg px-4 py-2 rounded-lg shadow-lg mr-4 mb-4 md:mb-0"
              >
                GitHub
          </a>

          <a
            href={live}
            target="_blank"
            className="text-white bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-lg px-4 py-2 rounded-lg shadow-lg"
          >
            Live Project
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;