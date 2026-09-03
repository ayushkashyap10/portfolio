import React from 'react';
import {  Code2, GitFork, Star, Terminal, BookMarked, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, githubRepos } from '../data/portfolioData';

export default function CodingSection() {
  return (
    <section id="coding" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>04 // OPEN SOURCE & PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Coding & Development
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Continuous algorithmic problem solving, open-source repositories, and disciplined programming practice.
          </p>
        </div>

        {/* GitHub Highlight Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-sky-950/20 border border-slate-800/80 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-700/80 p-1 flex-shrink-0 overflow-hidden">
              <img
                src={personalInfo.avatar}
                alt="Ayush"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">
                  Ayush ({personalInfo.githubUsername})
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-sky-500/15 text-sky-400 border border-sky-500/20">
                  Public Repositories
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                Computer Science student actively building IoT automation systems, console utilities, and practicing data structures.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-md active:scale-95 flex-shrink-0 font-mono"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Public Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-sky-400" />
              Verified Public Repositories
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              Source: github.com/{personalInfo.githubUsername}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {githubRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/30 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="font-mono font-bold text-sm text-sky-400 group-hover:text-sky-300 transition-colors truncate">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors flex-shrink-0" />
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      repo.language === 'Python' ? 'bg-amber-400' : 'bg-sky-400'
                    }`}></span>
                    <span>{repo.language}</span>
                  </span>
                  <span className="text-slate-500">Public</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
