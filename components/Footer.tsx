import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link to="/" title="Return to Homepage" className="flex items-center gap-3 group inline-flex">
              <div className="qr-gradient w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shadow-indigo-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-xl font-display font-black tracking-tight text-white">QR Generator <span className="text-indigo-400">Online</span></span>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed font-medium">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-black uppercase text-indigo-400 border border-slate-800 tracking-widest">Always Static</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-black uppercase text-green-400 border border-slate-800 tracking-widest">Client Rendering</span>
            </div>
            
            {/* Social & Featured Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {/* Product Hunt Badge */}
              <a 
                href="https://www.producthunt.com/products/qr-generator-online?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-qr-generator-online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-[1.02] active:scale-95 shrink-0"
              >
                <img 
                  alt="QR Generator Online - Secure, customizable QR codes for every need. | Product Hunt" 
                  width="250" 
                  height="54" 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1067648&theme=neutral&t=1769326132352"
                  className="rounded-lg shadow-2xl shadow-indigo-500/10"
                />
              </a>

              {/* Facebook Social Link */}
              <a 
                href="https://www.facebook.com/qrgenerator.online" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow QR Generator Online on Facebook"
                className="w-[54px] h-[54px] bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:bg-white hover:border-white transition-all group shrink-0 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">{t('footer_links_title')}</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/url-qr-code-generator" title="Create a QR code for a website URL" className="hover:text-white transition-colors">URL / Link QR</Link></li>
               <li><Link to="/googleform-qr-code-generator" title="Create a QR code for a Google Form survey" className="hover:text-white transition-colors">Google Forms QR</Link></li>
               <li><Link to="/facebook-qr-code-generator" title="Create a QR code for a Facebook page" className="hover:text-white transition-colors">Facebook QR</Link></li>
               <li><Link to="/whatsapp-qr-code-generator" title="Create a QR code to start a WhatsApp chat" className="hover:text-white transition-colors">WhatsApp QR</Link></li>
               <li><Link to="/wifi-qr-code-generator" title="Create a QR code for easy WiFi sharing" className="hover:text-white transition-colors">WiFi Sharing QR</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">{t('footer_contact_title')}</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/vcard-qr-code-generator" title="Create a professional vCard business card QR" className="hover:text-white transition-colors">Business vCard QR</Link></li>
               <li><Link to="/email-qr-code-generator" title="Create a QR code for sending an email" className="hover:text-white transition-colors">Direct Email QR</Link></li>
               <li><Link to="/sms-qr-code-generator" title="Create a QR code for sending an SMS" className="hover:text-white transition-colors">SMS Text QR</Link></li>
               <li><Link to="/phone-qr-code-generator" title="Create a QR code for a phone call" className="hover:text-white transition-colors">Phone Call QR</Link></li>
               <li><Link to="/event-qr-code-generator" title="Create a QR code for calendar events" className="hover:text-white transition-colors">Event Calendar QR</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">{t('footer_company_title')}</h4>
             <ul className="space-y-4 text-sm text-slate-300 font-medium">
               <li><Link to="/about" title="Read about our QR Code Studio" className="hover:text-white transition-colors">About Our Studio</Link></li>
               <li><Link to="/faqs-qr-code-generator" title="Help and frequently asked questions" className="hover:text-white transition-colors">Help & FAQ</Link></li>
               <li><Link to="/contact" title="Contact our support team" className="hover:text-white transition-colors">Contact Support</Link></li>
               <li><Link to="/privacy" title="Read our privacy policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
               <li><Link to="/terms" title="Read our terms of service" className="hover:text-white transition-colors">Terms of Service</Link></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <div className="flex items-center gap-2">
            <span>© 2026 QR Generator Online Studio</span>
          </div>
          <div className="flex gap-8">
            <Link to="/crypto-qr-code-generator" title="Create cryptocurrency payment links" className="hover:text-slate-400 transition-colors">Crypto Payments</Link>
            <Link to="/location-qr-code-generator" title="Create Google Maps location links" className="hover:text-slate-400 transition-colors">Maps Location</Link>
            <Link to="/text-qr-code-generator" title="Create plain text QR codes" className="hover:text-slate-400 transition-colors">Plain Text QR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};