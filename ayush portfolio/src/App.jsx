import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingSection from './components/CodingSection';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      {/* Sticky Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <CodingSection />
        <Achievements />
        <Education />
        <Certifications />
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global In-App Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
