import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS"
    },
    {
      icon: <Server className="text-emerald-600" size={24} />,
      title: "Backend Development", 
      description: "Node.js, Express, RESTful APIs"
    },
    {
      icon: <Database className="text-orange-600" size={24} />,
      title: "Database Management",
      description: "MongoDB, Mongoose, Schema Design"
    },
    {
      icon: <Smartphone className="text-purple-600" size={24} />,
      title: "Mobile Responsive",
      description: "Progressive Web Apps, Mobile-First Design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating scalable applications that solve real-world problems and provide 
            exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With a strong foundation in computer science and a passion for continuous learning, 
              I've developed expertise in the MERN stack and modern development practices. 
              I focus on writing clean, maintainable code and implementing best practices 
              like secure authentication, efficient database design, and scalable architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Problem Solving
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Team Collaboration
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Continuous Learning
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Best Practices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;