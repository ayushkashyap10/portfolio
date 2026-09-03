import React, { useState } from 'react';
import { FolderGit2, Cpu, Terminal, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Major Engineering Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Real software applications and embedded IoT systems designed, coded, and documented with production-grade engineering principles.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>

        {/* Detailed Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
