import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiTailwindcss, SiBootstrap, SiPostman, SiPython, SiMysql, SiReact } from 'react-icons/si';

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "React-js", icon: <SiReact /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Node-js", icon: <FaNodeJs /> },
  { name: "Tailwindcss", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Git and Github", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Basic Python", icon: <SiPython /> },
];

const achievements = [
  {
    title: "Leetcode",
    details: "(1551) on Leetcode. 200+ problem Solved",
    link: "https://leetcode.com/u/tirthchaudhary8080/"
  },
  {
    title: "Codechef",
    details: "2 stars (1456) at Codechef. 150+ Problem Solved.",
    link: "https://www.codechef.com/users/tirth8780"
  },
  {
    title: "Geeks For Geeks",
    details: "Solved 100+ problem on GFG",
    link: "https://www.geeksforgeeks.org/user/tirthchaudhary8080/"
  },
  {
    title: "AWS Cloud Certified",
    details: "Knowledge of Cloud"
  }
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
const Assignment = React.forwardRef((props, ref) => (
  <section ref={ref} className="min-h-screen mt-28 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-gradient-gray-end ">
        Skills & Achievements
      </h2>
      
      <motion.div 
        className="mb-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
      >
        <h3 className="text-3xl font-semibold mb-4 text-gradient-gray-end">Skills</h3>
        <ul className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.li 
              key={index}
              variants={listVariants}
              className="flex items-center text-xl space-x-1 bg-white shadow-lg rounded-lg p-4"
            >
              <span className="text-2xl text-blue-600">{skill.icon}</span>
              <span className="text-gray-700">{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
      >
        <h3 className="text-3xl font-semibold mb-4 text-gradient-gray-end">Achievements</h3>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.li 
              key={index}
              variants={listVariants}
              className="text-xl bg-white shadow-lg rounded-lg p-4"
            >
              <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {achievement.title}
              </a>: {achievement.details}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
));

export default Assignment;
