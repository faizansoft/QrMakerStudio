import React, { useState } from 'react';
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              A <strong>qr code generator for text</strong> is unique because it doesn't require an internet connection to work. The information is stored directly in the pattern itself. This makes it the perfect tool for warehouse management, secret notes, or simple physical labeling.
            </p>
            <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner relative overflow-hidden group">
               <div className="relative z-10 space-y-4">
                 <h4 className="font-bold text-slate-900">Maximum Capacity</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">QR codes can hold up to 4,296 alphanumeric characters. Our <strong>text to qr code generator</strong> supports the full spectrum, including special characters and emojis.</p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Inventory Tracking", desc: "Generate <strong>customizable qr codes</strong> for serial numbers. Durable enough for the warehouse floor." },
             { title: "Edu-Tech Games", desc: "Create treasure hunts by hiding answers in a <strong>text to qr code generator</strong> output." },
             { title: "WiFi Backup", desc: "Print your recovery keys or long passwords as a <strong>qr code with logo in middle</strong> to keep them safe and scannable." }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-emerald-200 transition-all">
                <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-emerald-900 text-white p-12 rounded-[4rem] space-y-8">
           <h3 className="text-3xl font-display font-black text-center">Technical Density Guide</h3>
           <div className="grid md:grid-cols-2 gap-12 text-sm">
             <div className="space-y-4">
               <p className="text-emerald-100/70 font-medium">As you add more text, the <strong>qr code generator for text</strong> adds more rows and columns to the grid. This is called 'Version Incrementing'. For massive blocks of text, you need high contrast to ensure the scanner can distinguish between the tiny dots.</p>
             </div>
             <div className="space-y-4">
               <p className="text-emerald-100/70 font-medium">We recommend downloading our <strong>qr code generator svg</strong> for any text block over 200 characters. Vector files handle the small grid details far better than standard image formats, preventing 'blur errors'.</p>
             </div>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Text QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is a text to qr code generator free?", a: "Yes, our tool is free and produces permanent codes with no scan limits or expiration dates." },
               { q: "Can I add emojis to the text?", a: "Yes! Our <strong>text to qr code generator</strong> supports standard Unicode, meaning emojis and special characters will scan perfectly." },
               { q: "Does the code need the internet?", a: "No. Unlike URL codes, the text is stored in the pattern itself. It works anywhere, even in a basement with zero reception." },
               { q: "How can I make a qr code with logo for my text?", a: "Navigate to the 'Logo' tab in the workspace to create a <strong>qr code with logo in middle</strong> for your professional labels." }
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