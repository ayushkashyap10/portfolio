import React from 'react';
import { Award, BookOpen, Code, Cpu, Layers, Sparkles, Trophy, CheckCircle, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: "Embedded Systems & IoT",
      desc: "Architecting real-world sensor networks, ESP32 automation, and cloud integrations with Blynk and OpenWeather API."
    },
    {
      icon: Code,
      title: "Software & Systems Development",
      desc: "Building structured CLI tools, file management systems, and algorithms with clean OOP principles in C++ and Python."
    },
    {
      icon: Layers,
      title: "Modern Web Engineering",
      desc: "Creating responsive, accessible, and fast web applications using modern JavaScript, React, and modular styling."
    },
    {
      icon: GraduationCap,
      title: "Academic & Algorithmic Rigor",
      desc: "Maintaining a 9.53 CGPA at Lovely Professional University while practicing 250+ algorithmic data structure problems."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07090e]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Foundations & Problem Solving
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Focused on building practical software, bridging hardware with cloud services, and writing efficient, maintainable code.
          </p>
        </div>

        {/* Highlighted Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl transition-all relative overflow-hidden ${
                stat.highlight
                  ? 'bg-gradient-to-b from-sky-500/15 to-slate-900/80 border border-sky-500/40 shadow-lg shadow-sky-500/5'
                  : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {stat.highlight && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/10 rounded-bl-full pointer-events-none"></div>
              )}
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Technical Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Narrative Card */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Engineering Journey
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong>Computer Science & Engineering student</strong> at <strong>Lovely Professional University</strong> with a strong passion for software development, embedded systems, and algorithmic problem solving.
              </p>
              <p>
                My work spans from low-level microcontroller programming with the <strong>ESP32</strong> (interfacing sensors, relays, and cloud APIs for smart automation) to building reliable applications with <strong>Python and C++</strong> that solve everyday workflow challenges.
              </p>
              <p>
                I believe in disciplined engineering: combining solid theoretical fundamentals (data structures, OOP, file handling) with real, deployable hardware and software projects.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Punjab / Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>B.Tech CSE (2025 - Present)</span>
              </div>
            </div>
          </div>

          {/* Core Pillars 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-sky-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-100 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
