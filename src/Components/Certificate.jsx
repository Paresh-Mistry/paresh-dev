import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';

import Eurogrip from '../assets/Eurogrip_Torq.pdf';
import Invictus from '../assets/invictus.pdf';
import Code_w from '../assets/Code_Warrior.pdf';
import Flipkart from '../assets/flipkart_grid.pdf';
import Ai_agent from '../assets/Ai_agent.pdf';
import Reactjs from '../assets/React.pdf';
import Python from '../assets/Python.pdf';
import Java from '../assets/Java.pdf';
import Claidroid from '../assets/Claidroid.jpg';

const Certificate = () => {
  const certs = [
    {
      hackathons: [
        { name: 'Eurogrip Torq 2025', file: Eurogrip },
        { name: 'Invictus 2025', file: Invictus },
        { name: 'Code Warrior 2025', file: Code_w },
        { name: 'Flipkart Grid 2024', file: Flipkart },
        { name: 'Multi AI Agent System', file: Ai_agent },
      ],
    },
    {
      Course: [
        { name: 'React JS Beginner', file: Reactjs },
        { name: 'Java Certificate', file: Java },
        { name: 'Python Certificate', file: Python },
      ],
    },
    {
      Internship: [
        { name: 'Claidroid Technologies', file: Claidroid },
      ],
    },
  ];

  const cert_ = certs[0].hackathons;
  const course = certs[1].Course;
  const internship = certs[2].Internship;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="px-6 py-10 space-y-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Section: Hackathons */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <div className="mb-4">
          <h1 className="text-3xl font-semibold">Hackathons & Events</h1>
        </div>
        <p className="text-sm italic mb-4">
          Participated in competitive hackathons, showcasing problem-solving and teamwork.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-2">
          {cert_.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex gap-2 rounded-md border py-3 px-4 w-full md:w-fit items-center shadow-md"
              variants={fadeInUp}
              custom={i}
            >
              <span><Folder /></span>
              <Link to={item.file} target="_blank">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#c6c6ce] text-lg font-bold">
                  {item.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section: Course */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <div className="mb-4">
          <h1 className="text-3xl font-semibold">Course</h1>
        </div>
        <p className="text-sm italic mb-4">
          Completed a certified course, enhancing knowledge and technical skills.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-2">
          {course.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex gap-2 rounded-md border py-3 px-4 w-full md:w-fit items-center shadow-md"
              variants={fadeInUp}
              custom={i}
            >
              <span><Folder /></span>
              <Link to={item.file} target="_blank">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#c6c6ce] text-lg font-bold">
                  {item.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section: Internship */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <div className="mb-4">
          <h1 className="text-3xl font-semibold">Internship</h1>
        </div>
        <p className="text-sm italic mb-4">
          Successfully completed a hands-on internship, gaining practical industry experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-2">
          {internship.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex gap-2 rounded-md border py-3 px-4 w-full md:w-fit items-center shadow-md"
              variants={fadeInUp}
              custom={i}
            >
              <span><Folder /></span>
              <Link to={item.file} target="_blank">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#c6c6ce] text-lg font-bold">
                  {item.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certificate;
