import React, { useState } from 'react';
import { Button } from './components/Button';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Human Support
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8">
            Let's <span className="text-indigo-600">Connect.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Have a question about <strong>custom qr codes</strong>, need technical help, or just want to send us feedback? We're real people, and we're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-black text-slate-900">Direct Contact</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Whether you're a designer looking for <strong>qr code generator svg</strong> tips or a small business owner setting up your first <strong>wifi qr code</strong>, we want to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { 
                  label: "Email Us", 
                  val: "frehmankt@gmail.com", 
                  href: "mailto:frehmankt@gmail.com",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                },
                { 
                  label: "Availability", 
                  val: "Mon - Fri, 9AM - 6PM EST", 
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                },
                { 
                  label: "Studio Location", 
                  val: "Digital First • Remote Studio", 
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform shadow-sm border border-indigo-100/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors">{item.val}</a>
                    ) : (
                      <p className="text-lg font-bold text-slate-900">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Enterprise Solutions</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Need a custom API integration for your agency or high-volume <strong>qr code svg generator</strong> services for your corporation? We provide tailored white-label solutions for scale.
                </p>
                <div className="pt-2">
                  <a href="mailto:frehmankt@gmail.com" className="text-white hover:text-indigo-300 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    Inquire for Bulk <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-3xl font-display font-black text-slate-900">Message Received!</h3>
                <p className="text-slate-500 font-medium">We've got your note. Our small team usually responds within one business day. Check your inbox soon!</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-full mt-8 uppercase tracking-widest text-[10px] font-black">Send New Inquiry</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold shadow-inner" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</label>
                  <input required type="text" placeholder="How can we help?" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea required placeholder="Describe your request in detail..." className="w-full h-40 p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold resize-none shadow-inner" />
                </div>
                <Button type="submit" className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 uppercase tracking-[0.2em] font-black text-sm">Send Secure Message</Button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">We never share your contact info with third parties.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;