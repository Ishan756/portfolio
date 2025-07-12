"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/Ishan756',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/ishan-mishra-12b72927a/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:ishanmishra756@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-gray-400 hover:text-white"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> by Ishan Mishra
            </p>
            <p className="text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;