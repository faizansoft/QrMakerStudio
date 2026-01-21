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
            Versatile Data Tool
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Text to QR <span className="text-emerald-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Convert any message, serial number, or raw data into a scannable format with our <strong>text to qr code generator</strong>. Simple, fast, and secure.
          </p>
        </div>
      </section>

      <Workspace type="text" value={text} {...props}>
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Text Content</label>
          <textarea 
            value={text} 
            onChange={e => setText(e.target.value)} 
            placeholder="Paste your text, notes, or raw data here..." 
            className="w-full h-64 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold resize-none focus:border-emerald-500" 
          />
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-[11px] text-emerald-700 font-bold">
              <b>PRO TIP:</b> Longer text makes the pattern denser. For paragraphs, use our <strong>qr code generator svg</strong> for maximum readability at any size.
            </p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Using a text to qr code generator effectively</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            A <strong>qr code generator for text</strong> is perfect for sharing info that doesn't need an internet connection. From Wi-Fi backup keys to treasure hunts and warehouse inventory labels, the <strong>text to qr code generator</strong> is the most flexible tool in your digital arsenal.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Common Use Cases</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-black">✓</span>
                <span><strong>Product Info:</strong> Store serial numbers or batch data directly on packaging.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-black">✓</span>
                <span><strong>Education:</strong> <strong>Create a custom qr code</strong> for hidden answers in student worksheets.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-black">✓</span>
                <span><strong>Logistics:</strong> Generate text-based codes for asset tracking and warehouse management.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Design Guidance</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              When using a <strong>qr code generator for text</strong> with a lot of data, choose 'High' error correction and download a <strong>qr code svg generator</strong> file. This ensures that even if the code is slightly damaged or printed small, the text remains recoverable.
            </p>
          </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Text QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is there a limit to how much text I can add?", a: "Technically, QR codes can hold up to 4,296 characters. However, for a <strong>text to qr code generator</strong>, we recommend keeping it under 1,000 for easier scanning." },
               { q: "Do I need the internet to scan text codes?", a: "No! Unlike URL codes, a <strong>text to qr code generator</strong> output stores the data directly in the pattern, so it works completely offline." },
               { q: "Can I make a qr code with logo customization for text?", a: "Yes, our tool supports <strong>qr code with logo in middle</strong> branding for all text-based codes." },
               { q: "What format should I download for printing?", a: "Always use our <strong>qr code svg generator</strong> for printing, as it prevents the 'fuzziness' that can make dense text codes unreadable." }
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