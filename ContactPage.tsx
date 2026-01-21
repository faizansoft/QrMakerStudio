import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './components/Button';
import { useLanguage } from './context/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = t('meta_contact_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_contact_desc'));
    }
  }, [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <section className="bg-white pt-20 pb-16 border-b border-slate-100 mb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 mb-6">
            Responsive Studio Support
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tighter mb-8">
            How Can We <span className="text-indigo-600">Help You?</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you are a freelancer designing high-end brand assets or a small business owner setting up your first <strong>contactless WiFi QR</strong>, we are here to support your growth.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <article className="space-y-6">
              <h2 className="text-3xl font-display font-black text-slate-900">Reach the Experts</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                At <strong>QR Generator Online</strong>, we believe in the human side of digital tools. If you have run into a technical issue with our <strong>QR code SVG generator</strong>, or if you need advice on which error correction level is best for your specific printing material, our team is standing by.
              </p>
              <p className="text-slate-600 font-medium leading-relaxed">
                We also welcome inquiries regarding business partnerships and custom API integrations. If your agency requires a white-label version of our <strong>branded QR maker</strong> or if you need bulk generation services for thousands of unique <strong>URL QR codes</strong>, please use the form or email us directly.
              </p>
            </article>

            <div className="space-y-8">
              {[
                { 
                  label: "Email Communication", 
                  val: "frehmankt@gmail.com", 
                  href: "mailto:frehmankt@gmail.com",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                },
                { 
                  label: "Studio Operations", 
                  val: "Monday - Friday, 9AM - 5PM EST", 
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                },
                { 
                  label: "Our Presence", 
                  val: "Remote-First Digital Studio", 
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
                      <a href={item.href} title={`Email ${item.val}`} className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors">{item.val}</a>
                    ) : (
                      <p className="text-lg font-bold text-slate-900">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <section className="p-10 bg-slate-950 rounded-[3.5rem] text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-widest text-indigo-400">Collaborate With Us</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Are you a developer or designer with a feature request? We are always looking to expand our <strong>customizable QR studio</strong>. From <strong>crypto payment links</strong> to niche <strong>event RSVP</strong> protocols, your feedback drives our product roadmap.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                   <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[9px] font-black uppercase text-indigo-300">Feature Requests</span>
                   <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[9px] font-black uppercase text-indigo-300">Bug Reports</span>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
            {submitted ? (
              <div className="text-center py-16 space-y-8 animate-in slide-in-from-bottom duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-display font-black text-slate-900 tracking-tight">Success!</h3>
                  <p className="text-slate-500 font-medium text-lg">We have received your message. Our team usually responds within 24 business hours.</p>
                </div>
                <Button variant="outline" onClick={() => setSubmitted(false)} title="Go back to form" className="rounded-full mt-8 uppercase tracking-[0.2em] text-[10px] font-black px-10">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" placeholder="e.g. John Doe" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold shadow-inner" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Category</label>
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold shadow-inner appearance-none cursor-pointer">
                    <option>Technical Support (SVG/Print)</option>
                    <option>Design & Logo Inquiries</option>
                    <option>Business Partnerships</option>
                    <option>Feature Requests</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Detailed Message</label>
                  <textarea required placeholder="How can we help you create a better branded experience?" className="w-full h-44 p-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-indigo-500 outline-none font-bold resize-none shadow-inner" />
                </div>
                <Button type="submit" title="Submit your message" className="w-full py-5 rounded-3xl shadow-xl shadow-indigo-100 uppercase tracking-[0.3em] font-black text-xs">Send Secure Inquiry</Button>
                <div className="pt-6 text-center space-y-4">
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Standard Response Time: &lt; 24 Hours</p>
                   <div className="flex justify-center gap-4">
                      <Link to="/privacy" title="Privacy Promise" className="text-[9px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase">Privacy Promise</Link>
                      <Link to="/faqs-qr-code-generator" title="View FAQs" className="text-[9px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase">View FAQs</Link>
                   </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;