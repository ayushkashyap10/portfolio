import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>06 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Academic qualifications demonstrating consistent scholastic discipline and foundational training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => {
            const isLpu = edu.id === 'lpu';
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isLpu
                    ? 'bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-sky-950/20 border-sky-500/40 shadow-xl shadow-sky-500/5'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {edu.institution}
                      </h3>
                      {isLpu && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-sky-400">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-950 font-mono text-xs font-bold text-emerald-400 border border-slate-800">
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {edu.details}
                </p>

                <div className="pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{edu.location}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
