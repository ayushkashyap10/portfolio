import React from 'react';
import { Trophy, Code, Award, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>05 // RECOGNITION & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Demonstrated commitment to algorithmic problem solving and competitive team performance.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => {
            const isHackathon = item.id === 'hackathon-top';
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isHackathon
                    ? 'bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-indigo-950/20 border-indigo-500/30 shadow-xl shadow-indigo-500/5'
                    : 'bg-slate-900/50 border-slate-800/80 shadow-xl shadow-black/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isHackathon ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30' : 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                    }`}>
                      {isHackathon ? <Trophy className="w-6 h-6" /> : <Code className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-2">
                    {item.type}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{item.organization}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
