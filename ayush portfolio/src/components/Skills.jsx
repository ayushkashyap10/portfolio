import React, { useState } from 'react';
import { Code2, Globe, Database, Compass, CheckCircle2, Terminal, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    languages: Code2,
    web: Globe,
    tools: Database,
    exploring: Compass,
    soft: CheckCircle2
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Proficiencies structured across programming languages, web standards, development tools, and active learning areas.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Terminal;
            const isExploring = category.id === 'exploring';

            return (
              <div
                key={category.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
                  isExploring
                    ? 'bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-indigo-950/20 border border-indigo-500/30'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isExploring ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.title}
                      </h3>
                      {isExploring && (
                        <span className="text-[10px] uppercase font-mono text-indigo-400 tracking-wider font-semibold">
                          Active Continuous Learning
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`group px-3 py-2 rounded-xl flex flex-col gap-0.5 border transition-all ${
                          isExploring
                            ? 'bg-slate-950/60 border-indigo-500/20 hover:border-indigo-400/40'
                            : 'bg-slate-950/60 border-slate-800 hover:border-sky-500/40'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                            isExploring
                              ? 'bg-indigo-500/20 text-indigo-300'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="font-mono text-[10px] text-slate-400">Verified & Practiced</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
