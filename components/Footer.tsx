import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="qr-gradient w-8 h-8 rounded-lg"></div>
              <span className="text-xl font-display font-black tracking-tight">QR Studio Pro</span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Professional QR generation for businesses and individuals. No signup, no expiration, and no limits on your creativity.
            </p>
          </div>
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Tools</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/url-qr-generator" className="hover:text-white transition-colors">URL Generator</Link></li>
               <li><Link to="/googleform-qr-generator" className="hover:text-white transition-colors">Google Forms QR</Link></li>
               <li><Link to="/wifi-qr-generator" className="hover:text-white transition-colors">WiFi Maker</Link></li>
               <li><Link to="/vcard-qr-generator" className="hover:text-white transition-colors">Business vCard</Link></li>
               <li><Link to="/text-qr-generator" className="hover:text-white transition-colors">Text Creator</Link></li>
             </ul>
          </div>
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Support</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
               <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
               <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
               <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
             </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <span>© 2026 QR Studio Pro</span>
          <div className="flex gap-8">
            <span>Local Processing</span>
            <span>No Tracking</span>
            <span>Vector High-Res</span>
          </div>
        </div>
      </div>
    </footer>
  );
};