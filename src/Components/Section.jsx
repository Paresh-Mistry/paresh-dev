import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/Resume.pdf";
import image from "../assets/Profileimg.jpg";
import { Github, CodepenIcon, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const Section = () => {
  const softwaresUse = [
    {
      title: "Visual Studio Code",
      image: <CodepenIcon size={300} className="mx-auto text-gray-500" />,
      link: "https://code.visualstudio.com/",
    },
    {
      title: "Github Version Control",
      image: <Github size={300} className="mx-auto text-gray-500" />,
      link: "https://github.com",
    },
    {
      title: "Leetcode",
      image: <Code2 size={300} className="mx-auto text-gray-500" />,
      link: "https://leetcode.com/",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col sm:flex-row items-center justify-around bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-16 shadow-2xl overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-2xl opacity-20"></div>

        {/* Animated Left Text */}
        <motion.div
          className="sm:w-1/2 text-center sm:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold text-5xl sm:text-6xl leading-tight mb-4">
            Paresh Mistry
          </h1>
          <h3 className="text-gray-300 text-2xl sm:text-3xl font-semibold mb-6">
            Full Stack Web Developer
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Passionate about crafting elegant coding architectures and an avid
            contributor to open-source projects. Let's build something
            extraordinary together!!
          </p>
          <Link
            className="inline-block px-6 py-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-transform"
            to={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Download Resume
          </Link>
        </motion.div>

        {/* Animated Right Image */}
        <motion.div
          className="sm:w-1/3 mt-10 sm:mt-0 flex justify-center relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="w-52 h-52 rounded-full border-4 border-blue-500 shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold">
              Hi!
            </div>
            <div className="absolute inset-0 bg-blue-400 opacity-10 rounded-full blur-xl"></div>
          </div>
        </motion.div>
      </section>

      {/* Software Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-5xl font-extrabold text-gray-200 mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
              My Software Tools
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {softwaresUse.map((element, index) => (
              <motion.a
                href={element.link}
                key={element.title}
                className="group transform transition-transform duration-500 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <span className="text-center h-72 object-cover transition-transform duration-700 group-hover:scale-110">
                    {element.image}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-blue-500 font-bold text-2xl z-10 tracking-wide drop-shadow-md">
                    <h3 className="group-hover:text-blue-400 transition-colors duration-300">
                      {element.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white bg-gray-700/90 px-6 py-3 rounded-lg text-sm shadow-lg">
                      Click to Learn More
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-400/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Tool
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
