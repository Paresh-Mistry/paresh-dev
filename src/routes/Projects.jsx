import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Code, ArrowUpRight } from 'lucide-react';
import Layoutwrap from '../Layout/Layoutwrap';

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
    tech: 'ReactJS, TailwindCSS',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'News Application',
    description: 'A News platform using OMDB API where users can view the latest news, top stories, and sports updates by applying filters.',
    link: 'React-News-App.git',
    tech: 'ReactJS, REST API, TailwindCSS',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Geo-Profile',
    description: 'Real-time geolocation tracker built with React.js and Leaflet.',
    link: 'GeoProfiles.git',
    tech: 'ReactJS, TailwindCSS, LeafletJS',
    image: 'https://github.com/Paresh-Mistry/GeoProfiles/raw/main/src/assets/Images/Screenshot%20(25).png',
  },
  {
    title: 'Pallet Sensing System',
    description: 'Uses sensors and DBSCAN clustering to track pallets for automation.',
    link: 'PalletSensing.git',
    tech: 'ML, DBSCAN, Jupyter, ReactJS',
    image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'AI Resume Generator',
    description: 'AI-powered resume builder using LangChain + Ollama.',
    link: 'CVGen---AI-Resume-maker-with-Ollama.git',
    tech: 'ReactJS, Node.js, TailwindCSS, Ollama, LangChain',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Faculty Appointment Portal',
    description: 'Scheduling platform for KJSIT with admin panel.',
    link: 'Kjsiit_Appointement.git',
    tech: 'PostgreSQL, FastAPI, ReactJS, TailwindCSS',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const Projects = () => {
  return (

      <Layoutwrap>

        <motion.h1
          className="flex items-center gap-3 font-bold text-white mb-8 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-[40px] md:text-[70px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MY PROJECTS</h1>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


          {projects.map((project, index) => (


            <motion.div
              key={index}
              className="relative group border border-l-purple-500 border-l-4 border-white/10 border-b bg-white/5 backdrop-blur-md 
             overflow-hidden shadow-xl transition duration-300 hover:scale-[1.02]"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >

              <div className=' text-white absolute top-2 right-3 text-xs'>0{index + 1}</div>


              <div className="p-6 text-white">
                <h2 className="text-xl mb-2">{project.title.toUpperCase()}</h2>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-700/60 text-white text-xs px-3 py-1 rounded-full shadow hover:bg-indigo-800 transition"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://github.com/paresh-mistry/${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center md:absolute bottom-0 right-0 justify-end"
                >
                  <motion.div
                    className="opacity-100 lg:opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <ArrowUpRight size={55} className="text-white/80 hover:text-white transition-colors" />
                  </motion.div>
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </Layoutwrap>

    // </div>
  );
};

export default Projects;
