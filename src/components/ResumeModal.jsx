import React, { useEffect } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, Mail, Phone, ExternalLink,   } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white">
      
      {/* Backdrop */}
      <div className="fixed inset-0 print:hidden" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-[#0d121d] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[92vh] z-10 print:max-h-none print:border-none print:shadow-none print:bg-white">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1322] border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-base text-white">
              Official Resume Preview — Ayush
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={personalInfo.resumePdf}
              download="Ayush_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-sm"
              title="Download PDF format"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resumeDocx}
              download="Ayush_Resume.docx"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Download DOCX format"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOCX</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Clean Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans text-xs sm:text-sm leading-relaxed text-left print:p-8 print:bg-white print:text-black">
          
          <div className="max-w-3xl mx-auto bg-[#0b0f19] p-8 sm:p-12 rounded-xl border border-slate-800 shadow-xl print:shadow-none print:border-none print:p-0 print:bg-white">
            
            {/* Header / Contact */}
            <div className="border-b border-slate-700/80 pb-6 mb-6 print:border-black">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 print:text-black">
                Ayush
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-400 print:text-black">
                <div>
                  <span className="text-slate-500 print:text-black">LinkedIn: </span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline print:text-black">
                    linkedin.com/in/ayush-839a31390
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 print:text-black">Email: </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sky-400 hover:underline print:text-black">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 print:text-black">GitHub: </span>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline print:text-black">
                    github.com/ayushkashyap10
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 print:text-black">Mobile: </span>
                  <span className="text-slate-300 print:text-black">{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider text-sky-400 uppercase border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
                SKILLS
              </h2>
              <ul className="space-y-1 text-xs text-slate-300 print:text-black">
                <li><strong className="text-white print:text-black">• Languages:</strong> JavaScript, C, C++, Python</li>
                <li><strong className="text-white print:text-black">• Technologies:</strong> HTML, CSS</li>
                <li><strong className="text-white print:text-black">• Databases/Tools:</strong> MySQL, Git, GitHub, Figma</li>
                <li><strong className="text-white print:text-black">• Soft Skills:</strong> Problem solving, Team collaboration, Time management, Adaptability</li>
              </ul>
            </div>

            {/* PROJECTS */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider text-sky-400 uppercase border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
                PROJECTS
              </h2>
              
              <div className="space-y-4 text-xs">
                {/* SMS */}
                <div>
                  <div className="flex items-center justify-between font-bold text-white print:text-black mb-1">
                    <span>Student Management System</span>
                    <a href="https://github.com/ayushkashyap10/Student-Management-System" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-mono print:text-black">
                      GitHub
                    </a>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 print:text-black">
                    <li>Built a CLI-based student management system implementing CRUD operations, student search, and registration-number validation.</li>
                    <li>Implemented persistent data storage using file handling, with automatic loading, updating, and deletion of records.</li>
                    <li>Applied lists, dictionaries, functions, exception handling, and input validation to develop a reliable record-management application.</li>
                  </ul>
                </div>

                {/* HYDRO MIND */}
                <div>
                  <div className="flex items-center justify-between font-bold text-white print:text-black mb-1">
                    <span>HYDRO MIND – Smart Weather-Based Irrigation System</span>
                    <span className="font-mono text-slate-400 print:text-black">ESP32, IoT</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300 print:text-black">
                    <li>Developed an IoT-based smart irrigation system using ESP32 to automate plant watering based on soil moisture and real-time weather conditions.</li>
                    <li>Integrated DHT11, soil moisture, and PIR sensors with a relay-controlled water pump for environmental monitoring and automated irrigation.</li>
                    <li>Implemented OpenWeather API integration to prevent unnecessary watering during rain, drizzle, or thunderstorms.</li>
                    <li>Built a Blynk IoT dashboard for remote monitoring and manual/automatic pump control, with sensor data displayed on a 16×2 I2C LCD.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CERTIFICATES */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider text-sky-400 uppercase border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
                CERTIFICATES
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 print:text-black">
                <li className="flex items-center justify-between">
                  <span>• Learning Full Stack React | Infosys</span>
                  <span className="font-mono text-slate-400 print:text-black">Mar 2025</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Computer programming | neoCollab</span>
                  <span className="font-mono text-slate-400 print:text-black">May 2026</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Git – Skill Up | GFG</span>
                  <span className="font-mono text-slate-400 print:text-black">Feb 2026</span>
                </li>
              </ul>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider text-sky-400 uppercase border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300 print:text-black">
                <li>Solved more than 250+ programming problems on online coding platforms during regular practice and learning.</li>
                <li>Going for many hackathons and secured Top position among 50+ teams in college hackathon with innovative web solutions.</li>
              </ul>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-xs font-bold font-mono tracking-wider text-sky-400 uppercase border-b border-slate-800 pb-1 mb-3 print:text-black print:border-black">
                EDUCATION
              </h2>
              
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex items-center justify-between font-bold text-white print:text-black">
                    <span>Lovely Professional University</span>
                    <span className="font-mono text-slate-400 print:text-black">Phagwara, Punjab</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 print:text-black">
                    <span>Bachelor of Technology - Computer Science and Engineering; CGPA: 9.53</span>
                    <span className="font-mono text-slate-400 print:text-black">Aug 2025 - Present</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-white print:text-black">
                    <span>B. V. Inter College</span>
                    <span className="font-mono text-slate-400 print:text-black">Mohammadabad, Uttar Pradesh</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 print:text-black">
                    <span>Secondary Education; Percentage: 70.8 %</span>
                    <span className="font-mono text-slate-400 print:text-black">Jun 2023 - Mar 2024</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-white print:text-black">
                    <span>S.K.M Inter College</span>
                    <span className="font-mono text-slate-400 print:text-black">Nawabganj, Uttar Pradesh</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 print:text-black">
                    <span>Higher Secondary Education; Percentage: 81.1%</span>
                    <span className="font-mono text-slate-400 print:text-black">May 2021 - Mar 2022</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
