import React from 'react';
import { Github, Linkedin, Twitter, BookOpen, ExternalLink } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "AES Encryption Project",
      description: "Java Spring Boot project implementing AES encryption for data security with MD5 hashing for key management.",
      technologies: ["Java", "Spring Boot", "Cryptography"],
      link: "https://github.com/vedantjdv",
      type: "Security"
    },
    {
      title: "E-commerce Website",
      description: "Responsive e-commerce platform built with vanilla JavaScript, featuring DOM manipulation and hosted on GitHub Pages.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      type: "Web Development"
    }
  ];

  const experiences = [
    {
      role: "Software Development Engineer - 1",
      company: "BharatNxt",
      period: "June 2023 – Present",
      location: "Mumbai",
      achievements: [
        "Integrated and maintained two payment gateways accounting for 10-15% of total successful transactions",
        "Contributed to SQL to NoSQL(Cloud firestore) migration reducing server load significantly",
        "Converted legacy Payment Service code from Java to Golang",
        "Reduced payment latency by 1500-2000ms through PostgreSQL query optimization",
        "Implemented PCI DSS compliance for sensitive data handling"
      ]
    },
    {
      role: "Software Development Intern",
      company: "BharatNxt",
      period: "Nov 2022 – June 2023",
      location: "Mumbai",
      achievements: [
        "Developed APIs for Internal Dashboard",
        "Wrote complex PostgreSQL queries for Product and Finance teams",
        "Migrated Cashfree Payment gateway from v2 to v3",
        "Implemented PCI DSS compliance measures"
      ]
    }
  ];

  const skills = {
    languages: ["Java", "Golang", "PostgreSQL"],
    frameworks: ["Spring", "Gin"],
    tools: ["Git", "Postman", "Google Cloud Platform"],
    testing: ["JUnit5"]
  };

  const certifications = [
    {
      name: "Goldman Sachs Virtual Experience Program",
      date: "Feb 2023",
      details: "Implemented password security measures using Hashcat and developed AES encryption project"
    },
    {
      name: "CCNA: Introduction to Networks",
      organization: "Cisco",
      date: "August 2022",
      details: "Configured LANs, routers, and switches with IPv4/IPv6 implementations"
    },
    {
      name: "Interactivity with JavaScript",
      organization: "Coursera",
      date: "September 2020",
      details: "Built responsive e-commerce website using HTML, CSS, and JavaScript"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="p-8">
        <header className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-purple-300">Vedant Jadhav</h1>
          <p className="text-xl text-gray-400 mb-6">Software Developer</p>
          
          <div className="flex gap-4 mb-16">
            <a href="https://github.com/vedantjdv" target="_blank"
               className="text-gray-400 hover:text-purple-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ivedantjadhav/" target="_blank"
               className="text-gray-400 hover:text-purple-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/vedantjdv" target="_blank" className="text-gray-400 hover:text-purple-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://leetcode.com/u/veerujadhav879/" target="_blank" className="text-gray-400 hover:text-purple-300 transition-colors">
              <BookOpen size={24} />
            </a>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-purple-300">About</h2>
            <p className="text-gray-300">
              Hi, I am Vedant. Dynamic Software Engineer with a strong focus on creating efficient, scalable solutions and optimizing workflows.
              Passionate about leveraging technology to solve complex problems and deliver impactful results. Skilled in Backend Development.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-purple-300">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
                    <a href={project.link} className="text-gray-400 hover:text-purple-300 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-purple-300">Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">{exp.role}</h3>
                <p className="text-gray-400 mb-4">
                  {exp.company} · {exp.period} · {exp.location}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-purple-300">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 capitalize text-purple-300">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <span key={index} 
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-purple-300">Certifications</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">{cert.name}</h3>
                <p className="text-gray-400 mb-2">
                  {cert.organization} {cert.organization && '·'} {cert.date}
                </p>
                <p className="text-gray-300">{cert.details}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;