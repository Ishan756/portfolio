"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ResumeSection from '@/components/resume-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}