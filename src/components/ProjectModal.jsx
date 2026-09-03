import React, { useState, useEffect } from 'react';
import { X,  ExternalLink, Cpu, CheckCircle2, ChevronRight, Layers, Terminal, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [cliSelection, setCliSelection] = useState('view');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const isHydro = project.id === 'hydro-mind';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[90vh] z-10">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1322] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {project.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-left">
          
          {/* Real Project Photos & Architecture Showcase */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-sky-400" />
                  {isHydro ? "Hardware Prototype & Telemetry Showcase" : "Project Overview & Visual Architecture"}
                </h4>
                {project.images.length > 1 && (
                  <span className="text-xs text-slate-400 font-mono">
                    {activeImageIndex + 1} of {project.images.length}
                  </span>
                )}
              </div>

              {/* Main Photo View */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video max-h-[380px] flex items-center justify-center">
                <img
                  src={project.images[activeImageIndex].url}
                  alt={project.images[activeImageIndex].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
                  <div className="font-semibold text-sm text-white">
                    {project.images[activeImageIndex].title}
                  </div>
                  <div className="text-xs text-slate-300">
                    {project.images[activeImageIndex].description}
                  </div>
                </div>
              </div>

              {/* Thumbnails Row if multiple */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border text-left transition-all p-1 ${
                        activeImageIndex === idx
                          ? 'border-sky-400 ring-2 ring-sky-500/20 bg-sky-500/10'
                          : 'border-slate-800 hover:border-slate-700 bg-slate-950'
                      }`}
                    >
                      <div className="aspect-video overflow-hidden rounded mb-1">
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 truncate px-1">
                        {img.title}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Student Management System Interactive CLI Runner */}
          {!isHydro && (
            <div className="rounded-xl bg-[#090d16] border border-slate-800 p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-sky-400 font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>Interactive Terminal Demo</span>
                </div>
                <div className="text-[11px] text-slate-500">Python 3.x CLI Execution</div>
              </div>

              {/* Action Buttons to test CLI */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCliSelection('view')}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    cliSelection === 'view' ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  1) View All Students
                </button>
                <button
                  onClick={() => setCliSelection('search')}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    cliSelection === 'search' ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  2) Search (Reg: 12501560)
                </button>
                <button
                  onClick={() => setCliSelection('add')}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    cliSelection === 'add' ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  3) Add Student Validation
                </button>
                <button
                  onClick={() => setCliSelection('storage')}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    cliSelection === 'storage' ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  4) Inspect students.txt
                </button>
              </div>

              {/* Output screen */}
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/80 leading-relaxed text-slate-300">
                {cliSelection === 'view' && (
                  <pre className="whitespace-pre-wrap">
{`$ python main.py
Loading records from students.txt... OK (3 records loaded)

--------------------------------------------------------------------------------
Reg No    | Name            | Age | Program                     | CGPA
--------------------------------------------------------------------------------
12501560  | Ayush           | 19  | Computer Science & Eng.     | 9.53
12505643  | Rohan Verma     | 19  | Computer Science & Eng.     | 8.39
12508921  | Priya Sharma    | 20  | Electronics & Comm. Eng.    | 8.85
--------------------------------------------------------------------------------`}
                  </pre>
                )}

                {cliSelection === 'search' && (
                  <pre className="whitespace-pre-wrap text-emerald-400">
{`$ python main.py --search 12501560
[+] Record Found:
    Registration Number : 12501560
    Student Name        : Ayush
    Academic Program    : Computer Science & Engineering
    Current CGPA        : 9.53
    Storage State       : Synchronized with flat file`}
                  </pre>
                )}

                {cliSelection === 'add' && (
                  <pre className="whitespace-pre-wrap text-amber-300">
{`$ python main.py --add
Enter Registration Number: 12501560
[ERROR] DuplicateRecordError: Registration number 12501560 already registered!
Please provide a unique identifier to maintain primary record integrity.`}
                  </pre>
                )}

                {cliSelection === 'storage' && (
                  <pre className="whitespace-pre-wrap text-sky-300">
{`$ cat students.txt
# Flat-file persistent data storage schema:
# Registration Number | Name | Age | Program | CGPA
12501560|Ayush|19|Computer Science and Engineering|9.53
12505643|Rohan Verma|19|Computer Science and Engineering|8.39
12508921|Priya Sharma|20|Electronics and Communication|8.85`}
                  </pre>
                )}
              </div>
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              System Overview & Problem Statement
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Flow Steps */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Technical Execution Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.technicalFlow.map((flow, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5"
                >
                  <span className="text-xs font-mono font-bold text-sky-400">
                    {flow.step}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {flow.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram if available */}
          {project.architectureDiagram && (
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                System Logic & Architecture Diagram
              </h4>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] sm:text-xs text-sky-300 overflow-x-auto leading-normal">
                <pre>{project.architectureDiagram}</pre>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-sky-300 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-[#0e1322] border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Direct GitHub Source Available
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-md active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>Open Repository</span>
          </a>
        </div>

      </div>

    </div>
  );
}
