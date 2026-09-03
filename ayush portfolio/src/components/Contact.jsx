import React, { useState } from 'react';
import { Mail, Phone, MapPin,   Send, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Reliable mailto fallback without fake backend
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            I'm always interested in learning, building meaningful projects, and connecting with people working on interesting ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an internship opportunity, a project collaboration in IoT or software, or simply want to chat about tech, feel free to reach out.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate text-xs sm:text-sm">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-sky-400 transition-colors font-medium">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Mobile</div>
                      <span className="text-slate-200 font-medium">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn</div>
                      <span className="text-slate-200 group-hover:text-sky-400 transition-colors font-medium">
                        linkedin.com/in/ayush-839a31390
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">GitHub</div>
                      <span className="text-slate-200 group-hover:text-sky-400 transition-colors font-medium">
                        github.com/ayushkashyap10
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>

              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate an email directly to my primary inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <span>Opening your email client to dispatch the message. Thank you for connecting!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    YOUR EMAIL ADDRESS *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-msg"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/15 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
