import React from 'react';
import {  ExternalLink, Cpu, Terminal, ArrowRight, Layers, Zap, CloudSun } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  const isHydro = project.id === 'hydro-mind';

  return (
    <div className="group relative rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40 hover:shadow-sky-500/5">
      
      {/* Visual Header / Media Preview */}
        {/* Project Thumbnail Image */}
        <div className="relative h-full w-full">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>
          
          {/* Tag Overlay */}
          <div className="absolute top-3.5 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-sky-400 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{isHydro ? 'ESP32 Hardware Built' : 'Python CLI Project'}</span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-mono text-[11px] bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
              {isHydro ? 'OpenWeather + Blynk' : 'File Handling & CRUD'}
            </span>
            <span className="text-[11px] font-mono bg-slate-950/80 px-2 py-1 rounded-md border border-slate-800 text-slate-400">
              {isHydro ? '3 Hardware Photos' : 'Full Architecture'}
            </span>
          </div>
        </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Subtitle / Category */}
          <div className="text-xs font-mono text-sky-400 font-medium mb-1 tracking-wider uppercase">
            {project.category}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>

          {project.subtitle && (
            <div className="text-xs text-slate-400 font-medium mb-3">
              {project.subtitle}
            </div>
          )}

          <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Key Features Bullet Points */}
          <div className="space-y-1.5 mb-5 text-xs text-slate-400">
            {project.features.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2">
                <span className="text-sky-400 select-none font-mono">▸</span>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/50 text-slate-500">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 flex items-center justify-center gap-2 group/btn transition-all active:scale-95"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors focus:ring-2 focus:ring-sky-500"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  );
}
