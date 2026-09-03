import React from 'react';
import { FileText, Download, Eye, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#090d16] to-[#07090e] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-sky-950/30 border border-slate-800 p-8 sm:p-12 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/50">
          
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
              <FileText className="w-3.5 h-3.5" />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Want to know more about my journey?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore my experience, projects, technical skills, and academic background in my resume.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-lg shadow-sky-500/15 active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <a
              href={personalInfo.resumePdf}
              download="Ayush_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
