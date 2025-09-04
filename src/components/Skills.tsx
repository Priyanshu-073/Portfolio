import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ],
      color: "blue"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 }
      ],
      color: "emerald"
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 85 },
        { name: "PostgreSQL", level: 80 },

      ],
      color: "orange"
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "JWT/Auth", level: 90 },
        { name: "Socket.io", level: 85 }
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      emerald: "from-emerald-500 to-emerald-600",
      orange: "from-orange-500 to-orange-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I have experience with a wide range of technologies and tools. Here's a breakdown
            of my technical expertise across different areas of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends,
              frameworks, and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Next.js
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Kubernetes
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Microservices
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;