
import React, { useState } from 'react';
import { Button } from './components/Button';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a backend or use a service like Formspree
  };

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8">
            Get in <span className="text-indigo-600">Touch.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Have a question, feedback, or need a custom solution? Our studio is here to help you make your digital connections flawless.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-black text-slate-900">Contact Information</h2>
              <p className="text-slate-500 font-medium">
                We're always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Email Us</h4>
                  <a href="mailto:frehmankt@gmail.com" className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors">frehmankt@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Availability</h4>
                  <p className="text-lg font-bold text-slate-900">Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Location</h4>
                  <p className="text-lg font-bold text-slate-900">Global Digital Studio</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
              <h4 className="text-sm font-bold mb-4">Enterprise Inquiries</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">Need a custom API or bulk generation for your corporation? We provide tailored solutions for large-scale deployments.</p>
              <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0 font-bold text-xs uppercase tracking-widest">Inquire Now →</Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-3xl font-display font-black text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 font-medium">Thank you for reaching out. Our team will get back to you at frehmankt@gmail.com within 24 hours.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-full mt-8">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</label>
                  <input required type="text" placeholder="How can we help?" className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea required placeholder="Describe your inquiry in detail..." className="w-full h-40 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold resize-none" />
                </div>
                <Button type="submit" className="w-full py-5 rounded-2xl shadow-xl shadow-indigo-100 uppercase tracking-[0.2em] font-black text-sm">Send Message</Button>
                <p className="text-center text-[10px] text-slate-400 font-medium">By clicking send, you agree to our privacy terms.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Fixed: Added missing default export
export default ContactPage;