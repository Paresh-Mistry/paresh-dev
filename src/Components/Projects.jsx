import React from 'react';
import { motion } from 'framer-motion';
import { Code, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'WeChat Application',
    description: 'A chat application with real-time messaging capabilities, built using Node.js and Socket.io.',
    link: 'Wechat-Application',
    tech: 'Python, Flask, WebSockets, Bootstrap, HTML, CSS',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Movies Application',
    description: 'A movies platform where users can see latest movies card and search movies.',
    link: 'Movies-Application',
    tech: 'ReactJS , TailwindCSS ',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'News Application',
    description: 'A News platform using OMDB Api where users can latest News , topstories and Sports news by applying filters.',
    link: 'React-News-App.git',
    tech: 'ReactJS , Restful API , TailwindCSS',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Geo-Profile',
    description: 'This project demonstrates how to use React.js in combination with Leaflet to display a map and track the users location in real-time.',
    link: 'GeoProfiles.git',
    tech: 'ReactJS , TailwindCSS , LeafletJS',
    image: 'https://github.com/Paresh-Mistry/GeoProfiles/raw/main/src/assets/Images/Screenshot%20(25).png',
  },
  {
    title: 'Pallet Sensing System',
    description: 'A hardware-software integrated project that uses sensors to detect pallet positions and sends data for visualization and automation.',
    link: 'PalletSensing.git',
    tech: 'Machine Learning, DBSCAN, Jupyter Notebook, ReactJS',
    image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'AI Resume Generator',
    description: 'An AI-powered resume builder that generates customized resumes using Ollama and large language models.',
    link: 'CVGen---AI-Resume-maker-with-Ollama.git',
    tech: 'ReactJS, TailwindCSS, Node.js, Ollama LLMs, LangChain',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Faculty Appointment Portal',
    description: 'A web platform built for KJSIT faculty appointment scheduling with user and admin roles.',
    link: 'Kjsiit_Appointement.git',
    tech: 'PostgreSQL, FastApi, ReactJS, TailwindCSS',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
  }
];


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mx-auto px-6 py-12">
      <motion.h1 
        className="text-4xl flex items-center gap-3 font-bold text-gray-200 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Code2 size={40}/> My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-lg border border-gray-200 shadow-lg bg-white hover:shadow-2xl transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6 bg-black rounded-b-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">Tech Stack: {project.tech}</p>
              <a
                href={project.link ? 'https://github.com/paresh-mistry/' + project.link : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 rounded-full shadow-md transition duration-300 ${project.link ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
              >
                {project.link ? 'View on GitHub' : 'Coming Soon'}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
