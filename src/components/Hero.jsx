import React from 'react';
import { ArrowDown, Mail, FileText, Cpu, CheckCircle2, Sparkles, MapPin, GraduationCap, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column: Concise & High-Impact */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                B.Tech CSE • Lovely Professional University
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 font-mono font-semibold border border-sky-500/30">
                9.53 CGPA
              </span>
            </div>

            {/* Concise Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">Ayush</span>.
              </h1>
              <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-slate-300">
                Computer Science & Engineering Student
              </h2>
            </div>

            {/* Concise Supporting Text */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Building practical software and IoT systems while solving programming problems and strengthening full-stack development skills.
            </p>

            {/* Key Value Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>ESP32 & IoT</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>250+ DSA Solved</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span>9.53 CGPA</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-sky-400 hover:bg-sky-300 active:scale-95 transition-all shadow-lg shadow-sky-500/15"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 active:scale-95 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-800/80">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors group"
                aria-label="GitHub Profile"
              >
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 group-hover:border-sky-500/40 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 group-hover:border-sky-500/40 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors group"
                aria-label="Direct Email"
              >
                <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 group-hover:border-sky-500/40 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Hero Column: Ayush's Professional Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Subtle Ambient Border Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-sky-500/30 via-indigo-500/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Main Photo Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl shadow-black/80">
                
                {/* Photo Aspect Ratio Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/ayush_profile.png"
                    alt="Ayush - Computer Science & Engineering Student"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlays for High-Contrast Integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-85"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Top Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-sky-300 shadow-md">
                      Software & IoT
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400"></span>
                  </div>

                  {/* Bottom Information Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-slate-700/80 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white text-sm tracking-tight">Ayush</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30 font-semibold">
                        LPU CSE '29
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Computer Science Student & Developer
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
