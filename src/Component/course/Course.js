// Course.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Project from './Project';
import Work from './Work';
import Flappy from '../../img/flappy.jpg'
const Course = React.forwardRef((props, ref) => (
  <section 
    ref={ref} 
    className="min-h-screen mt-28 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-10"
  >
  {
    Work.map((project,index)=>
    {
       return(
        <Project
        image={project.image}
        title={project.title}
        description={project.description}
        github={project.github}
        Tech={project.Tech}
        live={project.live}
          />
       );
      })
  }
   
   

  </section>
));

export default Course;
