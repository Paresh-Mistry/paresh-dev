import React from 'react';

const projects = [
  {
    title: 'WeChat Application',
    description: 'A chat application with real-time messaging capabilities, built using Node.js and Socket.io.',
    link: 'Wechat-Application',
    tech: 'Python, Flask, WebSockets, Bootstrap, HTML, CSS',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    link: '',
    tech: 'Python, Django, SQLite Database, HTML, TailwindCSS, CSS',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Movies Application',
    description: 'A movies platform where users can see latest movies card and search movies .',
    link: 'Movies-Application',
    tech: 'ReactJS , TailwindCSS ',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'News Application',
    description: 'A News platform using OMDB Api where users can latest News , topstories and Sports news by applying filters.',
    link: 'Movies-Application',
    tech: 'ReactJS , Restful API , TailwindCSS',
    image: 'https://images.pexels.com/photos/3408747/pexels-photo-3408747.jpeg?auto=compress&cs=tinysrgb&w=400',
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-12">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={project.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xeSWhzrwWx0oUytpl4O5E8o3zw4McnnzJg&s'}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition duration-300"
            />
            <div className="p-6 bg- black rounded-b-lg">
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech Stack: {project.tech}</p>
              <a
                href={'https://github.com/paresh-mistry/' + project.link || '#'}
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
