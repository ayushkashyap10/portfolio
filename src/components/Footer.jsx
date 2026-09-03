import React from 'react';
import { Code2, ArrowUp,   Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono font-bold text-slate-200 text-sm tracking-tight">
                Ayush
              </span>
              <p className="text-[11px] text-slate-500">
                Computer Science & Engineering Student • Lovely Professional University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400 text-xs font-mono">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-sky-400 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <div>
            Built with React 18, Vite, and Tailwind CSS.
          </div>
          <div>
            Crafted for Software Engineering & IoT Placement Showcase.
          </div>
        </div>
      </div>
    </footer>
  );
}
