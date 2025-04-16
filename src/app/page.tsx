'use client';

import Image from 'next/image'
import Navbar from '../components/Navbar'
import AnimatedCursor from '../components/AnimatedCursor'
import ScrollAnimations from '../components/ScrollAnimations'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaMapMarkerAlt, FaPhone, FaDownload, FaGraduationCap, FaTrophy, FaLaptopCode } from 'react-icons/fa'

export default function Home() {
  const education = [
    {
      school: "IIIT Naya Raipur",
      degree: "B.Tech in Data Science and AI",
      year: "2022-2026",
      icon: <FaGraduationCap className="text-blue-500 text-xl" />
    },
    {
      school: "Saint Joseph's School, NTPC",
      degree: "12th Grade",
      score: "75%",
      year: "2022",
      icon: <FaGraduationCap className="text-blue-500 text-xl" />
    },
    {
      school: "Saint Joseph's School, NTPC",
      degree: "10th Grade",
      score: "93.3%",
      year: "2020",
      icon: <FaGraduationCap className="text-blue-500 text-xl" />
    }
  ];

  const achievements = [
    {
      title: "Open Track Winner at Hack-a-sol 3.0",
      description: "VS Code Extension for Code Security",
      icon: <FaTrophy className="text-yellow-500 text-xl" />
    },
    {
      title: "Top 10 in SMACKATHON 2024",
      description: "Healthcare Navigation Platform",
      icon: <FaTrophy className="text-yellow-500 text-xl" />
    },
    {
      title: "Career Essentials in Data Analysis",
      description: "Microsoft & LinkedIn Certification",
      icon: <FaLaptopCode className="text-green-500 text-xl" />
    }
  ];

  return (
    <main className="min-h-screen">
      <AnimatedCursor />
      <ScrollAnimations />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-8 relative w-48 h-48 mx-auto group profile-container">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse-slow opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-float opacity-20"></div>
              <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/profile.jpg"
                  alt="Nishikant Kumar"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-4">
              <span className="block">Hi, I'm</span>
              <span className="block gradient-text animate-float">Nishikant Kumar</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl text-gray-600 dark:text-gray-300 animate-slide-in">
              B.Tech Student in Data Science and AI at IIIT Naya Raipur
            </p>
            <div className="mt-8 max-w-md mx-auto flex justify-center space-x-4">
              <a 
                href="#contact" 
                className="button-gradient inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
            </div>
            <a 
              href="/resume.pdf" 
              className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transform hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transform -skew-y-6 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-extrabold text-center mb-12 gradient-text">About Me</h2>
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-lg text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
              <p className="leading-relaxed glass-effect p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                I'm a passionate developer and student pursuing B.Tech in Data Science and AI at IIIT Naya Raipur.
                I love building innovative solutions and exploring new technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="glass-effect p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                  <h3 className="text-xl font-semibold mb-4 gradient-text flex items-center gap-2">
                    <FaGraduationCap className="text-2xl" />
                    Education
                  </h3>
                  <ul className="space-y-4 text-left">
                    {education.map((edu, index) => (
                      <li 
                        key={index} 
                        className="flex items-start p-3 rounded-lg transform transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/50 group animate-slide-in" 
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="mr-3 transform group-hover:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {edu.school}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {edu.degree} {edu.score && `(${edu.score})`}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{edu.year}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                  <h3 className="text-xl font-semibold mb-4 gradient-text flex items-center gap-2">
                    <FaTrophy className="text-2xl" />
                    Achievements
                  </h3>
                  <ul className="space-y-4 text-left">
                    {achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className="flex items-start p-3 rounded-lg transform transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/50 group animate-slide-in" 
                        style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                      >
                        <div className="mr-3 transform group-hover:scale-110 transition-transform duration-300">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {achievement.title}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 gradient-text">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'C/C++', 'JavaScript', 'Python', 'React',
              'Node.js', 'Firebase', 'HTML/CSS', 'SQL',
              'Git', 'OpenCV', 'Machine Learning', 'WebSockets',
              'Data Analysis', 'APIs', 'Linux', 'VS Code'
            ].map((skill, index) => (
              <div
                key={skill}
                className="skill-card glass-effect p-4 rounded-lg shadow-md text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-medium text-gray-900 dark:text-white">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-bl from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Real-Time Location Tracker",
                description: "A real-time location tracking system using JavaScript, HTML/CSS, and Node.js.",
                features: [
                  "Real-time location display on a map",
                  "Geolocation API integration",
                  "Multiple location tracking",
                  "Interactive frontend interface"
                ],
                tech: ["JavaScript", "HTML/CSS", "Node.js", "Maps API"]
              },
              {
                title: "CollaborateX",
                description: "Web-based collaborative platform using React, HTML, CSS, Python, and Firebase.",
                features: [
                  "Project sharing and collaboration",
                  "Progress tracking system",
                  "Team participation timelines",
                  "Real-time updates"
                ],
                tech: ["React", "Python", "Firebase", "HTML/CSS"]
              },
              {
                title: "Automatic Health Monitoring System",
                description: "Data mining project focused on healthcare management.",
                features: [
                  "Automatic report maintenance system",
                  "Rural and sub-urban patient focus",
                  "Structured health record tracking",
                  "Cost reduction through data analysis"
                ],
                tech: ["Python", "Data Mining", "Machine Learning", "Healthcare"]
              },
              {
                title: "Chess Game",
                description: "Real-time multiplayer chess game using React, WebSockets, and Node.js.",
                features: [
                  "Turn-based gameplay",
                  "Authentication and matchmaking",
                  "Spectator mode",
                  "Real-time move synchronization"
                ],
                tech: ["React", "WebSocket", "Node.js", "Authentication"]
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className="project-card glass-effect rounded-xl shadow-lg overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="list-disc ml-5 space-y-1 text-gray-600 dark:text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1 + 0.5}s` }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm animate-scale-in"
                        style={{ animationDelay: `${i * 0.1 + 0.8}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 gradient-text">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-effect flex items-center justify-center space-x-4 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <FaMapMarkerAlt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Naya Raipur, 493661</p>
                </div>
              </div>
              <div className="glass-effect flex items-center justify-center space-x-4 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <FaPhone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91 7319918876</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Nishikant090"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishikant-kumar-b2b3b7257/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a
                href="https://leetcode.com/Nishikant090/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
              >
                <FaCode className="h-8 w-8" />
              </a>
              <a
                href="mailto:nishikant3745@gmail.com"
                className="social-icon text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaEnvelope className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Nishikant Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
} 