import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side processing & prepare mailto
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Thank you! Your message has been prepared. Opening your email client...', 'success');

      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi ${personalData.displayName},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.location.href = mailtoUrl;

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setEmailCopied(true);
    showToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/30 border-t border-white/[0.05]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-panel border border-accent-cyan/40 bg-dark-900/95 shadow-2xl backdrop-blur-xl text-slate-100 text-sm font-medium"
          >
            {toastMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            )}
            <span>{toastMessage.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-2 text-base text-slate-300 max-w-xl">
            Have a project, full-stack opening, or technical idea? Send a message or reach out directly.
          </p>
        </div>

        {/* Split: Contact Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy Email Card */}
            <div className="glass-panel p-6 rounded-2xl border-white/[0.08] relative group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400">Direct Contact</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-accent-cyan-light transition-colors p-1"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-accent-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-100">Email Address</span>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-300 hover:text-accent-cyan transition-colors"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="glass-panel p-6 rounded-2xl border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-accent-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-mono">Location</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {personalData.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center text-accent-violet">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-mono">Availability / Zone</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {personalData.timezone}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="glass-panel p-6 rounded-2xl border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400 block mb-3">
                Social Profiles & Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Modern Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel p-6 sm:p-8 rounded-2xl border-white/[0.09] space-y-5 shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-850/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-accent-cyan/60'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="s.jenkins@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-850/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-accent-cyan/60'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. MERN Stack Role / Full-Stack Project Collaboration"
                  className={`w-full px-4 py-2.5 rounded-xl bg-dark-850/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.subject
                      ? 'border-rose-500 focus:border-rose-400'
                      : 'border-white/10 focus:border-accent-cyan/60'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vision, timeline, or engineering opportunity..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-dark-850/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-rose-500 focus:border-rose-400'
                      : 'border-white/10 focus:border-accent-cyan/60'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shine-effect w-full py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-accent-cyan-light to-accent-blue hover:opacity-95 shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center font-mono text-slate-400">
                Direct contact via standard email protocol. No unsolicited spam.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
