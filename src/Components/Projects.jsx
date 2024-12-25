import React from 'react';

const projects = [
  {
    title: 'WeChat Application',
    description: 'A chat application with real-time messaging capabilities, built using Node.js and Socket.io.',
    link: 'https://github.com/your-username/project-one',
    tech: 'Python, Flask, WebSockets, Bootstrap, HTML, CSS',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Virtual Event Management Platform',
    description: 'A comprehensive platform for managing virtual events with features like ticket booking, live streaming, and real-time chat.',
    link: 'https://github.com/your-username/project-two',
    tech: 'Python, Flask, TailwindCSS, HTML, Bootstrap, CSS',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xeSWhzrwWx0oUytpl4O5E8o3zw4McnnzJg&s',
  },
  {
    title: 'E-commerce Website',
    description: 'An e-commerce platform with features like product listings, shopping cart, and secure payment gateway integration.',
    link: '',
    tech: 'Python, Django, SQLite Database, HTML, TailwindCSS, CSS',
    image: 'https://images.pexels.com/photos/3845970/pexels-photo-3845970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform where users can create and manage blogs, comment on posts, and follow other users.',
    link: 'https://github.com/your-username/project-three',
    tech: 'Python, Django, SQLite Database, HTML, TailwindCSS, CSS',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const Projects = () => {
  return (
    <div className="container bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-12">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={project.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xeSWhzrwWx0oUytpl4O5E8o3zw4McnnzJg&s'}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition duration-300"
            />
            <div className="p-6 bg-white rounded-b-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech Stack: {project.tech}</p>
              <a
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 rounded-full shadow-md transition duration-300 ${project.link ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
              >
                {project.link ? 'View on GitHub' : 'Coming Soon'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
