import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <span className="text-xl font-display font-black text-slate-900 tracking-tight">QR Studio <span className="text-indigo-600">Pro</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/url-qr-generator" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">URL</Link>
          <Link to="/wifi-qr-generator" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">WiFi</Link>
          <Link to="/vcard-qr-generator" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Business Card</Link>
          <Link to="/email-qr-generator" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Email</Link>
        </nav>

        <Link to="/url-qr-generator">
          <Button size="sm" variant="primary" className="rounded-full px-6 shadow-xl shadow-indigo-100">Create Free QR</Button>
        </Link>
      </div>
    </header>
  );
};