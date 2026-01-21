import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="qr-gradient w-8 h-8 rounded-lg shadow-lg shadow-indigo-500/20"></div>
              <span className="text-xl font-display font-black tracking-tight">QR Generator Online</span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed font-medium">
              Professional QR generation for businesses and individuals. Create a <strong>custom qr code</strong> with our <strong>customizable qr code maker</strong>. No signup, no expiration, and no limits on your creativity.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-black uppercase text-indigo-400 border border-slate-800 tracking-widest">v2.1 Stable</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-black uppercase text-green-400 border border-slate-800 tracking-widest">Safe & Secure</span>
            </div>
          </div>
          
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Core Tools</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/url-qr-code-generator" className="hover:text-white transition-colors">URL Website QR</Link></li>
               <li><Link to="/googleform-qr-code-generator" className="hover:text-white transition-colors">Google Forms QR</Link></li>
               <li><Link to="/wifi-qr-code-generator" className="hover:text-white transition-colors">WiFi Access QR</Link></li>
               <li><Link to="/vcard-qr-code-generator" className="hover:text-white transition-colors">Business vCard</Link></li>
               <li><Link to="/event-qr-code-generator" className="hover:text-white transition-colors">Event Calendar QR</Link></li>
               <li><Link to="/location-qr-code-generator" className="hover:text-white transition-colors">Maps Location QR</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Communication</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/whatsapp-qr-code-generator" className="hover:text-white transition-colors">WhatsApp Chat QR</Link></li>
               <li><Link to="/facebook-qr-code-generator" className="hover:text-white transition-colors">Facebook Page QR</Link></li>
               <li><Link to="/email-qr-code-generator" className="hover:text-white transition-colors">Direct Email QR</Link></li>
               <li><Link to="/sms-qr-code-generator" className="hover:text-white transition-colors">SMS Text QR</Link></li>
               <li><Link to="/phone-qr-code-generator" className="hover:text-white transition-colors">Phone Dialer QR</Link></li>
               <li><Link to="/crypto-qr-code-generator" className="hover:text-white transition-colors">Crypto Payment QR</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/faqs-qr-code-generator" className="hover:text-white transition-colors">FAQs & Help</Link></li>
               <li><Link to="/about" className="hover:text-white transition-colors">About Our Studio</Link></li>
               <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
               <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
               <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <div className="flex items-center gap-2">
            <span>© 2026 QR Generator Online</span>
          </div>
          <div className="flex gap-8">
            <span className="hover:text-slate-400 transition-colors">Local Processing</span>
            <span className="hover:text-slate-400 transition-colors">No Tracking</span>
            <span className="hover:text-slate-400 transition-colors">Vector High-Res</span>
          </div>
        </div>
      </div>
    </footer>
  );
};