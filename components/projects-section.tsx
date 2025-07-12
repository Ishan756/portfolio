"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Agrilink',
      description: 'Full-stack app to connect farmers and buyers with real-time communication and marketplace features.',
      techStack: ['Next.js', 'MongoDB', 'Node.js', 'Express.js', 'Socket.io'],
      liveUrl: 'https://agrilink-519i.vercel.app/',
      codeUrl: 'https://github.com/Ishan756/agrilink',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Artistly',
      description: 'A modern platform built with authentication features and creative tools for artists.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      liveUrl: 'https://artistly-qt5u.vercel.app/',
      codeUrl: 'https://github.com/Ishan756/artistly',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Chat App',
      description: 'Real-time chat application with Socket.io for instant messaging and Zustand for state management.',
      techStack: ['React', 'Socket.io', 'Zustand', 'Node.js', 'Express.js'],
      liveUrl: 'https://drob.onrender.com/login',
      codeUrl: 'https://github.com/Ishan756/Drob',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Productivity Chrome Extension',
      description: 'Chrome extension to help users limit time spent on websites and boost productivity.',
      techStack: ['JavaScript', 'Chrome APIs', 'HTML', 'CSS'],
      liveUrl: null,
      codeUrl: 'https://github.com/Ishan756/productiveExtension',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={project.name} variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-white">
                    <span className="text-xl">{project.name}</span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="group-hover:scale-110 transition-transform duration-200 text-gray-400 hover:text-white"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.name} live`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="group-hover:scale-110 transition-transform duration-200 text-gray-400 hover:text-white"
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} code`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        <Badge variant="outline" className="text-xs border-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        className="flex-1 group-hover:scale-105 transition-transform duration-200 bg-white text-black hover:bg-gray-100"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      asChild
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} group-hover:scale-105 transition-transform duration-200 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800`}
                    >
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;