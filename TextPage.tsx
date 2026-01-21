import React, { useState, useEffect } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const TextPage: React.FC<PageProps> = (props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = "Text to QR Code Generator | Secure Offline Data Storage";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Convert any raw text or notes into a scannable QR code. No internet required for scanning. Perfect for inventory labels, offline notes, and technical data.');
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 mb-6">
            Universal Data Storage
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Text to QR <span className="text-emerald-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Convert any body of text, serial numbers, or notes into a scannable format. Our <strong>text to qr code generator</strong> works entirely offline and stays yours forever.
          </p>
        </div>
      </section>

      <Workspace type="text" value={text} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Raw Text Content</label>
          <textarea 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="Paste your text, codes, or inventory data here..." 
            className="w-full h-64 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold resize-none focus:border-emerald-500 shadow-inner" 
          />
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex gap-4">
            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 mt-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <p className="text-[11px] text-emerald-700 font-bold leading-relaxed">
              <b>DENSITY TIP:</b> Longer text makes the QR pattern denser. For long paragraphs, use 'High' error correction and our <strong>qr code generator svg</strong> for sharp printing.
            </p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Digital Utility, <br/>Stored Physically.</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            A <strong>qr code generator for text</strong> is unique because it doesn't require an internet connection. The information is stored directly in the pattern itself.
          </p>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Text QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is a text to qr code generator free?", a: "Yes, our tool is free and produces permanent codes with no scan limits." },
               { q: "Can I add emojis to the text?", a: "Yes! Our <strong>text to qr code generator</strong> supports standard Unicode, meaning emojis will scan perfectly." },
               { q: "Does the code need the internet?", a: "No. The text is stored in the pattern itself. It works anywhere." },
               { q: "How can I make a qr code with logo?", a: "Navigate to the 'Logo' tab to brand your professional labels." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>
      </article>
    </div>
  );
};

export default TextPage;