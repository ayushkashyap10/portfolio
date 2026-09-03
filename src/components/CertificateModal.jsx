import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
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

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[90vh] z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1322] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="text-base font-bold text-white truncate max-w-md">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {cert.organization} • {cert.date}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cert.image}
              download={`${cert.title.replace(/\s+/g, '_')}.png`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
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

        {/* Certificate Image Viewer */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center bg-slate-950/70">
          <div className="relative max-w-2xl w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="w-full max-w-2xl mt-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300 space-y-1 text-left">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{cert.credentialType}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {cert.description}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
