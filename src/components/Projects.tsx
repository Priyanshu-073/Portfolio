import React from 'react';
import { ExternalLink, Github, Users, MessageCircle, Shield, Database, Server, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SocialSphere",
      subtitle: "Social Media Platform",
      description: "A comprehensive MERN-based social media application featuring real-time chat, user authentication, and a dynamic follow system. Built with scalable architecture and modern security practices.",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT", "Bcrypt"],
      features: [
        { icon: <Users className="text-blue-600" size={16} />, text: "User Follow System" },
        { icon: <MessageCircle className="text-emerald-600" size={16} />, text: "Real-time Chat" },
        { icon: <Shield className="text-orange-600" size={16} />, text: "JWT Authentication" },
        { icon: <Database className="text-purple-600" size={16} />, text: "MongoDB with Mongoose" }
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Real-time Chat App",
      subtitle: "Real-time Chat Application (MERN)",
      description:
        "A full-featured real-time chat application built with MongoDB, Express, React and Node (MERN) plus Socket.IO. Supports rooms, private messaging, typing indicators, message persistence, and user authentication.",
      image: "https://images.pexels.com/photos/1181471/pexels-photo-1181471.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "JWT"],
      features: [
        { icon: <MessageCircle className="text-emerald-600" size={16} />, text: "Socket.IO Real-time Messaging" },
        { icon: <Users className="text-blue-600" size={16} />, text: "Rooms & Private Chats" },
        { icon: <Database className="text-orange-600" size={16} />, text: "Persistent Messages (MongoDB)" }
      ],
      githubUrl: "https://github.com/Priyanshu-073",
      liveUrl: "#"
    },
    {
      title: "Tripwise",
      subtitle: "Trip Planner (MERN)",
      description:
        "Tripwise is a trip planner built with the MERN stack. It provides itinerary building, map integration, user authentication, saved trips, and recommendations. Designed for responsive use on both desktop and mobile.",
      image: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Map APIs"],
      features: [
        { icon: <Globe className="text-blue-600" size={16} />, text: "Map & Places Integration" },
        { icon: <Server className="text-emerald-600" size={16} />, text: "User Accounts & Saved Itineraries" },
        { icon: <Database className="text-orange-600" size={16} />, text: "MERN Data Persistence" }
      ],
      githubUrl: "https://github.com/Priyanshu-073",
      liveUrl: "https://tripwise-one.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development,
            focusing on scalable architectures and modern technologies.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center' : ''
                }`}
            >
              {project.featured && (
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Featured Project
                </div>
              )}

              <div className={`${project.featured ? 'lg:order-2' : ''} mb-8 lg:mb-0`}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className={`${project.featured ? 'lg:order-1' : ''}`}>
                <div className={`${project.featured ? 'bg-white p-8 rounded-2xl shadow-lg' : 'bg-white p-6 rounded-xl shadow-md'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        MERN Stack
                      </span>
                    )}
                  </div>

                  <p className="text-blue-600 font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          {feature.icon}
                          <span className="text-sm text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
