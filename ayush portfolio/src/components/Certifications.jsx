import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>07 // CREDENTIALS & LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified course completions and technical credentials across React full-stack engineering, programming, and version control.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40 hover:shadow-sky-500/5"
            >
              {/* Preview Image */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative h-44 w-full bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-800/80"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                {/* View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-sky-400 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <div className="text-[11px] font-mono text-sky-400 font-medium mb-1">
                    {cert.organization}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.date}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 transition-colors"
                    aria-label={`View ${cert.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}

      </div>
    </section>
  );
}
