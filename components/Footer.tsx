import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-indigo-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-xl font-display font-black tracking-tight text-white">QR Generator <span className="text-indigo-400">Online</span></span>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed font-medium">
              We provide the most robust, privacy-focused <strong>customizable qr code maker</strong> on the web. Our tools are built to empower creators with high-resolution vector <strong>qr code generator svg</strong> files that work forever.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-black uppercase text-indigo-400 border border-slate-800 tracking-widest">Always Static</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-black uppercase text-green-400 border border-slate-800 tracking-widest">On-Device Rendering</span>
            </div>
          </div>
          
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Digital Links</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/url-qr-code-generator" className="hover:text-white transition-colors">URL / Link QR</Link></li>
               <li><Link to="/googleform-qr-code-generator" className="hover:text-white transition-colors">Google Forms QR</Link></li>
               <li><Link to="/facebook-qr-code-generator" className="hover:text-white transition-colors">Facebook QR</Link></li>
               <li><Link to="/whatsapp-qr-code-generator" className="hover:text-white transition-colors">WhatsApp QR</Link></li>
               <li><Link to="/wifi-qr-code-generator" className="hover:text-white transition-colors">WiFi Sharing QR</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Contact & Personal</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/vcard-qr-code-generator" className="hover:text-white transition-colors">Business vCard QR</Link></li>
               <li><Link to="/email-qr-code-generator" className="hover:text-white transition-colors">Direct Email QR</Link></li>
               <li><Link to="/sms-qr-code-generator" className="hover:text-white transition-colors">SMS Text QR</Link></li>
               <li><Link to="/phone-qr-code-generator" className="hover:text-white transition-colors">Phone Call QR</Link></li>
               <li><Link to="/event-qr-code-generator" className="hover:text-white transition-colors">Event Calendar QR</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/about" className="hover:text-white transition-colors">About Our Studio</Link></li>
               <li><Link to="/faqs-qr-code-generator" className="hover:text-white transition-colors">Help & FAQ</Link></li>
               <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
               <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
               <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <div className="flex items-center gap-2">
            <span>© 2026 QR Generator Online Studio</span>
          </div>
          <div className="flex gap-8">
            <Link to="/crypto-qr-code-generator" className="hover:text-slate-400 transition-colors">Crypto Payments</Link>
            <Link to="/location-qr-code-generator" className="hover:text-slate-400 transition-colors">Maps Location</Link>
            <Link to="/text-qr-code-generator" className="hover:text-slate-400 transition-colors">Plain Text QR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};