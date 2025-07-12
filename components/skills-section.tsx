"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Wrench, Database, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'HTML', 'CSS'],
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Layers className="h-6 w-6" />,
      skills: ['React', 'Next.js', 'Express.js', 'Node.js', 'Socket.io', 'Redux', 'Zustand', 'React Query'],
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['Git', 'VS Code', 'Postman', 'Thunder Client'],
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: ['MongoDB', 'MySQL'],
      color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
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
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-default"
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-1 px-3 bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">About Me</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with a knack for building performant web apps using modern stacks like Next.js, Tailwind, and MongoDB. I love clean UI, solving real problems, and contributing to open-source.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-white font-semibold mb-2">Education</h4>
                  <p className="text-gray-400">IIIT Bhopal • B.Tech CSE</p>
                  <p className="text-gray-400">2023 – 2027</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Location</h4>
                  <p className="text-gray-400">Bengaluru, IN</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;