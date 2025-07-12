"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-gray-400">Build for performace</span>
            <span className="text-gray-400">,designed with clarity</span>
            <span className="text-2xl"></span>
          </motion.div>

          {/* Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-6xl">
                👋
              </div>
              <div className="absolute -top-4 -right-4 text-gray-400 text-sm">
                I'm a <span className="text-white">full-stack developer</span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              I'm Ishan
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
  <span className="text-white">Full-stack Developer</span> crafting <br />
  performant interfaces & meaningful user journeys
</p>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-gray-400">
                I can design your <span className="text-white underline">website</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-500">available for work</span>
              </div>  
              <div className="text-gray-400">
                I'm based in <span className="text-white">Bhopal</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto"
          >
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Want help building your <span className="text-white">next project?</span>
              </h2>
            </div>
            
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-medium"
            >
              Let's talk! →
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-8 flex flex-col items-center gap-2"
          >
            <div className="text-gray-400 text-sm rotate-90 origin-center">
              projects
            </div>
            <div className="text-gray-400 text-xs">
             
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('#projects')}
              className="text-gray-400 hover:text-white animate-bounce"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;